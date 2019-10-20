---
layout: null
sitemap:
  exclude: 'yes'
---
'use strict';

document.addEventListener("DOMContentLoaded", () => {
    let apiUrl = '{{ site.APIBaseUrl }}';
    let container = document.querySelector('#raffle');

    fetch(`${apiUrl}/points`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#LoadingHeader').remove();
            generateMachine(data);
        })
        .catch(() => {
            document.querySelector('#LoadingHeader').remove();
            container.textContent
                = ('There was an error while contacting the points service. ' +
                   'Please try again later.');
        });
});

function getRandomArrayItem(array) {
    /* There does not appear to be a standard way to pick a random item from
       an Array. Note: Since Array.length is one more than the maximum index of
       the Array, Math.random() not ever returning 1 won't be a problem when
       flooring the result to an integer, as it takes care of not returning
       one over the highest index. */
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    /* Returns a new array, with the input array's entries in random order.*/
    let old = array.slice(); // don't destroy original array
    let out = [];

    old.forEach(item => {
        let index = Math.floor(Math.random() * old.length);
        out.push(old.splice(index, 1)[0]);
    });

    return out;
}

function generateMachine(data) {
    let spinButton = document.querySelector('#spin');
    let winnerElement = document.querySelector('#winner');
    let nameBox = document.querySelector('#entries');

    let entriesUnsorted = [];
    data.students.forEach(student => {
        /* The more total points a student has, the more entries they have in
           the raffle. */
        for(let i = 0; i < student.pointTotal; i += 1) {
            let entry = document.createElement('p');
            entry.classList.add('entry');
            /* Give each entry a random background color. There is a
               text-shadow applied so the name is always legible. */
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            entry.style.backgroundColor = ('rgb(' + red
                                           + ', ' + green
                                           + ', ' + blue + ')');
            entry.textContent = student.name;
            entriesUnsorted.push(entry);
        }
    });

    shuffleArray(entriesUnsorted).forEach(entry => nameBox.appendChild(entry));

    spinButton.addEventListener('click', () => {
        /* This check is performed here instead of after `entries` is updated
           because otherwise the final winner's name would be immediately
           overwritten by the 'Everyone has won!' message. */
        if(nameBox.children.length === 0) {
            spinButton.disabled = true;
            winnerElement.textContent = 'Nobody is left! Everyone has won!';
            return;
        }

        let winner = nameBox.firstChild;
        let winnerText = winner.textContent;
        winner.remove();
        winnerElement.textContent = winnerText;
    });
}

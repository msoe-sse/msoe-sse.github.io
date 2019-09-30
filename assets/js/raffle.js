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
        .then(data => generateMachine(data))
        .catch(() => {
            container.textContent
                = ('There was an error while contacting the points service. ' +
                   'Please try again later.')
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

function generateMachine(data) {
    /* The DOM looks like this:

         div#raffle (= container)
           button#spin (= spinButton)
           p#winner (= winnerElement)
    */
    let container = document.querySelector('#raffle');
    let entries = [];

    data.students.forEach(student => {
        /* The more total points a student has, the more entries they have in
           the raffle. */
        for(let i = 0; i < student.pointTotal; i += 1) {
            entries.push(student.name);
        }
    });

    let spinButton = container.appendChild(document.createElement('button'));
    spinButton.type = 'button';
    spinButton.id = 'spin';
    spinButton.textContent = 'Spin';

    let winnerElement = container.appendChild(document.createElement('p'));
    winnerElement.id = 'winner';

    spinButton.addEventListener('click', () => {
        winnerElement.textContent = getRandomArrayItem(entries);
    });
}

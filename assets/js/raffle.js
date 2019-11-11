---
layout: null
sitemap:
  exclude: 'yes'
---
'use strict';

const COLORS = ['red', 'green', 'blue'];

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
            entry.style.backgroundColor = getRandomArrayItem(COLORS);
            entry.textContent = student.name;
            entriesUnsorted.push(entry);
        }
    });

    shuffleArray(entriesUnsorted).forEach(entry => nameBox.appendChild(entry));

    let spinHelper = new SpinnerHelper();

    spinButton.addEventListener('click', () => {
        /* This check is performed here instead of after `entries` is updated
           because otherwise the final winner's name would be immediately
           overwritten by the 'Everyone has won!' message. */
        if(nameBox.childElementCount === 0) {
            spinButton.disabled = true;
            winnerElement.textContent = 'Nobody is left! Everyone has won!';
            return;
        }

        spinHelper.spin();
    });
}

class SpinnerHelper {
    constructor() {
        this.button = document.querySelector('#spin');
        this.entries = document.querySelector('#entries');
        this.entries.style.position = 'absolute';
        this.entriesWrapper = document.querySelector('#entrieswrap');
        this.fakeEntries = [];
        this.winner = document.querySelector('#winner');
        this.entryToPop = undefined;
        this.intervalId = undefined;
        this.y = 0; /* measured in em */
    }

    startSpinning() {
        if(this.entryToPop !== undefined) {
            this.entryToPop.remove();
            this.entryToPop = undefined;
        }

        this.fakeEntries.forEach(entry => entry.remove());
        this.fakeEntries = [];

        /* If the list of entries is not long enough, duplicate it until there
           are enough entries so that the user won't see blank space. */
        let threshold = 0.35 * 4000 / 10 + 23; /* uses values from below */
        /* each entry is 3.5em in height */
        let entriesLength = 3.5 * this.entries.childElementCount;

        if(entriesLength < threshold) {
            console.log('making fake entries');
            let currentLength = entriesLength;

            while(currentLength < threshold) {
                let clone = this.entries.cloneNode(true);
                clone.style.top = currentLength + 'em';
                this.fakeEntries.push(clone);
                this.entriesWrapper.appendChild(clone);
                currentLength += entriesLength;
            }
        }

        this.y = 0;
        this.button.disabled = true;
        this.intervalId = setInterval(() => {
            this.y -= 0.35;
            this.entries.style.top = this.y + 'em';
            this.fakeEntries.forEach(entry => {
                /* 1234em -> 1234 */
                let currentY = parseFloat(entry.style.top.slice(0, -2));
                entry.style.top = currentY - 0.35 + 'em';
            });
        }, 10);
    }

    stopSpinning() {
        if(this.intervalId !== undefined) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        this.button.disabled = false;

        /* Defer removing the winner to after the next time the spin button is
           clicked so the spinner doesn't jump when it stops */
        this.entryToPop = this.getWinner();
        this.winner.textContent = this.entryToPop.textContent;
    }

    spin() {
        this.startSpinning();
        setTimeout(() => this.stopSpinning(), this.chooseSpinTime());
    }

    chooseSpinTime() {
        /* 2000ms - 4000ms */
        return Math.random() * 2000 + 2000;
    }

    getWinner() {
        /* The raffle winner needs to be visible. Figure out what the second
           visible element is, as the first is going to be cut off by the top
           of the raffle machine. */
        /* each entry is 3.5em, and modulo prevents overflow */
        let index = Math.floor((this.y / -3.5 + 1)
                               % this.entries.children.length);
        return this.entries.children[index];
    }
}

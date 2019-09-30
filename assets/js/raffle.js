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

function generateMachine(data) {
    let container = document.querySelector('#raffle');

    data.students.forEach(student => {
        let entry = container.appendChild(document.createElement('p'));
        entry.textContent = `${student.name} has ${student.pointTotal}`;
    });
}

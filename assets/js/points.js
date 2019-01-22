---
layout: null
sitemap:
  exclude: 'yes'
---

document.addEventListener("DOMContentLoaded", function() {
    let apiUrl = '{{ site.APIBaseUrl }}';
    let source = '{{ site.APISource }}';

    fetch(`${apiUrl}/points?source=${source}`)
        .then((resp) => resp.json())
        .then(function(data) {
            document.getElementById('LoadingHeader').style.display = 'none';
            document.getElementById('TableWrapper').style.display = 'block';
            let table = document.getElementById('PointsTable');
            table.append(createThead(data));
            table.append(createTbody(data));
        })
        .catch(function() {
            document.getElementById('LoadingHeader').style.display = 'none';
            document.getElementById('ErrorMessage').style.display = 'flex';
            document.getElementById('ErrorMessage').style.justifyContent = 'center';
        })
});

function createThead(data) {
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');

    createAndAppendElement('th', 'Student Name', headerRow);

    data.meetings.forEach(element => {
        createAndAppendElement('th', element, headerRow)
    });

    createAndAppendElement('th', 'Point Total', headerRow);
    thead.append(headerRow);

    return thead;
}

function createTbody(data) {
    let tbody = document.createElement('tbody');
    data.students.forEach(element => {
        let row = document.createElement('tr');

        createAndAppendElement('td', element.name, row);
        
        element.pointBreakdown.forEach(studentMeetingPoints => {
            createAndAppendElement('td', studentMeetingPoints, row);
        });

        createAndAppendElement('td', element.pointTotal, row);

        tbody.append(row);
    });
    return tbody
}

function createAndAppendElement(elementType, innerHtml, elementToAppendTo) {
    let studentNameHeader = document.createElement(elementType);
    studentNameHeader.innerHTML = innerHtml;
    elementToAppendTo.append(studentNameHeader);
}
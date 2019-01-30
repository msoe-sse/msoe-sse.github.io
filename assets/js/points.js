---
layout: null
sitemap:
  exclude: 'yes'
---

const MOBILE_WIDTH_BREAKPOINT = 770;

document.addEventListener("DOMContentLoaded", function() {
    let apiUrl = '{{ site.APIBaseUrl }}';
    let source = '{{ site.APISource }}';

    fetch(`${apiUrl}/points?source=${source}`)
        .then((resp) => resp.json())
        .then(function(data) {
            if(window.innerWidth > MOBILE_WIDTH_BREAKPOINT) {
                createDesktopTable(data);
            } else {
                createMobileTables(data);
            }
        })
        .catch(function() {
            document.getElementById('LoadingHeader').style.display = 'none';
            document.getElementById('ErrorMessage').style.display = 'flex';
            document.getElementById('ErrorMessage').style.justifyContent = 'center';
        })
});

function createMobileTables(data) {
    hideLoadingHeaderAndShowContainer();

    data.students.forEach(student => {
        let studentTable = document.createElement('table');

        let nameRow = document.createElement('tr');
        createAndAppendElement('td', 'Student Name', nameRow);
        createAndAppendElement('td', student.name, nameRow);
        studentTable.append(nameRow);

        for(let i = 0; i < data.meetings.length -1; i++) {
            let pointRow = document.createElement('tr');
            createAndAppendElement('td', data.meetings[i], pointRow);
            createAndAppendElement('td', student.pointBreakdown[i], pointRow);
            studentTable.append(pointRow);
        }

        let pointTotalRow = document.createElement('tr');
        createAndAppendElement('td', 'Total', pointTotalRow);
        createAndAppendElement('td', student.pointTotal, pointTotalRow);
        studentTable.append(pointTotalRow);

        document.getElementById('Container').append(studentTable);
    });
}

function createDesktopTable(data) {
    hideLoadingHeaderAndShowContainer();

    let table = document.createElement('table');
    table.className += 'points-table';
    table.append(createDesktopThead(data));
    table.append(createDesktopTbody(data));

    document.getElementById('Container').append(table);
}

function createDesktopThead(data) {
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

function createDesktopTbody(data) {
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

function hideLoadingHeaderAndShowContainer() {
    document.getElementById('LoadingHeader').style.display = 'none';
    document.getElementById('Container').style.display = 'block';
}
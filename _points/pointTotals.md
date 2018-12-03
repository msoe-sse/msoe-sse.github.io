---
layout: page
title: SSE Point Totals
permalink: /points
---

<table>
    <tr class="points-row">
        <th>Student Name</th>
        {% for meeting in site.data.points.meetings %}
            <th>{{meeting}}</th>
        {% endfor %}
        <th>Total</th>
    </tr>
    {% for student in site.data.points.students %}
        <tr class="points-row"> 
            <td>{{student.name}}</td>
            {% for meetingTotal in student.pointBreakdown %}
                <td>{{meetingTotal}}</td>
            {% endfor %}
            <td>{{student.pointTotal}}</td>
        </tr>
    {% endfor %}
</table>
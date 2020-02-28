---
layout: page
title: Website Past Meetings
permalink: /events/webmeetings
published: true
---

# Website Past Meetings

Can't make a website meeting?

Totally spaced and couldn't make it?

That's alright; we've got you covered. Check out the past agendas below, and if you have questions, don't hesitate to message the Webmaster!

<ul>
{% for pastMeeting in site.data.pastMeetings %}
    <li><a href="{{pastMeeting.link}}">{{pastMeeting.date}}</a></li>
{% endfor %}
</ul>

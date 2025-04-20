---
layout: page
title: About
permalink: /about/eboard
published: true
---

## Our eBoard

<figure>
    <img src="/assets/img/2025-2026 eboard.jpg" width="100%" height="30%" />
    <figcaption><em>Left to right: David, Matthew, Kiersten, Madison and Sydney. Not pictured: Cass</em></figcaption>
</figure>

The SSE Eboard is committed to bringing you the best SSE experience possible. From planning networking events to hosting workshops to running programming competitions, SSE strives to bring you into closer reach of your professional and technical goals. This year, your eBoard members are:

{% for eboardMember in site.data.eboardMembers %}
### {{eboardMember.position}} - {{eboardMember.name}}
{{eboardMember.bio}}
{% include contact.html person=eboardMember.contact %}
{% endfor %}

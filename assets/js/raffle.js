---
layout: null
sitemap:
  exclude: 'yes'
---
'use strict';

document.addEventListener("DOMContentLoaded", () => {
    let apiUrl = '{{ site.APIBaseUrl }}';

    document.querySelector('#raffle').textContent = 'Test! ' + apiUrl;
});

'use strict'

const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
    links.addEventListener ('click', function (e) {
        e.preventDefault();
        const id = document.getAttribute('href');
        const block = document.querySelector(id);

        id.scrollIntoView ();
    });
};
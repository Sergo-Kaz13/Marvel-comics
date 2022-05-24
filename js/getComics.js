'use strict';

export function getComics(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.attributionHTML);
    })
}
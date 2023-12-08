'use strict';

const getData = () => {
   return fetch('db.json').then(response => response.json());
};

const sendData = (url, data) => {
   return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
}

getData().then(data => {
   sendData('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
}).catch(err => console.log(err))


const div = document.querySelector('#data-container')

fetch('http://localhost:3000/json')
  .then(res => res.json())
  .then(data => {
    div.innerText = data.firstName + ' ' + data.lastName
  })

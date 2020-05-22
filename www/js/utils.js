function randomBG () {
  setTimeout(randomBG, 3000)
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  document.body.style.background = `rgb(${r}, ${g}, ${b})`
}

function newChatBox (username, message) {
  const main = document.querySelector('main')
  main.innerHTML += `
    <div class="row">
      <div class="user-info">
        <img src="../images/cute.jpg">
        <b>${username}:</b>
      </div>
      <span>${message}</span>
    </div>
  `
}

function getCat () {
  const cat = document.querySelector('#cat')
  const url = '/api/random-cat'
  const req = { method: 'GET' }
  fetch(url, req)
    .then(res => res.json())
    .then(data => {
      cat.setAttribute('src', data.message)
    })
}

function getGeo () {
  const url = 'https://location.services.mozilla.com/v1/geolocate?key=test'
  const req = { method: 'GET' }
  fetch(url, req)
    .then(res => res.json())
    .then(data => getNWSpoint(data))
}

function getNWSpoint (data) {
  const lat = data.location.lat
  const lon = data.location.lng
  const url = `https://api.weather.gov/points/${lat},${lon}`
  const req = { method: 'GET' }
  fetch(url, req)
    .then(res => res.json())
    .then(data => getNWSforecast(data))
}

function getNWSforecast (data) {
  const office = data.properties.cwa
  const x = data.properties.gridX
  const y = data.properties.gridY
  const url = `https://api.weather.gov/gridpoints/${office}/${x},${y}/forecast`
  const req = { method: 'GET' }
  fetch(url, req)
    .then(res => res.json())
    .then(data => {
      const f = data.properties.periods[0].detailedForecast
      const t = document.querySelector('#title')
      t.textContent = `Outside it's ${f}, but in here it's 100 furrhrenheit. click the cat image to enter.`
    })
}

const requestURL = './assets/json/data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

  request.onload = function () {
    const locations = request.response;

    renderPlaces(locations)
  
  }
// const endpoint = 'https://enigmatic-bastion-51979.herokuapp.com/geolocation/api/sucursales';


// function getElements(idEstado) {
//     var url = new URL(endpoint), params = { estado: idEstado };
//     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
//     fetch(url, {
//         method: 'GET',
//         mode: "cors"
//     })
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error))
//         .then(response => console.log('Success:', response));
// }
window.onload = () => {
    // function getParameterByName(name) {
    //     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    //     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    //         results = regex.exec(location.search);
    //     return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    // }
    // var idEstado = getParameterByName('idEstado');

    // const button = document.querySelector('button[data-action="change"]');
    // button.innerText = '﹖';
    // getMyLocation();
};

// function getMyLocation() {
//     let myLocation;
//     navigator.geolocation.getCurrentPosition(function (posicion) {
//         myLocation = [{
//             name: "Mi ubicación",
//             location: {
//                 lat: posicion.coords.latitude,
//                 long: posicion.coords.longitude
//             }
//         }];
//         renderPlaces(myLocation);
//     }, (error) => {
//         alert('Error: ' + error.code + ' ' + error.message + '\n\nPor favor compruebe que está conectado a internet y habilite la opción Permitir compartir ubicación física');
//     });
// }
var models = [
    {
        url: './icon/map-marker.png',
        scale: '3 3 3',
        info: 'ATM',
        rotation: '0 90 0',
        position: '0 0 0'
    }
    // ,
    // {
    //     url: './assets/magnemite/scene.gltf',
    //     scale: '0.1 0.1 0.1',
    //     info: 'Magnemite, Lv. 5, HP 10/10',
    //     rotation: '0 180 0',
    // },
    // {
    //     url: './assets/articuno/scene.gltf',
    //     scale: '0.1 0.1 0.1',
    //     rotation: '0 180 0',
    //     info: 'Articuno, Lv. 80, HP 100/100',
    // },
    // {
    //     url: './assets/dragonite/scene.gltf',
    //     scale: '0.01 0.01 0.01',
    //     rotation: '0 180 0',
    //     info: 'Dragonite, Lv. 99, HP 150/150',
    // }
];

var modelIndex = 0;
function setModel(model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('src', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');
    places.forEach((place) => {
        let name = place.name;
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-image');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model.setAttribute('animation-mixer', '');
        setModel(models[modelIndex], model);

        let model2 = document.createElement('a-text');
        model2.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        model2.setAttribute('look-at', '[gps-camera]');
        model2.setAttribute('animation-mixer', '');
        model2.setAttribute('value', name);
        setModel(models[modelIndex], model2);

        scene.appendChild(model);
        scene.appendChild(model2);
    },
        (err) => console.error('Error in retrieving position', err),
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000,
        }
    );
}
let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.751640, 37.604308],
        zoom: 14,
        controls: []
    });

    const coords = [
        [55.746998, 37.581523],
        [55.759583, 37.583041],
        [55.751112, 37.605957],
        [55.759122, 37.624777]
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: "./svg/marker-map.svg",
        iconImageSize: [46, 57],
        iconImageOffset: [-35, -52]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });

    myMap.geoObjects.add(myCollection);

    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);

function initMap() {
  let cities = usCities;
  let map = createMap(cities.SF);
  let marker = addMarker();

  let markers = [];
}

function createMap({ city, zoom}) {
  return(
    new google.maps.Map(document.getElementById('map'),
    {
      center: city,
      zoom: zoom
    })
  )
}

function mapTheMarkers(map, neighborhoods, markers) {
  return markers.push(
    newMarker(neighborhoods, map)
  )
}

const usNeighborhoods = [
  {lat: 30.274438, lng:  -81.388347},
  {lat: 28.546863, lng: -81.373917}
];

const usCities = {
  Jacksonville: {city: {lat: 30.274438, lng: -81.388347}, zoom: 5},
  SF: {cityName: 'SanFrancisco', city: {lat: 37.761201, lng: -122.434701}, zoom: 8}
}
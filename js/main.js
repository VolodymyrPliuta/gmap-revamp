function initMap() {
  let Jacksonville = {lat: 30.274438, lng: -81.388347};
  let mapZoom = 5;
  let map = createMap(mapZoom, Jacksonville);
}

function createMap(zoom, city) {
  return(
    new google.maps.Map(document.getElementById('map'), {
      zoom: zoom,
      center: city
    })
  )
}

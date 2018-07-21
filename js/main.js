function initMap() {
  let map = createMap()
}

function createMap() {
  return(
    new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: {lat: 30.274438, lng: -81.388347},
    })
  )
}

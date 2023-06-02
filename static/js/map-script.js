let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(22.8014338, 89.5545366),
    zoom: 20,
  });

  const iconBase =
    "http://zainiktheme.com/";
  const icons = {
    info: {
      icon: iconBase + "map-logo.png",
    },
  };
  const features = [
    {
      position: new google.maps.LatLng(22.8014338, 89.5545366),
      type: "info",
    }
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
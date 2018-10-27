// map
var map;

function initMap() {
  var myLatLng = {
    lat: 43.45754118493179,
    lng: -79.68210518360138
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
    styles: [{
        elementType: "geometry",
        stylers: [{
          color: "#f5f5f5"
        }]
      },
      {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      },
      {
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      },
      {
        elementType: "labels.text.stroke",
        stylers: [{
          color: "#f5f5f5"
        }]
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#bdbdbd"
        }]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{
          color: "#eeeeee"
        }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#757575"
        }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{
          color: "#e5e5e5"
        }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{
          color: "#ffffff"
        }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#757575"
        }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{
          color: "#dadada"
        }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#616161"
        }]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{
          color: "#e5e5e5"
        }]
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{
          color: "#eeeeee"
        }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{
          color: "#c9c9c9"
        }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
          color: "#9e9e9e"
        }]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: "assets/images/marker.png",
    title: "Hello World!"
  });
  marker.setMap(map);
}
// jquery
$(document).ready(function () {
  // page animation
  // about section
  var firstSection = $(".about-section.one img");
  var secondSection = $(".about-section.two img");
  //menu section
  var menu = $(".menu .container");
  var menuoffset = menu.offset().top;
  var firstSectionY = firstSection.offset().top - 400;
  var galleryoffset = $(".gallery").offset().top;
  var gallery = Array.from(document.querySelectorAll(".gallery img"));
  //event
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= firstSectionY) {
      $(firstSection).fadeTo("slow", 1);
    }
    if ($(window).scrollTop() >= firstSectionY + 300) {
      $(secondSection).fadeTo("slow", 1);
    }
    if ($(window).scrollTop() >= menuoffset - 400) {
      $(menu).fadeTo("slow", 1);
    }
    if ($(window).scrollTop() >= galleryoffset - 400) {
      gallery.forEach(function (i, index) {
        setTimeout(function () {
          $(i).fadeTo("slow", 1);
        }, 50 * index);
      });
    }
  });

  // gallery pop up
  var modal = document.getElementById("pop");
  var modalImg = document.getElementById("img");
  document.querySelectorAll(".gallery img").forEach(function (i) {
    i.addEventListener("click", function (e) {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };




});

function myMenu(obj) {
  var container = document.getElementById("items-container");
  container.innerHTML = "";

  obj.forEach(function (i) {
    var menuItem = document.createElement("div");
    var p = document.createElement("p");
    var img = document.createElement("img");
    var span = document.createElement("span");
    p.innerHTML = "<b>" + i.name + "</b><br>" + i.descreption;
    span.innerHTML = i.price;
    img.setAttribute("src", i.img);
    menuItem.append(img);
    menuItem.append(p);
    menuItem.append(span);
    menuItem.classList.add("menu-item");
    container.append(menuItem);
  });
}
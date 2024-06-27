// Lista de imágenes para el carrusel
const carouselImages = [
  "./IMG/pexels-soulseeker-1589818.jpg",
  "./IMG/pexels-trung-nguyen-1603884.jpg",
  "./IMG/pexels-trung-nguyen-1630860.jpg",
  "./IMG/pexels-trung-nguyen-2959192.jpg",
  "./IMG/_MG_0601.jpg",
];

// Índice actual de la imagen en el carrusel
let currentIndex = 0;

// Función para cambiar la imagen del carrusel
function changeCarouselImage() {
  // Obtener todos los elementos del carrusel
  const carouselItems = document.querySelectorAll(".carousel .list .item");

  // Ocultar todas las imágenes del carrusel
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Mostrar la imagen actual y actualizar el índice
  carouselItems[currentIndex].style.display = "block";
  currentIndex = (currentIndex + 1) % carouselImages.length;
}

// Cambiar la imagen del carrusel cada 8 segundos
setInterval(changeCarouselImage, 8000);

// Llama a la función una vez para iniciar el carrusel
changeCarouselImage();

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  abrir.classList.remove("displayMenu");
  cerrar.classList.add("displayMenu");
  body.classList.add("stop-scrolling");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  abrir.classList.add("displayMenu");
  cerrar.classList.remove("displayMenu");
  body.classList.remove("stop-scrolling");
});

function scrollToLocation(location) {
  document.querySelector(location).scrollIntoView({
    behavior: "smooth",
  });
  nav.classList.remove("visible");
  body.classList.remove("stop-scrolling");
  abrir.classList.add("displayMenu");
  cerrar.classList.remove("displayMenu");
}

// Bodas Carousel
$(document).ready(function () {
  $(".bodas-carousel").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-custom-arrow slick-prev"> < </button>',
    nextArrow:
      '<button type="button" class="slick-custom-arrow slick-next"> > </button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

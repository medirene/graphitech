const images = [
  'images/section/image1.png',
  'images/section/image2.png',
  'images/section/image3.png'
];

let index = 0;

function changeBackground() {
  const hero = document.querySelector('.hero');
  hero.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 5000);

// Définir l'image initiale
changeBackground();






/******************************************** grid video ***************************************************/
// pour l'ouverture de la video
function openLightbox(videoSrc) {
  const lightbox = document.getElementById('lightbox');
  const video = document.getElementById('lightbox-video');
  video.src = videoSrc;
  lightbox.classList.add('active');
  video.play();
}


// pour la fermeture de la video
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const video = document.getElementById("lightbox-video");
  const closeBtn = document.querySelector(".close-btn");

  function closeLightbox() {
      video.pause();
      video.currentTime = 0; // Réinitialise la vidéo
      lightbox.classList.remove("active");
  }

 // Fermer la lightbox en cliquant sur le bouton "×"
  closeBtn.addEventListener("click", closeLightbox);

  // Fermer la lightbox si on clique en dehors de la vidéo
  lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
          closeLightbox();
      }
  });
});

/*************************************************************footer ****************************************************/

document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const wave = document.querySelector(".wave-effect");

  footer.addEventListener("mousemove", function (event) {
      const footerRect = footer.getBoundingClientRect();
      const x = event.clientX - footerRect.left;
      const y = event.clientY - footerRect.top;

      wave.style.left = `${x - 40}px`; // Centre la vague sur la souris
      wave.style.top = `${y - 40}px`;
      wave.style.opacity = "1";
      wave.style.transform = "scale(1.5)";
  });

  footer.addEventListener("mouseleave", function () {
      wave.style.opacity = "0";
      wave.style.transform = "scale(1)";
  });
});



















































/******************************************* Pour les animations*********************************************/
gsap.registerPlugin(ScrollTrigger);


// 🏆 "À propos de moi" (Texte gauche, Photo droite)
gsap.from(".description", {
  opacity: 0,
  x: -600,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".a_propos_de_moi",
    start: "top 95%",
    end: "top 30%",
    scrub: true,
  }
});

gsap.from(".photo", {
  opacity: 0,
  x: 600,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".a_propos_de_moi",
    start: "top 95%",
    end: "top 30%",
    scrub: true,
  }
});

// 🔥 "Marques" (Zoom subtil)
gsap.to(".carousel img", {
  scale: 1.1,
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: ".marques",
    start: "top 85%",
    end: "top 50%",
    scrub: 1.2,
    toggleActions: "play none none reverse",
  }
});

// "Services" (Apparition en cascade du bas)
gsap.from(".service", {
  opacity: 0,
  y: 300,
  duration: 2,
  stagger: 0.3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".services",
    start: "top 30%",
    end: "top 50%",
    scrub: 1.2,
  }
});

// 🎨 "Réalisations" (Zoom-in + fade-in sur les images)
gsap.from(".grid-item img", {
  //scale: 0.8,
  opacity: 0,
  duration: 3,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".realisation",
    start: "top 40%",
    end: "top 50%",
    scrub: 1,
  }
});

gsap.from(".video-item:nth-child(even)", {
  opacity: 0,
  x: 100,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".grid_video",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  }
});















/****************************************** Responsive ******************************************************/


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.createElement("div");
  menuToggle.classList.add("menu-toggle");
  menuToggle.innerHTML = "☰";
  document.querySelector(".header").appendChild(menuToggle);

  const nav = document.querySelector(".nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});







/************************************ pour empecher les copies***************************************** */

document.addEventListener("DOMContentLoaded", function() {
  document.body.addEventListener("contextmenu", event => event.preventDefault()); // Désactive le clic droit
  document.body.addEventListener("selectstart", event => event.preventDefault()); // Bloque la sélection
  document.body.addEventListener("copy", event => {
      event.preventDefault();
      alert("La copie de ce contenu est désactivée !");
  });
});


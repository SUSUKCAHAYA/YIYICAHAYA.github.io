// Search Box
let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};

// Menu (responsive)
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};

// Sticky Navbar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

/*========== scroll reveal ==========*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".navbar, .header-icon i, .logo img, .heading", {
  origin: "top",
});

ScrollReveal().reveal(
  ".home-img img, .home-text a, .products-container, .customers-container, .footer, .btn-home",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(
  ".home-text h1, .home-text p, .about-img img, .about-text, .customers-container, .customers-heading",
  {
    origin: "left",
  }
);

ScrollReveal().reveal(
  ".aboutt-img img, .aboutt-text, .customers-container1, .customers-heading1",
  {
    origin: "right",
  }
);

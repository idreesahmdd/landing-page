const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

menuIcon.onclick = () => {
  navList.classList.toggle("active");
  menuIcon.classList.toggle("active");
};

const backToTop = document.querySelector(".back-to-top");

backToTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Agar scroll menjadi halus
  });
};

window.addEventListener("scroll", () => {
  window.scrollY > 200 ? backToTop.classList.add("show") : backToTop.classList.remove("show");
});

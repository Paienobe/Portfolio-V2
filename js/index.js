const skillsHolder = document.querySelector(".skills_holder");
const projectsHolder = document.querySelector(".projects_holder");
const menuContainer = document.querySelector(".menu_items_container");
const menuOptionsContainer = document.querySelector(".options_list");
const menuCloser = document.querySelector(".closer");
const burgerMenu = document.querySelector(".menu_btn");
const nav = document.getElementById("top");
const header = document.querySelector(".header");
const logo = document.querySelector(".logo");
const contactBtn = document.querySelector(".contact_button");

document.documentElement.style.scrollPaddingTop = `${nav.clientHeight}px`;

const skillHolderItems = [
  { name: "HTML", image: "../assets/icons8-html.svg" },
  { name: "CSS", image: "../assets/icons8-css.svg" },
  { name: "JAVASCRIPT", image: "../assets/icons8-js.svg" },
  { name: "TYPESCRIPT", image: "../assets/icons8-typescript.svg" },
  { name: "REACT", image: "../assets/icons8-react.svg" },
  { name: "NEXT", image: "../assets/next-js.svg" },
  { name: "GO", image: "../assets/golang-1.svg" },
  { name: "POSTGRESQL", image: "../assets/icons8-postgresql.svg" },
  { name: "TAILWIND", image: "../assets/icons8-tailwind-css.svg" },
  { name: "SASS", image: "../assets/icons8-sass.svg" },
  { name: "VSCODE", image: "../assets/icons8-visual-studio-code-2019.svg" },
  { name: "GIT", image: "../assets/icons8-git.svg" },
  { name: "JIRA", image: "../assets/icons8-jira.svg" },
];

const projects = [
  { name: "Kanban Task Manager", live_url: "https://kanban-manager.vercel.app/", github: "https://github.com/Paienobe/Kanban-manager", thumbnail: "https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto:good,w_900/Challenges/hlb8i2xkwhhdevpbx1jb.jpg", description: "An efficient and visual task management app that utilizes the Kanban method to help teams organize, track, and prioritize their workflow seamlessly." },
  { name: "Product Feedback App", live_url: "http://product-feedback-app-seven.vercel.app/", github: "https://github.com/Paienobe/Product-feedback-app", thumbnail: "../assets/feedback_app.f012e3d5d23d35d316f8.png", description: "A user-friendly platform that allows customers to easily provide feedback on products, helping businesses enhance their offerings and improve customer satisfaction." },
  { name: "Audiophile eCommerce", live_url: "https://audiophile-omega.vercel.app/", github: "https://github.com/Paienobe/Audiophile", thumbnail: "../assets/audiophile-home.404c1cc04180aab99635.png", description: "An intuitive eCommerce website that enables users to effortlessly browse, purchase their favorite audio devices." },
  { name: "Invoice App", live_url: "https://invoice-app-gamma.vercel.app/", github: "https://github.com/Paienobe/invoice-app", thumbnail: "../assets/invoice-app.274f58a241b2f1c353b1.png", description: "A streamlined invoicing app designed to simplify and automate the billing process for businesses of all sizes." },
];

const menuItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills_section" },
  { name: "Projects", link: "#projects_section" },
  { name: "Contact", link: "#contact" },
];

skillHolderItems.forEach((item) => {
  skillsHolder.innerHTML += `<div class="skill_item"><img src=${item.image} alt=""/> <p>${item.name}</p></div>`;
});

projects.forEach((item) => {
  projectsHolder.innerHTML += `<div class="project_item">
  <img src=${item.thumbnail} alt="project_image" >
  <div class="project_details">
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  <div class="link_holder">
  <a href=${item.live_url} target="_blank" class="project_links">Live Site</a>
  <a href=${item.github} target="_blank" class="project_links">Github</a>
  </div>
  </div>
  </div>`;
});

menuItems.forEach((item) => {
  menuOptionsContainer.innerHTML += `<a class="menu_item">${item.name}</a>`;
});

window.addEventListener("DOMContentLoaded", () => {
  const menuOptions = document.querySelectorAll(".menu_item");
  menuOptions.forEach((item, index) => {
    item.addEventListener("click", () => {
      menuContainer.classList.remove("show_menu");
      menuContainer.classList.add("hide_menu");
      window.open(`${menuItems[index].link}`, "_self");
    });
  });
});

contactBtn.addEventListener("click", () => {
  window.open("#contact", "_self");
});

window.addEventListener("scroll", () => {
  const navHeight = nav.clientHeight;
  const scrollHeight = window.scrollY;

  if (scrollHeight > navHeight) {
    header.classList.add("sticky_nav");
  } else {
    header.classList.remove("sticky_nav");
  }
});

burgerMenu.addEventListener("click", () => {
  menuContainer.classList.add("show_menu");
  menuContainer.classList.remove("hide_menu");
});

menuCloser.addEventListener("click", () => {
  menuContainer.classList.add("hide_menu");
  menuContainer.classList.remove("show_menu");
});

logo.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

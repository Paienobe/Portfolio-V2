const skillsHolder = document.querySelector(".skills_holder");
const skillHolderItems = [
  { name: "HTML", image: "../assets/icons8-html.svg" },
  { name: "CSS", image: "../assets/icons8-css.svg" },
  { name: "JAVASCRIPT", image: "../assets/icons8-js.svg" },
  { name: "TYPESCRIPT", image: "../assets/icons8-typescript.svg" },
  { name: "REACT", image: "../assets/icons8-react.svg" },
  { name: "NEXT", image: "../assets/next-js.svg" },
  { name: "TAILWIND", image: "../assets/icons8-tailwind-css.svg" },
  { name: "VSCODE", image: "../assets/icons8-visual-studio-code-2019.svg" },
  { name: "GIT", image: "../assets/icons8-git.svg" },
  { name: "JIRA", image: "../assets/icons8-jira.svg" },
];

skillsHolder.innerHTML = "";
skillHolderItems.forEach((item) => {
  skillsHolder.innerHTML += `<div class="skill_item"><img src=${item.image} alt=""/> <p>${item.name}</p></div>`;
});

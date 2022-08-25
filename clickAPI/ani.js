const spintext = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(10)" },
];
const anitime = { duration: 2000, iterations: 1 };

const text = document.querySelector(".text");
text.addEventListener("click", () => {
  text.animate(spintext, anitime);
});

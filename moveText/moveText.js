// when clicked, move text
const moveText = [
  { transform: "translate(100%, 0)", easing: "ease-in", opacity: 0 },
  { transform: "translate(0, 0)", easing: "ease-out", opacity: 1 },
];
const anitime = { duration: 1000, iterations: 10 };

const text = document.querySelector(".moveText");
text.addEventListener("click", () => {
  text.animate(moveText, anitime);
});

// when clicked, stop animation
// window reload 활용!
let stop = document.createElement("button");
stop.classList.add("btn");
stop.innerHTML = "stop animation";
document.body.appendChild(stop);
stop.addEventListener("click", reload);

function reload() {
  (location || window.location || document.location).reload();
}

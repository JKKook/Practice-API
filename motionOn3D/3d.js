// 타겟의 좌표 값 받아 오기
const moveZone = document.querySelector(".moving-zone");
const popup = document.querySelector(".popup");
const text = document.querySelector(".popup-text");

moveZone.addEventListener("mousemove", (e) => {
  const rect = moveZone.getBoundingClientRect();
  const x = (window.innerWidth / 2 - e.clientX) / 20;
  const y = (window.innerHeight / 2 - e.clientY) / 20;
  // rotate value 지정
  popup.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
  text.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});

// animation in
moveZone.addEventListener("mouseenter", (e) => {
  popup.style.transition = "none";
  text.style.transition = "none";

  popup.style.transform = "translateZ(200px) rotateZ(-60deg)";
  text.style.transform = "translateZ(200px) rotateZ(-60deg)";
});

// animation out
moveZone.addEventListener("mouseleave", (e) => {
  popup.style.trasnsition = "all .3s ease";
  popup.style.transform = `rotateY(0deg) roateX(0deg)`;
  text.style.transform = "rotateX(0deg) roateY(0deg)";
});

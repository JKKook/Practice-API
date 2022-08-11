// when clicked, scrollIntoview Rabbit
const rabbitToBtn = document.querySelector(".rabbitToBtn");
rabbitToBtn.addEventListener("click", () => {
  rabbit.scrollIntoView({
    behavior: "smooth",
  });
});
const rabbit = document.querySelector(".rabbit");
rabbit.addEventListener("click", (e) => {
  const rect = rabbit.getBoundingClientRect();
  console.log(rect);
  console.log(`Client X/Y: ${e.clientX}, ${e.clientY}`);
  console.log(`Page X/Y: ${e.pageX}, ${e.pageY}`);
});

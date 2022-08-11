const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

// load가 끝났을 때 해당 이벤트를 발생 시킬 거야!
addEventListener("load", () => {
  // transform을 사용했으니, 해당 좌표값을 받아와야 해!
  const targetRect = target.getBoundingClientRect();
  const targetHalfwidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  addEventListener("mousemove", (e) => {
    //  좌표값 알아오기!
    const x = e.clientX;
    const y = e.clientY;
    console.log(`${x} ${y}`);

    vertical.style.transform = `translateX(${x}px)`;
    // vertical.style.left = `${x}px`;
    horizontal.style.transform = `translateY(${y}px)`;
    // horizontal.style.top = `${y}px`;

    //   이미지 좌표에 적용
    target.style.transform = `translate(${x - targetHalfwidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});

// 성능 개선을 해보자
// top, left는 layout을 각각 발생시키기 때문에 성능적인 면에서 좋지 못하다.
// 따라서 transform - translate을 이용하는 것이 좋다.
// https://csstriggers.com/

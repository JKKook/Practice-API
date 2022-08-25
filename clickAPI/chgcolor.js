/** # .
 * Event : addEventListener(click, mouseover)  mouseup , mousedown
 */
const clickBtn = document.querySelector(".typeBtnOne");
clickBtn.addEventListener("click", () => {
  alert("첫 번째, 버튼이 눌렸습니다.");
});

const mouseUpBtn = document.querySelector(".typeBtnTwo");
mouseUpBtn.addEventListener("mouseover", () => {
  alert("동작이 감지 되었습니다.");
});

/*
 * param : string
 * Api : getElementById (찾고자 하는 요소의 id를 객체로 반환, * 주어진 id가 없는 경우 변수를 만들어서 지정 가능!)
 * return : newColor / element가 null값일 때 아무것도 반환하지 않음.
 */
function changeColor(newColor) {
  let element = document.getElementById("paragraph");
  if (element === "null") {
    return;
  }
  element.style.color = newColor;
}

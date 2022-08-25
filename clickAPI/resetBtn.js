// 갱신 되는 부분 해결 못 함
function logReset(e) {
  if (e === null) {
    return;
  } else log.innerText = `Time stamp : ${date.toLocaleString()}`;
  date.focus();
}
const date = new Date();
date.toDateString();
const form = document.getElementById("form");
const p = document.getElementById("log");
form.addEventListener("reset", (e) => {
  logReset();
});

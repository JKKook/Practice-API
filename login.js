const $logins = document.querySelector(".logins");
const $form = document.querySelector(".form");
const $formInputID = document.querySelector("#UserID");
const $formInputPWD = document.querySelector("#UserPwd");
const loginURL = "http://localhost:3000/Login";

const rederAllLogins = (logins) => {
  // $logins 초기화 (애초에 포함 값은 없지만)
  $logins.innerHTML = "";
  logins.forEach((item) => {
    const logEl = createLoginItem(item);
    $logins.appendChild(logEl);
  });
};

// 브라우저 아래에 Data 만들어주기

const createLoginItem = (item) => {
  const { number, id, pwd } = item;
  const loginItem = document.createElement("div");
  loginItem.classList.add("item");
  loginItem.dataset.number = id;
  loginItem.innerHTML = `
  <style>
  input[value] {
    font-size : 12px;
    background-color : lightpink;
    border : none;
  }
  </style>
  <div class="content"> 
  <input value="${id}" class="id"> 
  <input value="${pwd}"class="pwd">
  </div>`;
  return loginItem;
};

// Login 함수
const getLogins = () => {
  fetch(loginURL)
    .then((response) => response.json())
    .then((Login) => rederAllLogins(Login))
    .catch((error) => console.error(error));
};

const addBtn = (e) => {
  e.preventDefault();

  // loginData 만들어 주기!
  const loginData = {
    id: $formInputID.value,
    pwd: $formInputPWD.value,
  };

  fetch(loginURL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(loginData),
  });
};

// DOM tree 다 읽고 Logins 함수 실행
const init = () => {
  window.addEventListener("DOMContentLoaded", () => {
    getLogins();
  });
};
init();
$form.addEventListener("submit", addBtn);

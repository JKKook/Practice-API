// JSON
// Javascript Object Notaion

// 1. object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  birthDate: new Date(),

  jump: function () {
    console.log(`${this.name} can jump!`);
  }, // 함수는 JSON에서 제외 됨!
};
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 프로퍼티만 정의
json = JSON.stringify(rabbit, ["name"]);
// 또는 콜백 함수로
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value : ${value}`);
  //   제일 최상위 것이 리턴에 전달
  return key === "name" ? "kookie" : value;
});
console.log(json);

////
// 2. JSON to object
// parse(json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump() : error 함수가 json에서 포함 되어있지 않기 때문에

// console.log(rabbit.birthDate.getdate());
// console.log(obj.birthDate.getdate());

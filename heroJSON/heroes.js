// 비동기 프로그램
async function populate() {
  const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

  // new Request 생성자를 통해 URL 받아오기
  const request = new Request(requestURL);
  // fetch API 요청 받길 기다려
  const response = await fetch(request);
  // json으로 보낼 텍스트 지정
  const superHeroesText = await response.text();
  // json으로 파싱
  const superHeroes = JSON.parse(superHeroesText);
  // 헤더와 히어로즈 함수에 파싱할 파라미터 입력
  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}

// memory 방식이 아닌
// 실제 브라우저에서 노출되도록 만드는 콘셉트

function populateHeader(obj) {
  const header = document.querySelector("header");
  // h1 태그를 만들고 obj에 squadName이라는 요소를 header에 대입
  // 단, innerHTML 형태를 선호한다
  const myH1 = document.createElement("h1");
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);
  // p 태그를 만들고 Hometown: 의 value값을 받아오는 태그를 헤더에 대입 시킨다
  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;
  // forloop
  // for(const hero =0; hero < heroes.length; hero++)
  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

populate();

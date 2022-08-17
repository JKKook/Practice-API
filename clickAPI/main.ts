{
  function count(type: string): string {
    // 결과를 표시할 element
    const resultElement = document.getElementById("result");

    // 현재 화면에 표시된 값
    let number = resultElement.innerText;

    // 더하기/빼기
    if (type === "image") {
      number = parseInt(number) + 1;
    }
    if (number === 10) {
      alert("You are Winner!");
      return;
    }
    // 결과 출력
    return (resultElement.innerText = number);
  }
}

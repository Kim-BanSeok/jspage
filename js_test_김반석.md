# 자바스크립트 역량 테스트

테스트 날짜 : 2024.04.09
작성자 이름 : 김반석
파일을 저장해서 이메일 보낼 주소 : wfedev@gamil.com

----------------------------------------------------------------------

# 자바스크립트 기본
  객체에 있는 요소 꺼내기, 배열에 있는 요소 꺼내기

  ## 1. for in

    문제 : for...in 루프를 사용하여 객체 breads의 모든 속성과 값을 콘솔에 출력하세요.

    ```js
    const breads = {
      creamBread: "크림빵",
      chocoBread: "초코빵",
      saltBread: "소금빵",
      count: 15,
    };
    ```

    정답 : 아래 '입력' 부분에 정답을 작성해주세요.

    ```js
    for (const name in breads) {
      console.log(name + ": " + breads[name]);
    }
    ```

----------------------------------------------------------------------

  ## 2. for of

  문제 : for...of 루프를 사용하여 배열 coffee의 모든 요소를 콘솔에 출력하세요.

  ```js
  const coffee = ["아메리카노", "카페라떼", "에스프레소"];
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  for (const name of coffee) {
    console.log(name);
  }
  ```

----------------------------------------------------------------------

  ## 3. if 문
  
  문제 : number가 10보다 크면 "크다", 10보다 작으면 "작다", 10과 같으면 "같다"를 콘솔에 출력하는 if 문을 작성하세요.

  ```js
  const number = 10;
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  if (number > 10) {
    console.log("크다");
  } else if (number < 10) {
    console.log("작다");
  } else {
    console.log("같다");
  }
  ```

----------------------------------------------------------------------

  ## 4. switch case 문

  문제 : color 변수의 값에 따라 다른 메시지를 콘솔에 출력하는 switch 문을 작성하세요.  
  "빨간색"인 경우 "정지", "녹색"인 경우 "진행", 그 외의 색상인 경우 "주의"를 출력하세요.

  ```js
  const color = "녹색";
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  switch (color) {
    case "빨간색":
      console.log("정지");
      break;
    case "녹색":
      console.log("진행");
      break;
    default:
      console.log("주의");
      break;
  }
  ```

----------------------------------------------------------------------

# 자바스크립트 이벤트
  ## 5. 클릭 이벤트

  문제 : 버튼을 클릭하면 input 필드에 있는 텍스트를 콘솔에 출력하는 이벤트 리스너를 작성하세요.

  ```html
  <input type="text" id="textInput" placeholder="텍스트를 입력하세요">
  <button id="submitButton">전송</button>
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  document.getElementById("submitButton").addEventListener("click", function() {
    const text = document.getElementById("textInput").value;
    console.log(text);
  });
  ```

----------------------------------------------------------------------

  ## 6. 마우스 오버 이벤트

  문제 : 'colorBox' 박스에 마우스를 올리면 백그라운드 컬러가 green으로 변경되도록 이벤트 리스너를 작성하세요.

  ```html
  <div id="colorBox" style="width: 100px; height: 100px; background-color: blue;"></div>
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  document.getElementById("colorBox").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightgreen";
  });
  ```

----------------------------------------------------------------------

# 자바스크립트 네트워크
  데이터 가져와서 출력하기
  ## 7. fetch API

  문제 : fetch API를 사용하여 "https://jsonplaceholder.typicode.com/posts"에서 데이터를 가져오고, 가져온 데이터 중 첫 번째 post의 title과 body를 콘솔에 출력하세요.

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
     console.log('title:', data.title, 'body:',data.body);
    })
    .catch(error => console.error("error:", error));
  ```

----------------------------------------------------------------------

# HTML과 자바스크립트로 웹 컴포넌트 만들기
  HTML 템플릿과 JavaScript를 이용하여 DOM을 조작하기

  ## 8. 커스텀 엘리먼트를 이용해서 만들기

  문제: 커스텀 엘리먼트 'component-bread'를 만드세요. 이 커스텀 엘리먼트는 사용자의 이름을 표시하며, 'name' 속성을 통해 이름을 설정할 수 있어야 합니다.

  <component-bread name="치즈빵"></component-bread>

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  class Componentbread extends HTMLElement {
    constructor() {
      const name = this.getAttribute('name');
      this.innerHTML = `<p>이름: ${name}</p>`;
    }
  }

  customElements.define('component-bread', Componentbread);
  ```

----------------------------------------------------------------------

  ## 9. 섀도우 돔을 이용해서 만들기

  문제: 섀도우 돔을 생성하고, 'shadowDomId' 요소의 섀도우 돔 안에 파란색 텍스트로 "섀도우 돔 내부입니다!"라는 문장을 포함하는 <p> 태그를 추가하세요.

  ```html
  <p id="shadowDomId"></p>
  ```

  정답 : 아래 '입력' 부분에 정답을 작성해주세요.

  ```js
  let shadow = document.getElementById("shadowDomId");
  const shadowRoot = shadow.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = `<p style="color: blue;">섀도우 돔 내부입니다!</p>`;
  ```
  
----------------------------------------------------------------------

  ## 10. 템플릿 태그로 만들기

    문제: 아래 html 코드를 보고 id 'tp' 템플릿의 내용을 id 'pasteTp' 요소에 복제해서 붙여 넣으세요.

    ```html
    <p id="pasteTp" style="color: orange"></p>
    <template id="tp">HTML 템플릿 입니다.</template>
    ```

    정답 : 아래 '입력' 부분에 정답을 작성해주세요.

    ```js
    let tp = document.getElementById("tp");
    let pasteTp = document.getElementById("pasteTp");

    const m_TP = tp.content.cloneNode(true)
    pasteTp.appendChild(m_TP)
    ```

-------------------------------------------------------------

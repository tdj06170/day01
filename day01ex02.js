let clickBtn = document.getElementById("clickBtn");
//id 값이 같은 요소는 1개 뿐이다
let heading = document.getElementById("heading");
let aa = document.getElementsByClassName("aa");
// DOM 선택 되었는가?
console.log(clickBtn);
console.dir(clickBtn);
// 선택된 DOM 요소에 이벤트 핸들러 걸기
clickBtn.onclick = function(event) {
    //클릭이벤트 가 발생하면 이벤트를  console에 출력
   // console.dir(event);
    console.dir(document);
    document.bgColor = "yellow";
    document.title = "Hello";
    console.log(heading);
    heading.style.backgroundColor = "red";
}
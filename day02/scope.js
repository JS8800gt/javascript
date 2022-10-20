//지역변수와 전역변수의 이름이 같을 경우, 지역에서 전역변수에 접근하는 방법은 무엇일까?
// 1. global 객체 : node에서 전역을 관리
// 2. window 객체 : 브라우저에서 전역을 관리
// 3. this 객체   : node면 global 브라우저면 window으로 실행
// 4. globalThis 객체 : 어떤 영역에서 쓰더라도 맞는 것으로 실행

// var x;
// global.x;
// window.x;
// this.x;
globalThis.x;

function f() {
    var x;
    //변수 사용 시 가까운 스코프부터 찾는다.
    //따라서 함수 안에 사용된 x는 '지역변수'이다.
    // x=10;
    //    global.x = 10;
    // window.x = 10;
    // this.x = 10;
    globalThis.x = 10;
}

f();

console.log(x);
var x; // 전역 변수

function f() {
    var y; //지역 변수
    var x = 20; //지역 변수 -> 호이스팅 생각하시오
    y = 10; //지역 변수 -> 가까운 영역에서 부터 찾기 때문에
    z = 30;
}

f();


console.log(x);
console.log(z);
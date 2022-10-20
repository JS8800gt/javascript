// JS에서는 오버로딩을 지원하지 않는다.
// 같은 이름으로 여러 개의 함수를 선언하면, 가장 마지막에 선언한 함수로 사용된다.
// function add(num1, num2) {
//     return num1 + num2;
// }
// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }


// JS함수는 매개변수의 개수보다 적게 전달해도, 많이 전달해도 오류가 나지 않는다.
console.log(add(1, 3));
console.log(add(1, 3, 4));

// 가변인자(제일 뒤에 써야함)
function add(...args: any[]) {
    var total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

function intro(name: string, ...args: any[]) {
    console.log("이름: " + name);
    for (let i = 0; i < args.length; i++) {
        console.log("기타정보 : " + args[i]);
    }
}
intro("한동석", 20, "경기도")

// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// tsc --init
// Set-ExecutionPolicy Unrestricted
// tsc --init
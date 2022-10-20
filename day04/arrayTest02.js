// 1~100까지 Array 객체에 담은 후 짝수만 출력
// var datas = new Array(100).fill();//100칸 생성
// datas.forEach(function (v, i, ar) {
//     ar[i] = i + 1;

// });
// console.log(datas.filter(function (v) {
//     return v % 2 == 0
// }));

// 한글을 숫자로 변경
// 입력 예) 일공이사
// 출력 예) 1024
// var hangle = "공일이삼사오육칠팔구";
// var input = "일공이사".split(""); //array타입으로 변경
// console.log(input.map(v=> hangle.indexOf(v)).join(""));





// 숫자를 한글로 변경
// 입력 예) 1024
// 출력 예) 일공이사
// var hangle = "공일이삼사오육칠팔구";
// var input = "1024".split("");
// console.log(input.map(v => hangle.charAt(v)).join(""));




// 1~100까지 합 출력
var datas = new Array(100).fill().map((v, i) => i + 1);
var result = 0;
datas.forEach(v=>result+=v);
console.log(result);






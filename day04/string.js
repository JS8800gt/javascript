// 문자열에 있는 includes() 메소드에 조회할 값을 전달하면,
// 포함되어 있을 때 true, 전혀 없을 때 false이다.
console.log("ABC".includes("A"));
console.log("ABC".includes("Z"));

// split() : 구분점을 전달하면 구분점을 기준으로 각 값을 분리해준다.
console.log("ABC".split());
console.log("ABC".split(""));
console.log("a,b,c".split(","));

// substring() : 원하는 인덱스로 문자열 분리
console.log("ABC".substring(2));
console.log("ABC".substring(1, 2));
console.log("ABC".substring(1, 3));

// === : 값과 타입 모두 같아야 true
console.log("3" + 9);
let data1 = 10;
let data2 = "10";
console.log(data1 + data2);
console.log(data1 == data2);
console.log(data1 === data2);
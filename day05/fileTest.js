let file = require("fs");  //node.js에 있는 모듈 import
//입력 : read 출력 : write

let user = new Object();
user.name = "한동석";
user.id = "hds1234";
user.pw = "1234";

let userJSON = JSON.stringify(user);
console.log(userJSON);

// file.writeFile('경로','내용','인코딩',callback함수(오류 났을 경우 실행);
// file.readFile('경로','인코딩',callback함수(에러객체, 내용)); <-불러오는거이므로 내용추가 필요x
file.writeFile('user.json',userJSON,'utf-8',function(e){
    console.log(e ? e:"출력 성공");
});

file.readFile('user.json', 'utf-8', function (e, content) {
    if (e) {
        console.log(e);
    } else {
        let user = JSON.parse(content);
        console.log(user);
        console.log(user.name);
    }
});
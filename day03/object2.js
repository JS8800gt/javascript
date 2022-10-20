var user = new Object();
user.userId = 'hds1234';
user.userPw = "1234";
user.userAddress = "문래";
user.userPhoneNumber = "01012341234";
user.userName = "한동석";

console.log(user);

user.info = info;

function info() {
    console.log(this.userName + "입니다.")
}

user.info();
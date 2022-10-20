var account = {
  owner: "한동석",
  code: "1234" ,
  balance: 10000,
  deposit: function(money){this.balance += money;},
  withdraw: function(money){this.balance -= money;},
};

account.number = "110-111-111111";

account.withdraw(3000);

with(console){
    log(account);
    log(account.owner);
    log(account["balance"]); //키값 ""필요
}
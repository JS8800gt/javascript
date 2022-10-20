function a(name,price,count,callback){
    let sum = price* count;
    if(callback){
        console.log(name,sum);
    }
};

a('시계',5000,5,function(result){
    console.log(result);
});
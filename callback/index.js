function add(num1, num2, callback) {
    if (callback) {
        callback(num1 + num2);
        return;
    }
    return num1 + num2;
};

add(3, 5, function (result) {
    console.log(result / 2);
});
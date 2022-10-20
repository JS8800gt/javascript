// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Object를 1개의 Array객체에 모두 담는다.
// JSON으로 변경시킨다.

function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;

}

let products = new Array();
products.push(new Product('빵', 5000, 5));
products.push(new Product('담배', 6000, 15));
products.push(new Product('시계', 3000, 45));

let productsJSON = JSON.stringify(products);
console.log(productsJSON);

// product.json으로 출력하고 JSON데이터를 가져와서 각 테이터 출력

let file = require("fs")
// file.writeFile('product.json', productsJSON, 'utf-8', function (e) {
//     console.log(e ? e : "출력 성공");
// });

file.readFile('product.json', 'utf-8', function (e, content) {
    JSON.parse(content).forEach(v => {
        console.log(v.name);
        console.log(v.price);
        console.log(v.count);

    });
});

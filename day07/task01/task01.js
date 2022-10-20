let tempTr;
let temp;

const button = document.querySelector("input[type='button']");
button.addEventListener("click", function () {
    const input = document.getElementById("input").value;
    const trs = document.querySelectorAll("tbody tr");
    let check = false;
    if (tempTr) {
        tempTr.style.background = "#fff";
        // tempTr.firstElementChild.innerHTML=tempTr.firstElementChild.innerHTML.split("★")[0];
        tempTr.firstElementChild.innerHTML = temp;

    }

    trs.forEach(tr => {
        let td = tr.firstElementChild;
        if (td.innerHTML == input) {
            tempTr = tr;
            temp = td.innerHTML;

            tr.style.background = "#ef5350";
            td.innerHTML = "★" + td.innerHTML;
            check= true;
        }
    });

    if (!check) {
        alert("다시 입력하세요.");

    }
});
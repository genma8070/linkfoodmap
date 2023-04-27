const newprice = document.querySelector("#newprice");
const newrate = document.querySelector("#newrate");
const menu = document.querySelector("#name");
const btn = document.querySelector("#btn");
const choice2 = document.querySelector("#choice2");
const price = document.querySelector("#price");
const rate = document.querySelector("#rate");
const respon = document.querySelector("#res");

choice2.addEventListener("change", function () {


    if (choice2.value === "addmenu") {
        shop.removeAttribute("disabled")
        menu.removeAttribute("disabled")
        price.removeAttribute("disabled")
        rate.removeAttribute("disabled")
        newprice.setAttribute("disabled", true)
        newrate.setAttribute("disabled", true)
    }
    else if (choice2.value === "editmenu") {
        shop.removeAttribute("disabled")
        menu.removeAttribute("disabled")
        price.setAttribute("disabled", true)
        rate.setAttribute("disabled", true)
        newprice.removeAttribute("disabled")
        newrate.removeAttribute("disabled")
    }

    else {
        shop.setAttribute("disabled", true)
        menu.setAttribute("disabled", true)
        price.setAttribute("disabled", true)
        rate.setAttribute("disabled", true)
        newprice.setAttribute("disabled", true)
        newrate.setAttribute("disabled", true)
    }
})


btn.addEventListener("click", function () {
    if (choice2.value === "addmenu") {

        let body = {

            "name": menu.value,
            "shop": shop.value,
            "rate": rate.value,
            "price": price.value

        }

        fetch("http://localhost:8080/add_menu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let reslist = data
                respon.innerText = reslist.message

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    if (choice2.value === "editmenu") {

        let body = {
            "name": menu.value,
            "shop": shop.value,
            "newrate": newrate.value,
            "newprice": newprice.value
        }

        fetch("http://localhost:8080/edit_menu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                let reslist = data
                respon.innerText = reslist.message

            })
            .catch(function (error) {
                console.log(error)
            })
    }

})
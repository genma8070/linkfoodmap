const btn = document.querySelector("#btn");
const choice = document.querySelector("#choice");
const shop = document.querySelector("#shop");
const city = document.querySelector("#city");
const newcity = document.querySelector("#newcity");
const respon = document.querySelector("#res");


choice.addEventListener("change", function () {
    

    if (choice.value === "addshop") {
        shop.removeAttribute("disabled")
        newcity.setAttribute("disabled", true)
        city.removeAttribute("disabled")
    }
    else if (choice.value === "editshop") {
        shop.removeAttribute("disabled")
        newcity.removeAttribute("disabled")
        city.removeAttribute("disabled")
    }
    else if (choice.value === "deletedata") {
        shop.removeAttribute("disabled")
        newcity.setAttribute("disabled", true)
        city.setAttribute("disabled", true)
    }
    else {
        shop.setAttribute("disabled", true)
        newcity.setAttribute("disabled", true)
        city.setAttribute("disabled", true)
    }
})




btn.addEventListener("click", function () {
    if (choice.value === "addshop") {

        let body = {
            "eat_map":{
                "shop": shop.value,
                "city": city.value
            }
        }

        fetch("http://localhost:8080/add_shop", {
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
    if (choice.value === "editshop") {

        let body = {
            "shop": shop.value,
            "city": city.value,
            "newcity": newcity.value
        }

        fetch("http://localhost:8080/delete_data", {
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
    if (choice.value === "deletedata") {

        let body = {
            "shop": shop.value
        }

        fetch("http://localhost:8080/delete_data", {
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
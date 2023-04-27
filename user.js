
const menurate = document.querySelector("#menurate");
const btn = document.querySelector("#btn");
const choice3 = document.querySelector("#choice3");
const city = document.querySelector("#city");
const rate = document.querySelector("#rate");
const respon = document.querySelector("#res");

choice3.addEventListener("change", function () {

    if (choice3.value === "bycity") {
        city.removeAttribute("disabled")
        rate.setAttribute("disabled", true)
        menurate.setAttribute("disabled", true)
    }
    else if (choice3.value === "byrate") {
        city.setAttribute("disabled", true)
        rate.removeAttribute("disabled")
        menurate.setAttribute("disabled", true)
    }
    else if (choice3.value === "bywrate") {
        city.setAttribute("disabled", true)
        rate.removeAttribute("disabled")
        menurate.removeAttribute("disabled")
    }

    else {
        city.setAttribute("disabled", true)
        rate.setAttribute("disabled", true)
        menurate.setAttribute("disabled", true)
    }
})

btn.addEventListener("click", function () {
    if (choice3.value === "bycity") {
        let body = {
            "city": city.value
        }

        fetch("http://localhost:8080/by_city", {
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
                if (reslist.length === 0) {
                    respon.innerText = "無符合條件的店家"
                }
                else {
                    let content = '<table style="border: 1px solid black; margin: 0px auto">';
                    content += '<thead><tr><th>Shop</th><th>Rate</th><th>Menu</th><th>Menurate</th></tr></thead>';
                    content += '<tbody>';
                    reslist.forEach(reslist => {
                        content += `<tr><td>${reslist.shop}</td><td>${reslist.rate}</td><td>${reslist.menu}</td><td>${reslist.menurate}</td></tr>`
                    });
                    content += '</tbody></table>';
                    respon.innerHTML = content;
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }
    if (choice3.value === "byrate") {

        let body = {
            "rate": rate.value
        }

        fetch("http://localhost:8080/by_rate", {
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
                if (reslist.length === 0) {
                    respon.innerText = "無符合條件的店家"
                }
                else {
                    let content = '<table style="border: 3px solid black; margin: 0px auto"">';
                    content += '<thead><tr><th>Shop</th><th>Rate </th><th>Menu </th><th>Menurate</th></tr></thead>';
                    content += '<tbody>';
                    reslist.forEach(reslist => {
                        content += `<tr><td>${reslist.shop}</td><td>${reslist.rate}</td><td>${reslist.menu}</td><td>${reslist.menurate}</td></tr>`
                    });
                    content += '</tbody></table>';
                    respon.innerHTML = content;
                }

            })
            .catch(function (error) {
                console.log(error)
            })
    }

    if (choice3.value === "bywrate") {

        let body = {
            "rate": rate.value,
            "menurate": menurate.value
        }

        fetch("http://localhost:8080/by_wrate", {
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
                if (reslist.length === 0) {
                    respon.innerText = "無符合條件的店家"
                }
                else {
                    let content = '<table style="border: 1px solid black; margin: 0px auto"">';
                    content += '<thead><tr><th>Shop</th><th>Rate</th><th>Menu</th><th>Menurate</th></tr></thead>';
                    content += '<tbody>';
                    reslist.forEach(reslist => {
                        content += `<tr><td>${reslist.shop}</td><td>${reslist.rate}</td><td>${reslist.menu}</td><td>${reslist.menurate}</td></tr>`
                    });
                    content += '</tbody></table>';
                    respon.innerHTML = content;
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }
})


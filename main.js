

const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    let body = {

        "shop": "apple"


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
            console.log(data);
        })
        .catch(function (error) {
            console.log(error)
        })
})
const items = [{
        name: "cat",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "crow",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "horse",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas",
        color: "orange",
    },
    {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
        color: "green",
    },
    {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
        color: "green",
    },
    {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
        color: "green",
    },
    {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas",
        color: "green",
    },
    {
        name: "user-astronaut",
        prefix: "fa-",
        type: "user",
        family: "fas",
        color: "blue",
    },
    {
        name: "user-graduate",
        prefix: "fa-",
        type: "user",
        family: "fas",
        color: "blue",
    },
    {
        name: "user-ninja",
        prefix: "fa-",
        type: "user",
        family: "fas",
        color: "blue",
    },
    {
        name: "user-secret",
        prefix: "fa-",
        type: "user",
        family: "fas",
        color: "blue",
    },
];

const animals = [];
const vegetables = [];
const users = [];

document.getElementById("categoria").addEventListener("change", function() {
    const categoria = this.value;
    const valoriCategoria = ["all", "animals", "vegetables", "users"];
    const valoreCategoria = valoriCategoria[categoria];
    reset();

    animals.forEach((el) => {
        if (valoreCategoria === "animals") {
            card = generaCard(el);
            document.querySelector(".row").innerHTML += card;
        }
    });

    vegetables.forEach((el) => {
        let card;
        if (valoreCategoria === "vegetables") {
            card = generaCard(el);
            document.querySelector(".row").innerHTML += card;
        }
    });

    users.forEach((el) => {
        let card;
        if (valoreCategoria === "users") {
            card = generaCard(el);
            document.querySelector(".row").innerHTML += card;
        }
    });

    items.forEach((el) => {
        let card;
        if (valoreCategoria === "all") {
            card = generaCard(el);
            document.querySelector(".row").innerHTML += card;
        }
    });
});

items.forEach((el) => {
    const card = generaCard(el);
    document.querySelector(".row").innerHTML += card;

    if (el.type === "animal") {
        animals.push(el);
    } else if (el.type === "vegetable") {
        vegetables.push(el);
    } else if (el.type === "user") {
        users.push(el);
    }
});

function generaCard(el) {
    let color = el.color ? el.color : " ";
    return `
	<div class="col card text-center lm-card">
	<i class="${el.family} ${el.prefix}${el.name} ${color}"></i>
    ${el.name}
	</div>`;
}

function reset() {
    document.querySelector(".row").innerHTML = "";
}
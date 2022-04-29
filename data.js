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

items.forEach((item) => {
    const card = generaCard(item);
    document.querySelector(".row").innerHTML += card;

    /* Separo gli oggetti in base al colore */

    if (item.color === "orange") {
        document.querySelector(".card i").classList.add("orange");
    } else if (item.color === "green") {} else {}
});

function generaCard(item) {
    return `
	<div class="col card text-center lm-card">
	<i class="${item.family} ${item.prefix}${item.name}"></i> 
			 ${item.name}
	</div>`;
}
function newElement(lastname,firstname,image,age) {
				const selement = `<div class="mainelement">
    <h1 class="mainh1">${lastname}, ${firstname}</h1>
    <img src="../assets/${image}" alt="${lastname}" style="max-width: 100px; height: auto;"></img>
    <p class="mainh1">Age: ${age} y/o</p>
    <p class="mainh1">Height: n/a</p>
    <p class="mainh1">Weight: n/a</p>
    <p class="mainh1">Hobbies: n/a</p>
    <p class="mainh1">Famous line: n/a</p>
  </div>
`
				document.body.insertAdjacentHTML("beforeend", selement)
}
const names = {
				awatin: {
								firstname: "Rhaine Jorgette",
								lastname: "Awatin",
								middleinitial: null,
								image: null,
								age: 12,
				},
				baang: {
								firstname: "Uriel Nick",
								lastname: "Baang",
								middleinitial: null,
								image: "uriel.jpg",
								age: 12,
				},
				butcon: {
								firstname: "James",
								lastname: "Butcon",
								middleinitial: null,
								image: null,
								age: 12,
				},
}
for (const [key, value] of Object.entries(names)) {
				console.log(key)
				newElement(value["lastname"], value["firstname"], value["image"], value["age"])
}



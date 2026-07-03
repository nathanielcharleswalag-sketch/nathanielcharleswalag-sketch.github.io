function newElement(lastname,firstname,image,age,height,weight,hobbies,line) {
				const selement = `<div class="mainelement">
    <h1 class="mainh1">${lastname}, ${firstname}</h1>
    <img src="../assets/${image}" alt="${lastname}" style="max-width: 100px; height: auto;"></img>
    <p class="mainh1">Age: ${age} y/o</p>
    <p class="mainh1">Height: ${height} cm</p>

	<p class="mainh1">Weight: ${weight} kg</p>
    <p class="mainh1">Hobbies: ${hobbies}</p>
    <p class="mainh1">Famous line: ${line}</p>
  </div>
`
				document.body.insertAdjacentHTML("beforeend", selement)
}
const names = {
				awatin: {
								firstname: "Rhaine Jorgette",
								lastname: "Awatin",
								middleinitial: null,
								image: "1783053184412~2.jpg",
								age: 11,
					hobbies: "reading, writing, singing, dancing",
					height: 0,
					weight: 0,
					line: "",
	
				},
				baang: {
					firstname: "Uriel Nick",
					lastname: "Baang",
					middleinitial: null,
					image: "Messenger_creation_990973577147227~2.jpeg",
					age: 11,
					hobbies: "badminton, piano, baking, karate",
					height: 149,
					weight: 60,
					line: "Bad things are made for good things."
				},
				butcon: {
								firstname: "James",
								lastname: "Butcon",
								middleinitial: null,
								image: null,
								age: 12,
					hobbies: "",
					height: 0,
					weight: 0,
					line: "",
				},
}
for (const [key, value] of Object.entries(names)) {
				console.log(key)
				newElement(value["lastname"], value["firstname"], value["image"], value["age"], value["height"], value["weight"], value["hobbies"], value["line"])
}



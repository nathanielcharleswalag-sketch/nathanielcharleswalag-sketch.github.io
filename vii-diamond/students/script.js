function newElement(lastname,firstname,image,age,height,weight,hobbies,line,gender) {
				const selement = `<div class="mainelement">
    <h1 class="mainh1">${lastname}, ${firstname}</h1>
    <img src="../assets/${image}" alt="${lastname}" style="max-width: 100px; height: auto;"></img>
    <p class="mainh1">Age: ${age} y/o</p>
    <p class="mainh1">Height: ${height} cm</p>
	<p class="mainh1">Gender: ${gender}</p>

	<p class="mainh1">Weight: ${weight} kg</p>
    <p class="mainh1">Hobbies: ${hobbies}</p>
    <p class="mainh1">Famous line: ${line}</p>
  </div>
`
				document.body.insertAdjacentHTML("beforeend", selement)
};
let jsonNames = {"Dogillio, Elee Keln", "Elpa, Nicole Kim", "Emata, Lyrchell Vince", "Felisilda, Angelo Jethro", "Fusillero, Abigail Chearm", "Gaputan, Aubrey Mae", "Labitad, Ma. Cristelo Cyle", "Lapina, Zoe Roneese", "Lumakin, Margarette", "Malazarte, Rona", "Maminta, Yusuf Iqbaal", "Mandalunes, Ephraim Glent", "Mayonila, Ashley Kate", "Montay, Hashreen", "Montes, Marianne", "Nahial, Andres", "Naong, Lee", "Ociones, Jeihan Myr", "Pacheco, Yniana Jireh", "Pajo, Chris Gabriel", "Panis, Kwynn", "Panlee, Ziva Mishka", "Quiblat, Ralph Lawrence", "Ra, Sophia Ysabel", "Rafanan, Ralph Nathan", "Rangel, Keanna", "Rojo, Summer", "Sedigo, Althea Joy", "Taboclaon, Charice Grace", "Tobias, Hanna Faith", "Tumanda, Zack V", "Villena, Bernachel", "Wagas, Innowe Faith", "Walag, Nathaniel Charles", "Ysabel"}
console.log("starting")
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
					gender: "female",
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
					gender: "male",
					line: "Bad things are made for good things."
				},
				butcon: {
								firstname: "James",
								lastname: "Butcon",
								middleinitial: null,
								image: "butcon.jpg",
								age: 12,
					hobbies: "",
					height: 0,
					weight: 0,
					line: "",
					gender: "male",
				},
};
for (const [key, value] of Object.entries(names)) {
				console.log(key)
				newElement(value["lastname"], value["firstname"], value["image"], value["age"], value["height"], value["weight"], value["hobbies"], value["line"], value["gender"])
};
for (const name of jsonNames) {
	const tmpArray = name.split(",")
	newElement(tmpArray[0], tmpArray[1],null,0,0,0,"","","")
};



function multiplyNum(x, y) {
  console.log(x * y);
}

multiplyNum(40, 2);

let person = {
  name: "tselote eskias",
  age: 19,
  address: {
    country: "ethiopia",
    city: "A.A",
    subCity: "bole",
  },
};
// console.log(person);
// console.log(person.name);
// console.log(person.address);
// console.log(person.address.subCity);

// function changeColor() {
//   document.getElementById('heading').style.color = "red"
// }

// let name = "tselote"

// console.log(name.trim());
// console.log(name.slice(0,3));
// console.log(name.concat( " eskias"));
// console.log(name.toUpperCase());
// console.log(name.at(3));

//array

let names = ["tselote", "eskias", "zemen"];
names.push("nebyou");
names.pop();
names.pop();

console.log(names);
console.log(names);

const date = new Date();
console.log(date);

//maths

console.log(Math.round(1.5));
console.log(Math.pow(2, 5));

// ternary operators

// console.log(!false);
// console.log(1==="5");
// console.log(true && false);
// console.log(true || false);
// console.log(((10>=5) && (100 ==="100")) || !(70<=20));

// let zz = 10<5 ? 100 : 50
// console.log(zz);

// let numbers = [1, 2, 3, 4, 5, 76, 5, 4, 433, 4];
// let html = "";

// for (number of numbers) {
//   console.log(number);
//   html = html + `<h1>${number}</h1>`;
// }
// console.log(html);
// for (let key in person) {
//   console.log(person[key]);
// }

// document.getElementById("numbersDisplay").innerHTML = html;
// switch
let day = 7;
switch (day) {
  case 1:
    console.log("monday");

    break;
  case 2:
    console.log("tuesday");

    break;
  case 3:
    console.log("wednsday");
  case 4:
    console.log("thursday");
  case 5:
    console.log("friday");
  case 6:
    console.log("saturday");
  case 7:
    console.log("sunday");

    break;

  default:
    break;
}

// nested objects

const seriesMovies = [
  {
    id: 1,
    movieName: "game of thrones",
    IMDB_rating: 9.5,
    seasons: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: 2,
    movieName: "breaking bad",
    IMDB_rating: 9.4,
    seasons: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    movieName: "vikings",
    IMDB_rating: 9.3,
    seasons: [1, 2, 3, 4, 5, 6],
  },
  { id: 4, movieName: "see", IMDB_rating: 9.0, seasons: [1, 2, 3] },
  {
    id: 5,
    movieName: "the sopranos",
    IMDB_rating: 8.9,
    seasons: [1, 2, 3, 4, 5],
  },
];

console.log(seriesMovies);
// console.log(seriesMovies[0].movieName);

seriesMovies.forEach(function (movies) {
  console.log(movies.movieName);

  movies.seasons.forEach((season) => {
    console.log(season);
  });
});

const h1 = document.getElementById("heading")
document.getElementById("btn").addEventListener('click' , (e) => {
    document.body.style.backgroundColor = 'darkBlue'
    h1.style.color = 'white'

})
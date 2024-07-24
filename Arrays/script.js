// let database = ['turtle', 'cat', 'dog', 'bird'];
// console.log(database);
// console.log(database.length);


// let animal = database[0];
// console.log(animal);

// database[0] = 'dinosaur';
// console.log(database);

// let last = database[database.length - 1];
// console.log(last);

// database.push('lizard');
// console.log(database);

// database.pop()
// console.log(database);


let scores = [10, 20, 10];

let i = 0;

while (i < scores.length) {
  scores[i]++;
  i++;
}

console.log(scores)

for (i = 0; i < scores.length; i++) {
  scores[i]++;
}

console.log(scores);

scores.forEach(function(entry, index) {
  scores[index]++;
})


console.log(scores);


let catalog = [
  {
    title: 'JS for Beginners',
    author: 'Zenva',
    copies: 1
  },
  {
    title: 'HTML for Beginners',
    author: 'XYX',
    copies: 3
  },
  {
    title: 'Python for Beginners',
    author: 'Duggy',
    copies: 1
  }

]

catalog.forEach(function(entry, index) {
  if (entry.author == 'Zenva') {
    entry.copies++;
  }
});

console.log(catalog);
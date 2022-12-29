function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let test = [5, 4, 3, 2, 1]
shuffle(test)
console.log(test)
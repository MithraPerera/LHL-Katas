// Optionally can also use a helper method inside the chooseRecipe function
/*
function ingredientCheck(bakery, ingredients) {
  let count = 0;
  ingredients.forEach(ingredient => {
    bakery.includes(ingredient) ?? count++;
  });
  if (count === 2) {
    return true;
  } else {
    return false;
  }
}
*/

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for (const recipe of recipes) {
    let haveIngred = 0;
    for (const ingredient of recipe.ingredients) {
      if (bakeryA.includes(ingredient) || bakeryB.includes(ingredient)) {
        haveIngred += 1;
      }
    }
    if (haveIngred === 2) {
      return recipe.name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
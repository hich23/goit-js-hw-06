const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector('#ingredients');

const createIngredientsListItems = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = ingredient;
    ingredientItemEl.classList.add('item');

    return ingredientItemEl;
  });
};

const ingredientsEl = createIngredientsListItems(ingredients);
ingredientsListEl.append(...ingredientsEl);
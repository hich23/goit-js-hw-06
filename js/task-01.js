const categoriesList = document.querySelector('#categories'); 
const categoriesItems = categoriesList.querySelectorAll('.item'); 

console.log(`Number of categories: ${categoriesItems.length}`); 

categoriesItems.forEach(category => {
  const categoryName = category.firstElementChild.textContent; 
  const categoryItemsCount = category.children.length; 
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
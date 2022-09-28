const template = document.getElementById('template').content;
const menuItem = template.querySelector('.menu__item');
const menuItems = document.querySelector('.menu__items');

/* функция создания новой картинки с блюдом */
const createItem = (itemTitle, itemPrice, itemWeight, itemDescription, itemImage) => {
  const menuItemClone = menuItem.cloneNode(true);
  const title = menuItemClone.querySelector('.menu__item_title');
  title.textContent = itemTitle;
  const price = menuItemClone.querySelector('.price_rub');
  price.textContent = itemPrice;
  const weight = menuItemClone.querySelector('.weight_gr');
  weight.textContent = itemWeight;
  const description = menuItemClone.querySelector('.menu__item_description');
  description.textContent = itemDescription;
  const image = menuItemClone.querySelector('.menu__item_image');
  image.src = itemImage;
  image.alt = itemImage;
  return menuItemClone;
}

/* функция добавления новой картинки */
const addItem = (itemTitle, itemPrice, itemWeight, itemDescription, itemImage) => {
  const cardItem = createItem(itemTitle, itemPrice, itemWeight, itemDescription, itemImage);
  menuItems.prepend(cardItem);
};

const initialItems = [
  {
  title: "Аджапсандали",
  price: "300",
  weight: "200",
  description: "перцы, помидоры, лук и зелень тушатся вместе, а после соединяются с жареными баклажанами",
  image: "https://eda.ru/img/eda/c620x415/s1.eda.ru/StaticContent/Photos/120705181646/120719195730/p_O.jpg",
},
{
  title: "Долма фаршированные виноградными листьями",
  price: "300",
  weight: "200",
  description: "завёрнутую в виноградные листья начинку из мясного фарша и риса",
  image: "https://img.freepik.com/free-photo/grape-leaves-dolma-minced-meat-grape-leaves-plain-youghurt-spices-top-view_141793-4443.jpg?t=st=1653925594~exp=1653926194~hmac=374b24d22fa0695479e62bea6c52903b881969899f775daba999e7ab67d0dcc7&w=740",
},
{
  title: "Cпелые сливы",
  price: "200",
  weight: "200",
  description: "спелые сливы",
  image: "https://img.freepik.com/free-photo/top-view-fresh-ripe-plums-inside-wooden-plate-on-blue-background_140725-139620.jpg?t=st=1653911202~exp=1653911802~hmac=08f1b749b86dd0f739e427b6d83f5b9bbd7bb52d6b57086edaa5df811ade8218&w=1380",
},
{
  title: "Чахохбили в томатной соусе",
  price: "440",
  weight: "200",
  description: "пряное, ароматное рагу с курочкой",
  image: "https://img.freepik.com/free-photo/concept-of-spicy-sauce-with-adjika-close-up_185193-79900.jpg?t=st=1653926162~exp=1653926762~hmac=726e508ba864daa606694c53218cae7b3ed408240bf53e0c68f8eac345de0e2e&w=1380",
},
{
  title: "Салат в кисло-сладком соусе",
  price: "200",
  weight: "200",
  description: "помидоры, лимонный сок и черный молотый перец, масло растительное, сыра Фета, лук репчатый, кинза",
  image: "https://img.freepik.com/free-photo/salad-with-tomatoes-cheese-and-cilantro-in-sweet-and-sour-sauce-georgian-cuisine-healthy-food_2829-7017.jpg?t=st=1653926259~exp=1653926859~hmac=0fd221bb9590bba4e71f6aabc357a9eb872e7b5334f8825f86f414b1811b9e76&w=1380",
},
]

initialItems.forEach(function(element) {
  addItem(element.title, element.price, element.weight, element.description, element.image);
})

{/* <div class="menu__item">
<div class="menu__item_content">
  <p class="menu__item_title"></p>
  <div class="menu__item_total">
    <p class="menu__item_price"><span class="price_rub"></span>P</p>
    <p class="menu__item_weight">/ <span class="weight_gr"></span>гр</p>
  </div>
</div>
<p class="menu__item_description"></p>
<img src="#" alt="#" class="menu__item_image">
</div> */}

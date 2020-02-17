/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/*

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.

*/

function MenuComponent(menuItems) {
  let menu = document.createElement("div");
  let ul = document.createElement("ul");

  // add menu class
  menu.classList.add("menu");

  // create list of li
  let menuItemsArray = menuItems.map(item => {
    let li = document.createElement("li");
    li.textContent = item;
    return li;
  });

  // append to ul
  menuItemsArray.forEach(item => {
    ul.appendChild(item);
  });

  menu.appendChild(ul);

  return menu;
}

let menuButton = document.querySelector(".menu-button");

let header = document.querySelector(".header");

menuButton.addEventListener("click", () => {
  let menu = document.querySelector(".menu");
  if (menu) {
    menu.classList.toggle("menu--open");
  }
});

header.appendChild(MenuComponent(menuItems));

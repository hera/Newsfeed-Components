/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/


function createMenu (menuItems) {
	let menu = document.createElement('div');
	menu.classList.add('menu');

	let ul = document.createElement('ul');

	for (let item of menuItems) {
		let li = document.createElement('li');
		li.textContent = item;

		ul.appendChild(li);
	}

	menu.appendChild(ul);

	return menu;
}

let menu = createMenu(menuItems);
document.body.prepend(menu);


let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
	menu.classList.toggle('menu--open');
});

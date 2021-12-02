'use strict';

// handle add event when add button is clicked
const input_name = document.querySelector('.input_name');
const input_price = document.querySelector('.input_price');
const add_button = document.querySelector('.add_button');
const itemList = document.querySelector('.item-list');
let checkedPrice = new Number(0);
let uncheckedPrice = new Number(0);

add_button.addEventListener('click', () => {
  const itemName = input_name.value;
  let itemPrice = parseInt(input_price.value);
  if (itemName == '') {
    alert('Please enter the item name.');
    return;
  }
  if (isNaN(itemPrice)) {
    itemPrice = new Number(0);
  }

  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  item.setAttribute('data-price', `${itemPrice}`);
  item.innerHTML = `
          <div class="item_name">${itemName}</div>
          <div class="item_price">${itemPrice} $</div>
          <i class="item_delete-button far fa-trash-alt"></i>
  `;
  itemList.appendChild(item);
  input_name.value = '';
  input_price.value = '';

  uncheckedPrice += itemPrice;
  updateSummary();
});

// handle enter key stroke when cursor is on the input field
input_name.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) add_button.click();
});
input_price.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) add_button.click();
});

/*
// stop this function because of unknow bug
// handle delete checked item button
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
const items = document.querySelectorAll('.item');
deleteCheckedBtn.addEventListener('click', () => {
  items.forEach((item) => {
    if (item.classList.contains('checked')) item.remove();
  });
  uncheckedPrice = new Number(0);
  updateSummary();
});
*/

// handle toggling item when item is clicked and delete item when delete button is clicked
itemList.addEventListener('click', (event) => {
  const currPrice = parseInt(event.target.parentNode.dataset.price);
  if (event.target.classList.contains('item_delete-button')) {
    event.target.parentNode.remove();
    if (event.target.parentNode.classList.contains('checked')) {
      checkedPrice -= currPrice;
    } else {
      uncheckedPrice -= currPrice;
    }
  } else {
    if (event.target.parentNode.classList.contains('checked')) {
      event.target.parentNode.classList.remove('checked');
      uncheckedPrice += currPrice;
      checkedPrice -= currPrice;
    } else {
      event.target.parentNode.classList.add('checked');
      checkedPrice += currPrice;
      uncheckedPrice -= currPrice;
    }
  }
  updateSummary();
});

// update sum when item is added / deleted / checked / unchecked
const sumChecked = document.querySelector('.sum_checked-price');
const sumUnchecked = document.querySelector('.sum_unchecked-price');
const sumTotal = document.querySelector('.sum_total-price');
function updateSummary() {
  sumChecked.textContent = `${checkedPrice} $`;
  sumUnchecked.textContent = `${uncheckedPrice} $`;
  sumTotal.textContent = `${checkedPrice + uncheckedPrice} $`;
}

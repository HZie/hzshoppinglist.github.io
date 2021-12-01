'use strict';

const input_name = document.querySelector('.input_name');
const input_price = document.querySelector('.input_price');
const add_button = document.querySelector('.add_button');
const itemList = document.querySelector('.item-list');

add_button.addEventListener('click', () => {
  const itemName = input_name.value;
  const itemPrice = input_price.value;
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  item.innerHTML = `
          <input type="checkbox" class="item_checkbox" />
          <div class="item_name">${itemName}</div>
          <div class="item_price">${itemPrice}</div>
          <i class="item_delete-button far fa-trash-alt"></i>
  `;
  itemList.appendChild(item);
  input_name.value = '';
  input_price.value = '';
});

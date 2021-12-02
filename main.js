'use strict';

// handle add event when add button is clicked
const input_name = document.querySelector('.input_name');
const input_price = document.querySelector('.input_price');
const add_button = document.querySelector('.add_button');
const itemList = document.querySelector('.item-list');

add_button.addEventListener('click', () => {
  const itemName = input_name.value;
  let itemPrice = input_price.value;
  if (itemName == '') {
    alert('Please enter the item name.');
    return;
  }
  if (itemPrice == '') {
    itemPrice = 0;
  }

  const item = document.createElement('li');
  item.setAttribute('class', 'item');
  item.innerHTML = `
          <div class="item_name">${itemName}</div>
          <div class="item_price">${itemPrice}</div>
          <i class="item_delete-button far fa-trash-alt"></i>
  `;
  itemList.appendChild(item);
  input_name.value = '';
  input_price.value = '';
});

// handle delete checked item button
const deleteCheckedBtn = document.querySelector('.delete-checked-btn');
const items = document.querySelectorAll('.item');
deleteCheckedBtn.addEventListener('click', () => {
  items.forEach((item) => {
    if (item.classList.contains('checked')) item.remove();
  });
});

// handle toggling item when item is clicked and delete item when delete button is clicked
itemList.addEventListener('click', (event) => {
  if (event.target.classList.contains('item_delete-button')) {
    event.target.parentNode.remove();
  } else {
    event.target.parentNode.classList.toggle('checked');
  }
});

// TO DO
/*
[작성해야할 기능]


3. 체크된 아이템, 체크되지 않은 아이템, 총 아이템들의 가격을 업데이트하기 (아이템이 추가/삭제될 때마다)
 */

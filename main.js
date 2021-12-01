'use strict';

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

// TO DO
/*
[작성해야할 기능]

2. delete버튼을 누르면 체크된 아이템들 삭제하기

3. 체크된 아이템, 체크되지 않은 아이템, 총 아이템들의 가격을 업데이트하기 (아이템이 추가/삭제될 때마다)
 */

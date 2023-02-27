
let returnContacts = [];
let changeFlag = 0;
let valid = true;

function createDOMClient(inputContacts) {
  returnContacts = [];
  let i = 0;

  for (let item of inputContacts) {
    retObj = createOneContact(item, i);
    returnContacts[i] = retObj;
    i++;
  }
}

/**********************************************/


function createOneContact(inputContacts, i) {

  let divContactBox;
  if (document.querySelector('.modal__contactbox'))
  divContactBox = document.querySelector('.modal__contactbox');
  else {
    let modalBox = document.querySelector(".modal__box");

    divContactBox = document.createElement('div');
    divContactBox.classList.add("modal__contactbox");
    // ниже подключение формы контактов
    modalBox.append(divContactBox);
  }

  const cont = document.querySelector(".modal__contact");
  // cont.style.marginTop="65px"
  cont.style.paddingTop = "10px";
  cont.style.paddingBottom = "25px";
  cont.style.backgrounColor = "#f4f3f6";


  const divMenuItem = document.createElement('div');
  divMenuItem.classList.add("modal__menuitem");
  divMenuItem.setAttribute("id", "menuitem" + i);

  let menubtn = "menubtn";
  // <button class="modal__menubtn" type="button" value="" >Телефон</button>
  const buttonMenubtn = document.createElement('button');
  buttonMenubtn.classList.add("modal__menubtn");
  buttonMenubtn.setAttribute("type", "button");
  buttonMenubtn.setAttribute("id", menubtn + i);
  buttonMenubtn.innerText = inputContacts.type;

  // <img class="modal__img" id="arrowImg" src="./img/downArrow.svg" alt="">
  const imgArrowDown = document.createElement('img');
  imgArrowDown.classList.add("modal__img");
  imgArrowDown.setAttribute("src", "./img/downArrow.svg");
  imgArrowDown.setAttribute("alt", "");

  /* <div class="dropdown"> */
  const divDropdown = document.createElement('div');
  divDropdown.classList.add("dropdown");


  // <ul class="dropdown__list ">
  let droplist = "droplist"
  const ulDropdown = document.createElement('ul');
  ulDropdown.classList.add("dropdown__list");
  ulDropdown.setAttribute("id", droplist + i)
  // выпадашка

  // <li class="dropdown__item">
  const liDropdown1 = document.createElement('li');
  liDropdown1.classList.add("dropdown__item");
  // <button class="modal__row" value="" id="phone"> Телефон </button>
  let phone = "phone";
  const buttonRow1 = document.createElement('button');
  // const buttonRow1 = document.createElement('a');
  buttonRow1.classList.add("modal__row");
  buttonRow1.innerText = "Телефон";
  // buttonRow1.setAttribute("id", phone + i);

  // <li class="dropdown__item">
  const liDropdown2 = document.createElement('li');
  liDropdown2.classList.add("dropdown__item");
  // <button class="modal__row" value="" id="email">Email</button>
  const buttonRow2 = document.createElement('button');
  buttonRow2.classList.add("modal__row");
  buttonRow2.innerText = "Email";

  // <li class="dropdown__item ">
  const liDropdown3 = document.createElement('li');
  liDropdown3.classList.add("dropdown__item");
  // <button class="modal__row" value="" id="VK" > VK</button>
  const buttonRow3 = document.createElement('button');
  buttonRow3.classList.add("modal__row");
  buttonRow3.innerText = "VK";

  // <li class="dropdown__item ">
  const liDropdown4 = document.createElement('li');
  liDropdown4.classList.add("dropdown__item");
  const buttonRow4 = document.createElement('button');
  buttonRow4.classList.add("modal__row");
  buttonRow4.innerText = "Facebook";

  // <li class="dropdown__item ">
  const liDropdown5 = document.createElement('li');
  liDropdown5.classList.add("dropdown__item");
  // <button class="modal__row" value="" id="other"> Другое</button>
  const buttonRow5 = document.createElement('button');
  buttonRow5.classList.add("modal__row");
  buttonRow5.innerText = "Другое";

  // <input class="modal__input" id="vvod" placeholder="Введите данные контакта">
  const inputClient = document.createElement('input');
  inputClient.classList.add("modal__input");
  inputClient.setAttribute("placeholder", "Введите данные контакта");
  let input = "input";
  inputClient.setAttribute("id", input + i);

  // <div class="tooltip">
  const divTooltip = document.createElement('a');
  divTooltip.setAttribute("href", "#");

  //  divTooltip.classList.add("grid__tooltip","tooltip");
  divTooltip.classList.add("tooltip__closebutton");

  // <span class="tooltip__icon" >
  const spanTooltip = document.createElement('span');
  spanTooltip.classList.add("tooltip__icon");

  let closeContactButton="close"
  const clientButtonClose = document.createElement('button');
  clientButtonClose.classList.add("modal__closebutton");
  clientButtonClose.setAttribute("value", " ");
  clientButtonClose.setAttribute("id", closeContactButton+i);


  const xmlns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(xmlns, "svg");
  svg.setAttributeNS(null, "class", "modal__closebuttonsvg");
  svg.setAttributeNS(null, "viewBox", "0 0 12 12");
  svg.setAttributeNS(null, "width", "12");
  svg.setAttributeNS(null, "height", "12");

  const icon = document.createElementNS(xmlns, "path");
  icon.setAttributeNS(null, 'd', 'M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z');
  svg.append(icon);

  const divText = document.createElement('div');
  divText.classList.add("tooltip__content");
  divText.innerText = "Удалить контакт";

  if (inputContacts.action != "DELETE") {

    divContactBox.append(divMenuItem);
    divMenuItem.append(buttonMenubtn);
    divMenuItem.append(imgArrowDown);
    divMenuItem.append(divDropdown);
    divDropdown.append(ulDropdown);
    ulDropdown.append(liDropdown1);
    liDropdown1.append(buttonRow1);
    ulDropdown.append(liDropdown2);
    liDropdown2.append(buttonRow2);
    ulDropdown.append(liDropdown3);
    liDropdown3.append(buttonRow3);
    ulDropdown.append(liDropdown4);
    liDropdown4.append(buttonRow4);
    ulDropdown.append(liDropdown5);
    liDropdown5.append(buttonRow5);
    divMenuItem.append(inputClient);

    divMenuItem.append(divTooltip);
    divTooltip.append(spanTooltip);
    divTooltip.append(clientButtonClose);
    clientButtonClose.append(svg);
    divTooltip.append(divText);

    buttonMenubtn.setAttribute("type", "button");
    buttonMenubtn.setAttribute("value", inputContacts.value);

    if (inputContacts.length == 0)
      inputClient.value = "";
    else
      if (inputContacts.value.length > 0) {
        inputClient.value = inputContacts.value;
      }

  }

  let reutObj = {};
  reutObj.type = buttonMenubtn.innerText;
  reutObj.value = inputContacts.value;
  reutObj.togl = 0;
  reutObj.menubtn = document.getElementById(menubtn + i);
  reutObj.action = inputContacts.action;

  reutObj.strelka = strelka;
  reutObj.clickUL = clickUL;
  reutObj.inputChange = inputChange;
  reutObj.delContact = delContact;
  reutObj.submitForm = submitForm;
  reutObj.closeHover = closeHover;
  reutObj.closeHoverOut = closeHoverOut;

  reutObj.strelka();
  reutObj.clickUL();
  reutObj.inputChange();
  reutObj.delContact();
  let inp = [];
  inp[0] = inputContacts;
  reutObj.submitForm(inp);
  reutObj.closeHover();
  reutObj.closeHoverOut();

  return reutObj;
}

/**********************************************/

function strelka() {

  let menuBtn = document.querySelectorAll('.modal__menubtn');

  //  правую кнопку сохранить/удалить
  let modalInput = document.querySelectorAll(".modal__input");

  for (let i = 0; i < modalInput.length; i++) {
    let priznak = 0;
    let currentRow = modalInput[i];
    const deleteButton = currentRow.closest('.modal__menuitem').querySelector(".modal__closebutton");
    if (currentRow.value.length > 0) {
      priznak = 1;
      deleteButton.classList.remove('modal__closebutton--active');
    }
    if (priznak == 0) {
      deleteButton.classList.add('modal__closebutton--active');
    }
  }

  //  стрелку меняю
  menuBtn.forEach(el => {

    let togl;

    el.addEventListener('click', (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.modal__menuitem').querySelector('.dropdown');
      const modalImg = currentBtn.closest('.modal__menuitem').querySelector(".modal__img");

      for (let item of returnContacts)
        if (item.action != "DELETE")
          if (item.menubtn.id == el.id) {
            togl = item.togl;
            break;
          }
      if (togl == 0) {
        modalImg.setAttribute("src", "./img/upArrow.svg");
        drop.classList.add('dropdown--active');

        for (let item of returnContacts)
          if (item.action != "DELETE")
            if (item.menubtn.id == el.id) {
              item.togl = 1;
              break;
            }
      }
      changeFlag = 0;
    });
  });
}
/*********************************************************************/

function submitForm(inputContacts) {
  let inputType, inputValue, inputFlag, returnType, returnValue, returnAction;
  for (let item of inputContacts) item.flag = 0;
  for (let item of inputContacts) {
    inputType = item.type;
    inputValue = item.value;
    inputFlag = item.flag;
    for (let element of returnContacts) {
      returnType = element.type;
      returnValue = element.value;
      returnAction = element.action;

      // все строки без изменений
      if (inputType == returnType && inputValue == returnValue && returnAction == "EMPTY" && inputFlag == 0) {
        item.flag = 1;
      }
      // все строки , у которых поменялось значение
      if (inputType == returnType && inputValue != returnValue && returnAction == "EMPTY" && inputFlag == 0) {
        element.action = "PATCH";
        item.flag = 1;
      }
    }
  }
  //добавить

  for (let elem of returnContacts) {
    returnAction = elem.action;
    for (let item of inputContacts)
      if (elem.type == item.type && elem.action == "EMPTY" && inputContacts.flag == 0) {
        inputContacts.flag = 1;
        elem.action = "POST"
      }
  }
}

/******************************************************************/

// нажал на кнопкуТелефон или выбрал из меню

function clickUL() {

  let modalUl = document.querySelectorAll(".dropdown__list");

  modalUl.forEach(el => {
    el.addEventListener("click", function (e) {

      let currentRow;
      currentRow = e.target;

     const modalImg = currentRow.closest('.modal__menuitem').querySelector(".modal__img");
     const nameBtna = currentRow.closest('.modal__menuitem').querySelector(".modal__menubtn");
     const currentInput = currentRow.closest('.modal__menuitem').querySelector(".modal__input");
     const deleteButton = currentRow.closest('.modal__menuitem').querySelector(".modal__closebutton");
     if (changeFlag == 0)
     nameBtna.innerText = currentRow.innerHTML;
     let drop = currentRow.closest('.modal__menuitem').querySelector('.dropdown');
     modalImg.setAttribute("src", "./img/downArrow.svg");
     drop.classList.remove('dropdown--active');

     let priznak = 0;

     for (let item of returnContacts)
       if (item.type == nameBtna.innerText && item.menubtn.id == nameBtna.id) {
         currentInput.value = item.value;
         priznak = 1;
         deleteButton.classList.remove('modal__closebutton--active');
         break;
       }

       for (let item of returnContacts)
       if (item.action != "DELETE")
         if (item.menubtn.id == nameBtna.id) {
           item.togl = 0;
           break;
         }

      if (priznak == 0) {
        currentInput.value = "";
        deleteButton.classList.add('modal__closebutton--active');

        killContact(e);

        let newObj1 = {};
        newObj1 = { type: nameBtna.innerText, value: "", flag: 0, action: "NEW" }
        let arrawContacts = [];
        let i = 0;
        for (let item of returnContacts) {
          arrawContacts[i] = item;
          i++;
        }
        arrawContacts[i] = newObj1;
        if (document.querySelector('.modal__contactbox'))
          document.querySelector('.modal__contactbox').remove();

        createDOMClient(arrawContacts);
        const divError = document.querySelector(".modal__error");
        divError.innerText = "";

      }

    });
  });
}
/********************************************************************************** */
function inputChange() {
  let modalInput = document.querySelectorAll(".modal__input");

  modalInput.forEach(el => {
    el.addEventListener('input', (e) => {

      // поменял инфо в контакте
      changeFlag = 1;
      let currentRow = e.target;
      let nameBtn = currentRow.closest('.modal__menuitem').querySelector(".modal__menubtn");
      let currentInput = currentRow.closest('.modal__menuitem').querySelector(".modal__input");
      currentInput.classList.add('modal__change');

      for (let item of returnContacts) {
        if (item.action != "DELETE")
          if (item.menubtn.id == nameBtn.id) {
            item.value = currentInput.value;
            if (item.type != nameBtn.innerText) {
              item.type = nameBtn.innerText;
              item.action = "POST";
            }
            else {
              item.type = nameBtn.innerText;
              if (item.action == "NEW")
                item.action = "POST"
              else
                if (item.action == "EMPTY")
                  item.action = "PATCH";
            }
            break;
          }
      }

      valid=maskValidate(currentInput, nameBtn)
      modalInput.forEach(el => {
        el.addEventListener('focus', (e) => {
          changeFlag = 1;
        });
      });

    });

  });
}
/**************************************/

//  СЕКЦИЯ CONTACT Валидация и маска

function maskValidate(currentInput, nameBtn) {
  const divError = document.querySelector(".modal__error");
  const id = currentInput.getAttribute('id');

  if (nameBtn.innerText == "Телефон") {
    let im = new Inputmask("+7 (999) 999-99-99");
    im.mask(currentInput);

    const phone = currentInput.inputmask.unmaskedvalue();
    if (phone.length < 10) {
      divError.innerText = "Недопустимый формат - номер короткий";
    }
    else divError.innerText = "";

  }

  if (nameBtn.innerText == "Email") {

    // https://habr.com/ru/post/175375/  почитай на досуге

    let errorText = "Недопустимый формат -";
    let priznak1 = 0;
    let priznak2 = 0;
    if (currentInput.value.length < 5) {
      errorText = errorText +"адрес короткий";
      priznak1 = 1;
    }

    let index = currentInput.value.indexOf("@");
    if (index < 1) {
      if (priznak1 == 1) errorText = errorText + " и ";
      errorText = errorText + "нет собаки или она не на месте"
      priznak2 = 1;
    }
    if (priznak1 == 0 && priznak2 == 0)
      divError.innerHTML = "";
    else divError.innerHTML = errorText;
  }

  let rowsNumber = Math.trunc(divError.length/100) + 1;
  const buttonMarginTop = document.querySelector(".modal__button");
  buttonMarginTop.style.marginTop = rowsNumber * 12 + "px";

  if (divError.innerText.length == 0) return true;
  else return false;

}

/************************************************************/
function delContact() {
  let deleteContact = document.querySelectorAll(".modal__closebutton");
  deleteContact.forEach(el => {

    el.addEventListener('click', (e) => {
      killContact(e);
    });
  });
}
  function killContact(e) {
      const delScreen = e.target.closest('.modal__menuitem');
    const delReturn = e.target.closest('.modal__menuitem').querySelector(".modal__menubtn");

    let indexDel = 0;
    for (let item of returnContacts) {
      if (item.menubtn != null && item.menubtn.id === delReturn.id) break;
      indexDel++;
    }

    delScreen.remove();
      returnContacts[indexDel].action = "DELETE";

      let numberRows = 0;

      for (let item of returnContacts)
        if (item.action != "DELETE") numberRows++;

    let divContact, imgContact, hrefContact;
    if (numberRows == 9) {
      const divError = document.querySelector(".modal__error");
      divError.innerText = "";
    }

    if (numberRows <= 9) {
        divContact = document.querySelector(".modal__contact");
        imgContact = document.querySelector(".modal__cyrcleplus");
        hrefContact = document.querySelector(".modal__addcontact");
        divContact.style.visibility = "visible";
      divContact.style.opacity = "1";

      if (!imgContact) { } else{
        imgContact.style.visibility = "visible";
        imgContact.style.opacity = "1";
      }
      if (!hrefContact) { }else {
        hrefContact.style.visibility = "visible";
        hrefContact.style.opacity = "1";
      }
      }


}

/************************************************************/
function closeHover() {
  let buttonHover = document.querySelectorAll(".modal__closebuttonsvg");

  buttonHover.forEach(el => {
    el.addEventListener('mouseover', (e) => {

      let button = el.parentNode;
      button.style.border = "1px solid #F06A4D";
      let divContent = button.nextSibling;
      divContent.style.opacity = "1";
      divContent.style.visibility = "visible";
      divContent.style.top = "-22px";
      divContent.style.left = "14px";
    });
  });
}

function closeHoverOut() {
  let buttonHover = document.querySelectorAll(".modal__closebuttonsvg");

  buttonHover.forEach(el => {
    el.addEventListener('mouseout', (e) => {
      let button = el.parentNode;
      button.style.border = "0";
      button.style.borderLeft = "1px solid #C8C5D1";
      let divContent = button.nextSibling;
      divContent.style.opacity = "0";
      divContent.style.visibility = "hidden";
    });
  });

}
  /***********************************************************8 */





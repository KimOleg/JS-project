//   https://doka.guide/js/deal-with-forms/


async function modalWindow(inputContacts, version) {


  // <!-- Модальное окно
  // < div class="hero__new modal" id = "newClient" >

  let zindex = document.querySelector(".grid__header");
  zindex.style.zIndex = "0";

  let container = document.querySelector(".hero__container");

  // окно
  const modalElement = document.createElement('div');
  modalElement.classList.add("hero__new", "modal");
  modalElement.classList.add('hero__new--open');

  // <div class="modal">
  const divClient = document.createElement('div');
  divClient.classList.add("modal");

  // <form class="modal__form" action="#">
  const formModal = document.createElement('form');
  formModal.classList.add("modal__form");
  formModal.setAttribute("id", "forma");

  /**********************************************************************/

  //  <div class="modal__box">
  const divClientBox = document.createElement('div');
  divClientBox.classList.add("modal__box");

  // <p class="modal__title"> Новый клиент</p>
  const modalTitle = document.createElement('p');
  modalTitle.classList.add("modal__title");

  const divID = document.createElement('div');
  if (version == 0) modalTitle.innerText = "Новый клиент";
  else {
    modalTitle.innerText = "Изменить данные";
    modalTitle.classList.add("modal__header");

    // <div class="modal__ID> ID= <div>"
    divID.classList.add("modal__ID");
    divID.setAttribute("id", "ident");
    // здесь полный ID- не 6 знаков!!!!
    divID.innerText = "ID=" + inputContacts.id;
  }

  // const buttonClose = document.createElement('button');  /* это svg крестик */
  const buttonClose = document.createElement('a');  /* это svg крестик */
  buttonClose.setAttribute("href", "#");
  buttonClose.classList.add("modal__buttonclose");

  const divLabel = document.createElement('div');
  divLabel.classList.add("modal__divlabel");

  const divSmallLastName = document.createElement('div');
  divSmallLastName.classList.add("modal__smallplaceholder");
  const lastNameSmallSpan = document.createElement('span');
  if (version == 1) {
    divSmallLastName.innerText = "Фамилия";
    lastNameSmallSpan.innerText = "*";
  }

  // <label class="modal__placeinput">
  const lastnameLabel = document.createElement('label');
  lastnameLabel.classList.add("modal__placeinput");
  // <input class="modal__lastname" required="1" type="text">
  const lastnameInput = document.createElement('input');
  lastnameInput.classList.add("modal__lastname");
  lastnameInput.setAttribute("required", "1");
  lastnameInput.setAttribute("type", "text");
  lastnameInput.setAttribute("name", "lastName");
  if (version == 1)
    lastnameInput.value = inputContacts.lastName;

  // <div class="modal__placeholder">Фамилия<span>*</span></div>
  const lastnameDiv = document.createElement('div');
  const lastnameSpan = document.createElement('span');
  if (version == 0) {
    lastnameDiv.classList.add("modal__placeholder");
    lastnameDiv.innerText = "Фамилия";
    lastnameSpan.innerText = "*";
  }

  const divSmallName = document.createElement('div');
  divSmallName.classList.add("modal__smallplaceholder");
  const nameSmallSpan = document.createElement('span');
  if (version == 1) {
    divSmallName.innerText = "Имя";
    nameSmallSpan.innerText = "*";
  }

  // <label class="modal__placeinput">
  const nameLabel = document.createElement('label');
  nameLabel.classList.add("modal__placeinput");
  // <input class="modal__lastname" required="1" type="text">
  const nameInput = document.createElement('input');
  nameInput.classList.add("modal__lastname");
  nameInput.setAttribute("required", "1");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  if (version == 1)
    nameInput.value = inputContacts.name;
  // <div class="modal__placeholder">Имя<span>*</span></div>
  const nameDiv = document.createElement('div');
  const nameSpan = document.createElement('span');
  if (version == 0) {
    nameDiv.classList.add("modal__placeholder");
    nameDiv.innerText = "Имя";
    nameSpan.innerText = "*";
  }

  const divSmallSurname = document.createElement('div');
  divSmallSurname.classList.add("modal__smallplaceholder");
  if (version == 1)
    divSmallSurname.innerText = "Отчество";

  // <label class="modal__placeinput">
  const surnameLabel = document.createElement('label');
  surnameLabel.classList.add("modal__placeinput");
  // <input class="modal__lastname" required="1" type="text">
  const surnameInput = document.createElement('input');
  surnameInput.classList.add("modal__lastname");
  surnameInput.setAttribute("required", "1");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("name", "surname");
  if (version == 1)
    surnameInput.value = inputContacts.surname;
  // <div class="modal__placeholder">Отчество</div>
  const surnameDiv = document.createElement('div');
  surnameDiv.classList.add("modal__placeholder");
  surnameDiv.innerText = "Отчество";

  //       < div class= "modal__contact" >
  const divContact = document.createElement('div');
  divContact.classList.add("modal__contact");

  let lengthContacts = 0;

  if (inputContacts.contacts.length > 0) {
    const idClient = inputContacts.id;
    const indexId = document.querySelectorAll(".grid__id");
    let idIndex;
    for (let item of indexId)
      if (idClient == item.innerText) {
        idIndex = item.id.slice(2);
        break;
      }

    const contactNumber = document.getElementById("cont" + idIndex);
    lengthContacts = contactNumber.childNodes.length;
  }

  let addContact, imgContact, hrefContact;

  // <a class="modal__add" href="#"></a>
  addContact = document.createElement('a');
  addContact.classList.add("modal__add");
  addContact.setAttribute("href", "#");

  imgContact = document.createElement('img');   /*это svg + в круге */
  imgContact.classList.add("modal__cyrcleplus");
  imgContact.setAttribute("src", "./img/CyrclePlus.svg");

  // <a class="modal__addcontact" href="#">Добавить контакт</a>
  hrefContact = document.createElement('a');
  hrefContact.classList.add("modal__addcontact");
  hrefContact.setAttribute("href", "#");
  hrefContact.innerText = "Добавить контакт";

  //  <div class="modal__error"> </div>
  const divError = document.createElement('div');
  divError.classList.add("modal__error");
  divError.innerText = " ";

  //  <button class="modal__button" type="submit">Сохранить</button>
  const buttonSave = document.createElement('button');
  buttonSave.classList.add("modal__button");
  buttonSave.innerHTML = "Сохранить";

  const hrefCancel = document.createElement('a');
  const hrefKill = document.createElement('a');

  if (version == 0) {
    //  <a class="modal__cancel" href="#">Отмена</a>
    // const hrefCancel = document.createElement('a');
    hrefCancel.classList.add("modal__cancel");
    hrefCancel.setAttribute("href", "#");
    hrefCancel.innerText = "Отмена";
  }
  else {
    // buttonSave.style.marginBottom = "47px";
    // const hrefKill = document.createElement('a');
    hrefKill.classList.add("modal__kill");
    hrefKill.setAttribute("href", "#");
    hrefKill.innerText = "Удалить клиента";
  }

  container.append(modalElement);
  modalElement.append(divClient);
  divClient.append(formModal)
  formModal.append(divClientBox);
  divClientBox.append(modalTitle);
  if (version == 1) modalTitle.append(divID);

  divClientBox.append(buttonClose);
  divClientBox.append(divLabel);

  if (version == 1) {
    divLabel.append(divSmallLastName);
    divSmallLastName.append(lastNameSmallSpan)
  }

  divLabel.append(lastnameLabel);
  lastnameLabel.append(lastnameInput);
  if (version == 0) {
    lastnameLabel.append(lastnameDiv);
    lastnameDiv.append(lastnameSpan);
  }

  if (version == 1) {
    divLabel.append(divSmallName);
    divSmallName.append(nameSmallSpan)
  }


  divLabel.append(nameLabel);
  nameLabel.append(nameInput);
  if (version == 0) {
    nameLabel.append(nameDiv);
    nameDiv.append(nameSpan);
  }

  if (version == 1)
    divLabel.append(divSmallSurname);


  divLabel.append(surnameLabel);
  surnameLabel.append(surnameInput);
  if (version == 0) surnameLabel.append(surnameDiv);
  formModal.append(divContact);



  divContact.append(addContact);
  addContact.append(imgContact);
  addContact.append(hrefContact);

  if (lengthContacts > 9) {
    divContact.style.visibility = "hidden";
    divContact.style.opacity = "0";
    imgContact.style.visibility = "hidden";
    imgContact.style.opacity = "0";
    hrefContact.style.visibility = "hideen";
    hrefContact.style.opacity = "0";
  }


  formModal.append(divError);
  formModal.append(buttonSave);
  if (version == 0)
  formModal.append(hrefCancel);
  else
  formModal.append(hrefKill);

  let checkObj = [];
  checkObj[0] = lastnameInput;
  checkObj[1] = nameInput;
  checkObj[2] = surnameInput;
  checkObj[3] = divError;
  checkObj[4] = buttonSave;

  // проверка Фамилии
  lastnameInput.addEventListener('input', () => checkLastname(checkObj));
  // lastnameInput.addEventListener('input', () => reset());

  // проверка Имени
  nameInput.addEventListener('input', () => checkFirstname(checkObj));

  // проверка Отчества
  surnameInput.addEventListener('input', () => checkPatronymic(checkObj));

  let oneClient;
  let contactsLength;
  let contacts;
  if (inputContacts.lastName.length == 0 && inputContacts.name.length == 0 && inputContacts.surname.length == 0) {
    contactsLength = 0;
  }
  else {
    oneClient = await loadOneClient(inputContacts.id);
    // oneClient = await loadOneClient(inputContacts.value);
    contactsLength = oneClient.contacts.length;
    contacts = oneClient.contacts;
  }

  let retObj = {};
  retObj.contacts = [];

  for (let i = 0; i < contactsLength; i++) {
    retObj.contacts[i] = { type: contacts[i].type, value: contacts[i].value, flag: 0, action: "EMPTY" }
  }

  createDOMClient(retObj.contacts);


  /********************************************************************************************/
  // нажал выйти без изменений
  buttonClose.addEventListener('click', (e) => {
    modalElement.remove();
    zindex.style.zIndex = "2";
  });

  hrefCancel.addEventListener('click', (e) => {
    modalElement.remove();
    zindex.style.zIndex = "2";
  });


  // нажал сохранить

  buttonSave.addEventListener('click', async () => {
    let lastName = "";
    let name = "";
    if (checkObj[0].value.length == 0)  lastName = "Фамилия не введена!\n";
    if (checkObj[1].value.length == 0) name = "Имя не введено!\n";

    checkObj[3].innerText = checkObj[3].innerText + lastName + name;
    if (checkObj[3].innerText.length > 0 && checkObj[3].innerText != "Больше 10 контактов ввести нельзя!") {
      checkObj[4].removeAttribute('disabled');
      checkObj[4].style.backgroundColor = "#9873FF";
    }
    else {
      let arrawContacts = [];
      let i = 0;
      for (let item of inputContacts.contacts) {
        arrawContacts[i] = item;
        i++;
      }

      submitForm(arrawContacts);

      let clientObj = {};
      clientObj.contacts = [];
      clientObj.name = nameInput.value;
      if (!surnameInput.value) surnameInput.value = "-";
      clientObj.surname = surnameInput.value;
      clientObj.lastName = lastnameInput.value;


      let j = 0;
      for (let item of returnContacts) {
        if (item.action != "DELETE") {
          clientObj.contacts[j] = { type: item.type, value: item.value };
          j++;
        }
      }

      let noActive = document.querySelector(".modal__change");
      if (!noActive) valid = true;
      else {
        let index = noActive.id.slice(5);
        let inputField = document.getElementById("input" + index);
        let menuBtn = document.getElementById("menubtn" + index);

        valid = maskValidate(inputField, menuBtn)
      }
      const divError = document.querySelector(".modal__error");
      if (divError.innerText == "Больше 10 контактов ввести нельзя!") valid = true;

      if (valid == true) {
        if (version == 0)
          retData = await createClient(clientObj);
        else {
          console.log("Заполз")
          const id = inputContacts.id;
          retData = await updateClient(id, clientObj)
        }
        modalElement.remove();
        takeRecords();
      }
    }
    });


  formModal.addEventListener('submit', async (e) => {
    e.preventDefault();
  });


  // нажал добавить контакт
  hrefContact.addEventListener('click', async (e) => {

    if (version == 0) {
      buttonSave.style.marginBottom = "45px";
    }
    let noActive = document.querySelector(".modal__closebutton--active");
    if (!noActive) valid = true;
    else {
      let index = noActive.id.slice(5);
      let inputField = document.getElementById("input" + index);
      let menuBtn = document.getElementById("menubtn" + index);

      valid = maskValidate(inputField, menuBtn)
    }
    if (valid == true) {
      let lengthContacts = 0;

      for (let i = 0; i < returnContacts.length; i++)
        if (returnContacts[i].action != "DELETE")
          lengthContacts++;
      if (valid == true) {

        if (lengthContacts == 9) {
          divError.innerText = "Внимание! Это последний контакт,больше 10 контактов ввести нельзя! ";
        }

        if (lengthContacts <= 9) {

          let newObj1 = {};
          newObj1 = { type: "Телефон", value: "", flag: 0, action: "NEW" }
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
        }
        else {
          let divContact, imgContact, hrefContact;
          divContact = document.querySelector(".modal__contact");
          imgContact = document.querySelector(".modal__cyrcleplus");
          hrefContact = document.querySelector(".modal__addcontact");
          divContact.style.visibility = "hidden";
          divContact.style.opacity = "0";
          imgContact.style.visibility = "hidden";
          imgContact.style.opacity = "0";
          hrefContact.style.visibility = "hidden";
          hrefContact.style.opacity = "0";
          divError.innerText = "Больше 10 контактов ввести нельзя! ";
        }
      }
    }
  });

  hrefKill.addEventListener('click', async (e) => {
  //  от ID взял последние6 знаков
    // let ID = inputContacts.id.slice(inputContacts.id.length - 6);
    let ID = inputContacts.id;

    let row = document.querySelectorAll(".grid__id");
    let smallId;
    for (let item of row) {
      if (item.innerText == ID) {
        smallId = item.id.slice(2);
        break;
      }
    }
    let currentRow = document.getElementById("delete" + smallId);

    modalElement.remove();
    deleteOneClient(currentRow);
  });

}




// checkObj[0] = lastnameInput;    фамилия
// checkObj[1] = firstnameInput;   имя
// checkObj[2] = patronymicInput;  отчество
// checkObj[3] = divError;         div для ошибочных сообщений
// checkObj[4] = buttonSave;       кнопка Сохранить

let lastName = "", nameCheck = "", surnameCheck = "";

function checkLastname(checkObj) {
  // проверка Фамилии
  lastName = "";

  if (checkObj[0].value.length == 0) {
    lastName = "Фамилия не введена!\n";
  }
  else {
    checkObj[0].value = checkObj[0].value.replace(/ +/g, ' ').trim();
    let rx = /^[а-яё\s-]+$/i;

    if (rx.test(checkObj[0].value) == false) {
      lastName = "Фамилия - допустима только кириллица\n";
      checkObj[4].setAttribute('disabled', true);
      checkObj[4].style.backgroundColor = "#B89EFF";
    }
    else {
      checkObj[4].removeAttribute('disabled');
      checkObj[4].style.backgroundColor = "#9873FF";
      lastName = "";
    }
  }
  checkObj[3].innerText = lastName + nameCheck + surnameCheck;
}


function checkFirstname(checkObj) {


  // проверка Имени

  if (checkObj[0].value.length == 0) {
    checkObj[4].setAttribute('disabled', true);
    checkObj[4].style.backgroundColor = "#B89EFF";
    lastName = "Фамилия не введена!\n";
  }

  nameCheck = "";

  if (checkObj[1].value.length == 0) {
    nameCheck = "Имя не введено!\n";
  }
    else {
    checkObj[1].value = checkObj[1].value.replace(/ +/g, ' ').trim();
    let rx = /^[а-яё\s-]+$/i;
    if (rx.test(checkObj[1].value) == false) {
      nameCheck = "Имя - допустима только кириллица\n";
      checkObj[4].setAttribute('disabled', true);
      checkObj[4].style.backgroundColor = "#B89EFF";
    }
    else {
      checkObj[4].removeAttribute('disabled');
      checkObj[4].style.backgroundColor = "#9873FF";
      nameCheck = "";
    }
  }
  checkObj[3].innerText = lastName + nameCheck + surnameCheck;
}


function checkPatronymic(checkObj) {

let formModal = checkObj[5];
  // проверка Отчества
  if (checkObj[0].value.length == 0) {
    checkObj[4].setAttribute('disabled', true);
    checkObj[4].style.backgroundColor = "#B89EFF";
    lastName = "Фамилия не введена!\n";
  }

  if (checkObj[1].value.length == 0) {
    checkObj[4].setAttribute('disabled', true);
    checkObj[4].style.backgroundColor = "#B89EFF";
    nameCheck = "Имя не введено!\n";
  }


  // surnameCheck = "";
  if (checkObj[2].value.length > 0) {
    checkObj[2].value = checkObj[2].value.replace(/ +/g, ' ').trim();
    let rx = /^[а-яё\s-]+$/i;

    if (rx.test(checkObj[2].value) == false) {
      surnameCheck = "Отчество - допустима только кириллица\n";
      checkObj[4].setAttribute('disabled', true);
      checkObj[4].style.backgroundColor = "#B89EFF";;
    }
    else {
      surnameCheck = "";
      checkObj[4].removeAttribute('disabled');
      checkObj[4].style.backgroundColor = "#9873FF";
    }
  } else {
    surnameCheck = "";
    checkObj[4].removeAttribute('disabled');
    checkObj[4].style.backgroundColor = "#9873FF";
  }
  checkObj[3].innerText = lastName + nameCheck + surnameCheck;
}

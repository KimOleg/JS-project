// actions
let priznak = 0;
let fieldNumber = 0;
let clickArraw = [];

async function takeRecords() {
  let arrow = "up";
  divUpperArrow = document.querySelector(".hero__uparrow");
  if (divUpperArrow) {
    let strArrow = divUpperArrow.getAttribute('src');
    let direction = strArrow.indexOf('UpArrow')

    if (direction == -1) arrow = "up";
    else arrow = "down";
  }

  let dataGet = await loadTodoItems();

  /************************************** */
  let input = document.querySelector(".hero__input");
  if (input.value.length > 0) {
    let str = input.value;

    let data = await searchData(str)
    takeRecordsNext(data);

  } else takeRecordsNext(dataGet);

  if (priznak == 0) {
    arrowSort();
    priznak = 1;
  }
}

async function takeRecordsNext(dataG) {

  let grid = document.querySelector(".grid");
  clearAllClients();

  let divHeader;
  if (document.querySelector(".grid__header")) {
    divHeader = document.querySelector(".grid__header");
  }
  else {
    divHeader = document.createElement('div');
    divHeader.classList.add("grid__header");
    const divHeader1 = document.createElement('div');
    divHeader1.classList.add("hero__ID");
    divHeader1.innerText = "ID";

    const divUpperArrow = document.createElement('img');
    divUpperArrow.classList.add("hero__uparrow");
    divUpperArrow.setAttribute("src", "./img/DownArrow.svg");
    divUpperArrow.setAttribute("alt", "");
    divUpperArrow.setAttribute("width", "8");
    divUpperArrow.setAttribute("height", "8");

    const divHeader2 = document.createElement('div');
    divHeader2.classList.add("hero__fio");
    divHeader2.innerText = "Фамилия Имя Отчество";
    const divUpperArrow2 = document.createElement('img');
    divUpperArrow2.classList.add("hero__uparrow2");
    divUpperArrow2.setAttribute("src", "./img/DownArrow.svg");
    divUpperArrow2.setAttribute("alt", "");
    divUpperArrow2.setAttribute("width", "8");
    divUpperArrow2.setAttribute("height", "8");
    const divText2 = document.createElement('div');
    divText2.classList.add("hero__text2");
    divText2.innerText = "A-Я";

    const divHeader3 = document.createElement('div');
    divHeader3.classList.add("hero__date");
    divHeader3.innerText = "Дата и время создания";
    const divUpperArrow3 = document.createElement('img');
    divUpperArrow3.classList.add("hero__uparrow3");
    divUpperArrow3.setAttribute("src", "./img/DownArrow.svg");
    divUpperArrow3.setAttribute("alt", "");
    divUpperArrow3.setAttribute("width", "8");
    divUpperArrow3.setAttribute("height", "8");

    const divHeader4 = document.createElement('div');
    divHeader4.classList.add("hero__last");
    divHeader4.innerText = "Последние изменения";
    const divUpperArrow4 = document.createElement('img');
    divUpperArrow4.classList.add("hero__uparrow4");
    divUpperArrow4.setAttribute("src", "./img/DownArrow.svg");
    divUpperArrow4.setAttribute("alt", "");
    divUpperArrow4.setAttribute("width", "8");
    divUpperArrow4.setAttribute("height", "8");

    const divHeader5 = document.createElement('div');
    divHeader5.classList.add("hero__contacts");
    divHeader5.innerText = "Контакты";

    const divHeader6 = document.createElement('div');
    divHeader6.classList.add("hero__actions");
    divHeader6.innerText = "Действия";

    const divHeader7 = document.createElement('div');

    grid.append(divHeader);
    divHeader.append(divHeader1);
    divHeader1.append(divUpperArrow);
    divHeader.append(divHeader2);
    divHeader2.append(divUpperArrow2);
    divHeader2.append(divText2);

    divHeader.append(divHeader3);
    divHeader3.append(divUpperArrow3);
    divHeader.append(divHeader4);
    divHeader4.append(divUpperArrow4);
    divHeader.append(divHeader5);
    divHeader.append(divHeader6);
    divHeader.append(divHeader7);
  }

  divHeader.style.zIndex = "2";

  for (let i = 0; i < dataG.length; i++) {
    const divID = document.createElement('div');
    divID.classList.add("grid__id");
    divID.setAttribute("id", "id" + i);

    const divFIO = document.createElement('div');
    divFIO.classList.add("grid__fio");
    divFIO.setAttribute("id", "fio" + i);

    const divDATE = document.createElement('div');
    divDATE.classList.add("grid__date");
    divDATE.setAttribute("id", "date" + i);

    const divUPDATE = document.createElement('div');
    divUPDATE.classList.add("grid__date");
    divUPDATE.setAttribute("id", "update" + i);

    let divCONTACT = document.createElement('div');
    divCONTACT.classList.add("grid__contact");
    divCONTACT.setAttribute("id", "cont" + i);

    const divACTIV1 = document.createElement('div');
    divACTIV1.classList.add("grid__active1");
    divACTIV1.setAttribute("id", "activ1" + i);

    const imgChange = document.createElement('img');
    imgChange.classList.add("grid__imgchange1");
    imgChange.setAttribute("src", "./img/Change.svg");
    imgChange.setAttribute("alt", "");

    const divChange = document.createElement('div');
    divChange.classList.add("grid__divchange");
    divChange.setAttribute("id", "change" + i);
    divChange.innerText = "Изменить";

    const divACTIV2 = document.createElement('div');
    divACTIV2.classList.add("grid__active2");
    divACTIV2.setAttribute("id", "activ2" + i);

    const imgDelete = document.createElement('img');
    imgDelete.classList.add("grid__imgchange2");
    imgDelete.setAttribute("src", "./img/Delete.svg");
    imgDelete.setAttribute("alt", "");

    const divDelete = document.createElement('div');
    divDelete.classList.add("grid__divdelete");
    divDelete.setAttribute("id", "delete" + i);
    divDelete.innerText = "Удалить";

    grid.append(divID);
    grid.append(divFIO);
    grid.append(divDATE);
    grid.append(divUPDATE);
    grid.append(divCONTACT);

    grid.append(divACTIV1);
    divACTIV1.append(imgChange);
    divACTIV1.append(divChange);

    grid.append(divACTIV2);
    divACTIV2.append(imgDelete);
    divACTIV2.append(divDelete);

    let param = dataG[i].id;

    let dataGet = await getTodoItem(param);

    // здесь ID берем 6 знаков
    let ID1 = document.getElementById("id" + i);
    // ID1.style.value = dataGet.id;
    // ID1.innerText = dataGet.id.slice(dataGet.id.length - 6);
    ID1.innerText = dataGet.id;

    let FIO = document.getElementById("fio" + i);
    FIO.innerText = dataGet.lastName + " " + dataGet.name + " " + dataGet.surname;

    let dates = document.getElementById("date" + i);
    let createDate = dataGet.createdAt.substring(8, 10);
    let createMonth = dataGet.createdAt.substring(5, 7);
    let createYear = dataGet.createdAt.substring(0, 4);
    dates.innerText = createDate + "." + createMonth + "." + createYear;

    const color = document.createElement('div');
    color.classList.add("grid__time");
    color.setAttribute("id", "time" + i);
    dates.append(color);

    let createTime = dataGet.createdAt.substring(11, 16);
    color.innerText = createTime;

    let update = document.getElementById("update" + i);

    createDate = dataGet.updatedAt.substring(8, 10);
    createMonth = dataGet.updatedAt.substring(5, 7);
    createYear = dataGet.updatedAt.substring(0, 4);
    update.innerText = createDate + "." + createMonth + "." + createYear;

    let colorUpdate = document.createElement('div');
    colorUpdate.classList.add("grid__time");
    colorUpdate.setAttribute("id", "timeChange" + i);
    update.append(colorUpdate);

    let updTime = dataGet.updatedAt.substring(11, 16);
    colorUpdate.innerText = updTime;


    takeContacts();

    function takeContacts() {

      let priznak = 0;
      for (let item of clickArraw)
        if (param == item) {
          priznak = 1;
          break;
        }


      let contact = dataGet.contacts;
      let j = 0;

      let remain = contact.length - 4;

      for (let item of contact) {

        // <div class="tooltip">
        const divTooltip = document.createElement('a');
        divTooltip.setAttribute("href", "#");

        //  divTooltip.classList.add("grid__tooltip","tooltip");
        divTooltip.classList.add("tooltip");

        if (j >= 4 && priznak == 0)
          divTooltip.classList.add("tooltip__active");

        if (j > 4) divTooltip.style.marginTop = "7px";

        // <span class="tooltip__icon" >
        const spanTooltip = document.createElement('span');
        spanTooltip.classList.add("tooltip__icon");
        spanTooltip.setAttribute("id", divID.innerText + j);

        const xmlns = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(xmlns, "svg");
        svg.setAttributeNS(null, "viewBox", "0 0 16 16");
        svg.setAttributeNS(null, "width", "16");
        svg.setAttributeNS(null, "height", "16");

        const icon = document.createElementNS(xmlns, "path");
        let nameTooltip;
        const circle = document.createElementNS(xmlns, "circle");
        /********************************/
        if (j == 4 && priznak == 0) {
          const svgRem = document.createElementNS(xmlns, "svg");
          const circleRem = document.createElementNS(xmlns, "circle");
          svgRem.setAttributeNS(null, "class", "tooltip__rema");
          circleRem.setAttributeNS(null, "cx", "8");
          circleRem.setAttributeNS(null, "cy", "8");
          circleRem.setAttributeNS(null, "r", "7.5");
          circleRem.setAttributeNS(null, "stroke", "#9873FF");
          svgRem.append(circleRem);

          const divRemains = document.createElement('div');
          divRemains.classList.add("tooltip__remains");
          divRemains.innerText = "+" + remain;
          nameTooltip = "";

          const divRema = document.createElement('a');
          divRema.setAttribute("href", "#");

          //  divTooltip.classList.add("grid__tooltip","tooltip");
          divRema.classList.add("tooltip");
          divCONTACT.append(divRema);
          divRema.append(divRemains);
          divRema.append(svgRem);
        }
        /********************************/

        if (item.type != "Телефон") {
          svg.setAttributeNS(null, "class", "tooltip__imagesvg");
          icon.setAttributeNS(null, "class", "tooltip__imagesvgfull");
          icon.setAttributeNS(null, 'fill-opacity', '0.7');
        }

        switch (item.type) {
          case 'Телефон':
            svg.setAttributeNS(null, "class", "tooltip__imagesvgphone");
            circle.setAttributeNS(null, "cx", "8");
            circle.setAttributeNS(null, "cy", "8");
            circle.setAttributeNS(null, "r", "8");
            circle.setAttributeNS(null, "fill", "#9873FF");
            circle.setAttributeNS(null, 'fill-opacity', '0.7');
            circle.setAttributeNS(null, "class", "tooltip__phonehover");
            svg.append(circle);

            icon.setAttributeNS(null, 'd', 'M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z');
            nameTooltip = "Телефон:";
            break;
          case 'Email':
            icon.setAttributeNS(null, 'd', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z');
            nameTooltip = "Email:";
            break;
          case 'VK':
            icon.setAttributeNS(null, 'd', 'M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z');
            nameTooltip = "VK:";
            break;
          case 'Facebook':
            icon.setAttributeNS(null, 'd', 'M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z');
            nameTooltip = "Facebook:";
            break;
          case 'Другое':
            icon.setAttributeNS(null, 'd', 'M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z');
            nameTooltip = "";
            break;
        }

        j++;
        const divText = document.createElement('div');
        divText.classList.add("tooltip__content");

        const divNameTooltip = document.createElement('span');
        divNameTooltip.classList.add("tooltip__contentname");

        let index;
        if (item.type == "Другое") {
          index = item.value.indexOf(":");
          divNameTooltip.innerText = item.value.slice(index + 1);
          divText.innerText = item.value.slice(0, index + 1);
        } else {
          divNameTooltip.innerText = item.value;
          divText.innerText = nameTooltip;
        }

        divCONTACT.append(divTooltip);
        divTooltip.append(spanTooltip);
        divTooltip.append(svg);
        svg.append(icon)
        divTooltip.append(divText);
        divText.append(divNameTooltip);
      }
    }
  }

  /****************************************************************/

  // let remainsClick = document.querySelectorAll(".tooltip__remains");
  let remainsClick = document.querySelectorAll(".tooltip__rema");
  if (remainsClick) {
    remainsClick.forEach(el => {
      el.addEventListener("click", async function (e) {
        let parent = e.target.parentNode.parentNode;
        let firstChild = parent.querySelectorAll(".tooltip")
        parent.style.alignContent = "flex-start";

        firstChild.forEach(el => {
          secondChild = el.querySelector(".tooltip__remains");

          if (secondChild) el.remove();
          el.classList.remove("tooltip__active");
          /****************************************************************8 */
          let index = parent.id.slice(4);
          let idClient = dataG[index].id;
          clickArraw.push(idClient);
          /****************************************************************8 */
        });
      });
    });

  }
  /****************************************************************/

  let deleteClientButton = document.querySelectorAll(".grid__divdelete");
  deleteClientButton.forEach(el => {
    el.addEventListener("click", function (e) {
      let currentRow;
      currentRow = e.target;
      modalDelete(currentRow);
    });
  });

  let changeClientButton = document.querySelectorAll(".grid__divchange");
  changeClientButton.forEach(el => {
    el.addEventListener("click", function (e) {
      let currentRow;
      currentRow = e.target;
      modalChange(currentRow);
    });
  });

  arrowHover();
  arrowHoverOut();

}
/****************************************************************/


function arrowSort() {
  let divArrow1 = document.querySelector(".hero__ID");
  divArrow1.addEventListener('click', (e) => {
    console.log("зашел!!!")
    let divArr1 = document.querySelector(".hero__uparrow");
    fieldNumber = 1;
    arrowSortNext(divArr1);
  });

  let divArrow2 = document.querySelector(".hero__fio");
  divArrow2.addEventListener('click', (e) => {
    let divArr2 = document.querySelector(".hero__uparrow2");
    fieldNumber = 2;
    arrowSortNext(divArr2);
  });

  let divArrow3 = document.querySelector(".hero__date");
  divArrow3.addEventListener('click', (e) => {
  let divArr3 = document.querySelector(".hero__uparrow3");
    fieldNumber = 3;
    arrowSortNext(divArr3);
  });

  let divArrow4 = document.querySelector(".hero__last");
  divArrow4.addEventListener('click', (e) => {
  let divArr4 = document.querySelector(".hero__uparrow4");
    fieldNumber = 4;
    arrowSortNext(divArr4);
  });
}

async function arrowSortNext(divUpperArrow) {
  let dataGet;
  let input = document.querySelector(".hero__input");
  if (input.value.length > 0) {
    let str = input.value;
    dataGet = await searchData(str)
  }

  else dataGet = await loadTodoItems();

  let strArrow = divUpperArrow.getAttribute('src');
  let direction = strArrow.indexOf('UpArrow')
  let divText2 = document.querySelector('.hero__text2')
  if (direction == -1) {
    divUpperArrow.setAttribute("src", "./img/UpArrow.svg");

    switch (fieldNumber) {
      case 1:
        dataGet.sort((a, b) => a.id > b.id ? 1 : -1);
        break;
      case 2:
        for (let item of dataGet) {
          item.fio = item.lastName + item.name + item.surname;
        }
        dataGet.sort((a, b) => a.fio > b.fio ? 1 : -1);
        divText2.innerText = "Я-А";
        break;
      case 3:
        dataGet.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
        break;
      case 4:
        dataGet.sort((a, b) => a.updatedAt > b.updatedAt ? 1 : -1);
        break;
    }
  }
  else {
    divUpperArrow.setAttribute("src", "./img/DownArrow.svg");
    switch (fieldNumber) {
      case 1:
        dataGet.sort((a, b) => a.id < b.id ? 1 : -1);
        break;
      case 2:
        for (let item of dataGet) {
          item.fio = item.lastName + item.name + item.surname;
        }
        dataGet.sort((a, b) => a.fio < b.fio ? 1 : -1);
        divText2.innerText = "А-Я";
        break;
      case 3:
        dataGet.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
        break;
      case 4:
        dataGet.sort((a, b) => a.updatedAt < b.updatedAt ? 1 : -1);
        break;
    }
  }
  takeRecordsNext(dataGet);

}

/****************************************************************/

function arrowHover() {
  let divUpperArrow = document.querySelector(".hero__uparrow");

  divUpperArrow.addEventListener('mouseover', (e) => {
    let ID = document.querySelector(".hero__ID");
    ID.style.color = "#333333";
  });

  let divUpperArrow2 = document.querySelector(".hero__uparrow2");
  divUpperArrow2.addEventListener('mouseover', (e) => {
    let ID = document.querySelector(".hero__text2");
    ID.style.color = "#333333";
  });
}

function arrowHoverOut() {
  let divUpperArrow = document.querySelector(".hero__uparrow");
  divUpperArrow.addEventListener('mouseout', (e) => {
    let ID = document.querySelector(".hero__ID");
    ID.style.color = "#9873FF";
  });
  let divUpperArrow2 = document.querySelector(".hero__uparrow2");
  divUpperArrow2.addEventListener('mouseout', (e) => {
    let ID = document.querySelector(".hero__text2");
    ID.style.color = "#9873FF";
  });

}

/****************************************************************/

function clearAllClients() {
  let deleteClientButton = document.querySelectorAll(".grid__divdelete");

  for (let currentRow of deleteClientButton) {
    let ID = currentRow.id.slice(6);
    const divId = document.getElementById("id" + ID);
    const divFio = document.getElementById("fio" + ID);
    const divDate = document.getElementById("date" + ID);
    const divUpdate = document.getElementById("update" + ID);
    const divCont = document.getElementById("cont" + ID);
    const divActiv1 = document.getElementById("activ1" + ID);
    const divActiv2 = document.getElementById("activ2" + ID);

    divId.remove();
    divFio.remove();
    divDate.remove();
    divUpdate.remove();
    divCont.remove();
    divActiv1.remove();
    divActiv2.remove();
  }
}


function modalDelete(currentRow) {

  let container = document.querySelector(".hero__container");

  let zindex = document.querySelector(".grid__header");
  zindex.style.zIndex = "0";

  // окно
  const modalElement = document.createElement('div');
  modalElement.classList.add("hero__new", "modal");
  modalElement.classList.add('hero__new--open');

  // <div class="modal">
  const divClient = document.createElement('div');
  divClient.classList.add("modal");

  // < form class="modal__deleteform delete" action = "#" >
  const delForm = document.createElement('form');
  delForm.classList.add("modal__deleteform", "delete");
  delForm.setAttribute("action", "#");

  // <div class="delete__box">
  const delDiv = document.createElement('div');
  delDiv.classList.add("delete__box");

  // <p class="delete__title" >Удалить клиента</p>
  const delTitle = document.createElement('p');
  delTitle.classList.add("delete__title");
  delTitle.innerText = "Удалить клиента";

  // <button class="modal__buttonclose" type="submit"></button>
  const delCancel = document.createElement('button');
  delCancel.classList.add("modal__buttonclose");
  delCancel.setAttribute("type", "submit");

  // <p class="delete__message">Вы действительно хотите удалить </p>
  const delP1 = document.createElement('p');
  delP1.classList.add("delete__message");
  delP1.innerText = "Вы действительно хотите удалить";

  //  <p class="delete__message">данного клиента?</p>
  const delP2 = document.createElement('p');
  delP2.classList.add("delete__message");
  delP2.innerText = "данного клиента?";

  // <button class="delete__button" type="submit">Удалить</button>
  const delDelete = document.createElement('button');
  delDelete.classList.add("delete__button");
  delDelete.setAttribute("type", "submit");
  delDelete.innerText = "Удалить";

  // <a class="delete__cancel" href="#">Отмена</a>
  const delA = document.createElement('a');
  delA.classList.add("delete__cancel");
  delA.setAttribute("href", "#");
  delA.innerText = "Отмена"

  container.append(modalElement);
  modalElement.append(divClient);
  divClient.append(delForm);
  delForm.append(delDiv);
  delDiv.append(delTitle);
  delDiv.append(delCancel);
  delDiv.append(delP1);
  delDiv.append(delP2);
  delDiv.append(delDelete);
  delDiv.append(delA);


  delCancel.addEventListener('click', (e) => {
    e.preventDefault();
    zindex.style.zIndex = "2";
    modalElement.remove();
  });


  delA.addEventListener('click', (e) => {
    e.preventDefault();
    zindex.style.zIndex = "2";
    modalElement.remove();
  });


  delDelete.addEventListener('click', (e) => {
    e.preventDefault();
    zindex.style.zIndex = "2";
    modalElement.remove();
    deleteOneClient(currentRow);
  });
  return;
}

/****************************************************************/

function deleteOneClient(currentRow) {
  let ID = currentRow.id.slice(6);

  const divId = document.getElementById("id" + ID);
  const divFio = document.getElementById("fio" + ID);
  const divDate = document.getElementById("date" + ID);
  const divUpdate = document.getElementById("update" + ID);
  const divCont = document.getElementById("cont" + ID);
  const divActiv1 = document.getElementById("activ1" + ID);
  const divActiv2 = document.getElementById("activ2" + ID);

  const IdRow = divId.innerText;
  // const IdRow = divId.style.value;

  divId.remove();
  divFio.remove();
  divDate.remove();
  divUpdate.remove();
  divCont.remove();
  divActiv1.remove();
  divActiv2.remove();

  deleteClient(IdRow);
}

/****************************************************************/
function modalChange(currentRow) {
  let response = {};
  response.contacts = [];

  let ID = currentRow.id.slice(6);

  const divId = document.getElementById("id" + ID);
  const divFio = document.getElementById("fio" + ID);

  let FIO = divFio.innerText.split(' ');

  response.name = FIO[1];
  response.lastName = FIO[0];
  response.surname = FIO[2];
  response.id = divId.innerText.trim();
  // response.id = divId.style.value;
  modalWindow(response, 1);
}

function heroInput() {
  let input = document.querySelector(".hero__input");

  input.addEventListener('input', async (e) => {
    e.preventDefault();
    let str = input.value;

    let delay300 = 300;

    setTimeout(async function () {
      let data = await searchData(str);
      takeRecordsNext(data);
    }, delay300);

  });
}


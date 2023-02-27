
document.addEventListener("DOMContentLoaded", function () {


  /**************************************************************************************/
  let heroClientButton = document.getElementById("heroClientButton");

  // setTimeout(heroInput,3000);

  heroInput();
  takeRecords();
  heroClientButton.onclick = function () {
    let response = {};
    response.name = "";
    response.lastName = "";
    response.surname = "";
    response.contacts = [];

    modalWindow(response, 0);

  }

});


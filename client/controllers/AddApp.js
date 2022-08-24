import { appToAdd } from '../services/applicationService.js'


document.addEventListener("DOMContentLoaded", () => {
  createOnConfirmClick()
  validate()
});


function validate() {

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('input', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}

function createOnConfirmClick() {
  document.getElementById('appForm').addEventListener('submit', (event) => {
    event.preventDefault()
    let checkValidity = true

    const newApp = {
      imageUrl: document.getElementById('imageUrl').value,
      name: document.getElementById('appName').value,
      price: document.getElementById('priceInput').value,
      desc: document.getElementById('appDescription').value,
      companyName: document.getElementById('companyName').value,
    };

    let name = newApp.name;
    let price = newApp.price;

    let namePattarn = /[A-Za-z0-9]{4,30}$/
    let pricePattarn = /^[0-9]*\.?[0-9]*$/

    if (!namePattarn.test(name) || !pricePattarn.test(price) || name === '' || price === '') {
      checkValidity = false;
    }
    let desc = newApp.desc;
    if (desc === '') {
      newApp.desc = 'this app does not have a description'
    }
    let companyName = newApp.companyName;
    if (companyName === '') {
      newApp.companyName = 'this app does not have a company'
    }

    let imageUrl = newApp.imageUrl;
    if (imageUrl === '') {
      newApp.imageUrl = 'help.png'
    }

    if (checkValidity) {
      appToAdd(newApp);
      window.location.href = "./mainPage.html";
      return false;
    }

  });
}








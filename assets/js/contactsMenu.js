document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector('.contacts-rectangle');
  let dropBtn = document.querySelector('.contacts-accordion');
  let selectionMenu = document.querySelector('.contacts-extra-rectangle');
  let selectedCity = document.querySelector('.contacts-rectangle-text');
  let cities = document.querySelectorAll('.text-hover');
  let cityTitle = document.querySelector('.city-card-city');
  let cityPhone = document.querySelector('.city-card-phone');
  let cityAddress = document.querySelector('.city-card-address');
  let cityCard = document.querySelector('.city-card');
  let cityTel = document.querySelector('.city-card-tel');
  const citiesTitles = ['Canandaigua, NY', 'New York City', 'Yonkers, NY', 'Sherrill, NY'];
  const citiesPhones = ['+1	585	393 0001', '+1	212	456 0002', '+1	914	678 0003', '+1	315	908 0004'];
  const citiesAddresses = ['151 Charlotte Street', '9 East 91st Street', '511 Warburton Ave', '14 WEST Noyes BLVD'];
  let citySelected = false;

  btn.addEventListener("click", () => {
    dropBtn.classList.toggle('active');
    selectionMenu.classList.replace('inactive', 'active') || selectionMenu.classList.replace('active', 'inactive');
    if (dropBtn.classList.contains('active')) {
      cityCard.classList.remove('active');
      btn.classList.replace('inactive', 'active');
      cities.forEach((city, i) => {
        city.addEventListener("click", () => {
          selectedCity.textContent = citiesTitles[i];
          cityTitle.textContent = citiesTitles[i];
          cityPhone.textContent = citiesPhones[i];
          cityAddress.textContent = citiesAddresses[i];
          cityTel.href = `tel:${citiesPhones[i]}`;
          citySelected = true;
          cityCard.classList.add('active');
        })
      })
    } else if (!citySelected) {
      btn.classList.replace('active', 'inactive');
    } else {
      cityCard.classList.add('active');
    }
  })
})
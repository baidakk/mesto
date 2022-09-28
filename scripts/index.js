const popUp = document.querySelector(".popup");
const profileEditButton = document.querySelector(".profile__edit-button");
const popUpClose = popUp.querySelector(".popup__close");
let formElement = document.querySelector(".popup__form");
let nameInput = formElement.querySelector("#name");
let jobInput = formElement.querySelector("#role");

function openPopup() {
  nameInput.value = document.querySelector(
    ".profile__heading-name"
  ).textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  popUp.classList.toggle("popup_opened");
}

function closePopup() {
  popUp.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  let profileHeading = document.querySelector(".profile__heading-name");
  let profileRole = document.querySelector(".profile__description");
  profileHeading.textContent = nameValue;
  profileRole.textContent = jobValue;
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);
profileEditButton.addEventListener("click", openPopup);
popUpClose.addEventListener("click", closePopup);

// Оставлю переключение лайков на будущий спринт :)

// const likeButton = document.querySelector('.cards__like-button');
// const likeToggle = function(){
//     likeButton.classList.toggle('cards__like-button_deactive');
// };

// likeButton.addEventListener('click', likeToggle);

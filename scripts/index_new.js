// Переменные для шаблона

const cardSection = document.querySelector(".cards__grid");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".cards__item");

// Переменные профиля

const profileName = document.querySelector(".profile__heading-name");
const profileDescription = document.querySelector(".profile__description");
const profileEditPopup = document.querySelector(".popup_profile-edit");
const inputName = profileEditPopup.querySelector(".popup__input-name");
const inputDescription = profileEditPopup.querySelector(
  ".popup__input-description"
);
const profileForm = profileEditPopup.querySelector(".popup__form");
const profileEditButton = document.querySelector(".profile__edit-button");

// Переменные добавления карточки

const addCardButton = document.querySelector(".profile__add-button");
const addPlacePopup = document.querySelector(".popup_add-place");
const addForm = addPlacePopup.querySelector(".popup__form-add");
const inputPlace = addPlacePopup.querySelector(".popup__input-place");
const inputPicture = addPlacePopup.querySelector(".popup__input-picture");
const addPlaceSubmit = addPlacePopup.querySelector(".popup__button");

// Переменные для открытия изображения в попапе

const popupImageItem = document.querySelector('.popup-image');
const popupImageView = popupImageItem.querySelector('.popup-image__picture');
const popupImageName = popupImageItem.querySelector('.popup-image__name');

// Переменная для крестика

const closeButton = document.querySelectorAll('.popup__close');

// Функции попапа редактирования профиля

function editProfilePopup() {
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
  openPopup(profileEditPopup);
};


function handleProfileFormSubmit(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closeEditProfilePopup();
  };


function closeEditProfilePopup() {
  closePopup(profileEditPopup);
};


// Добавление карточки

function openNewPlacePopup() {
  addForm.reset();
  openPopup(addPlacePopup);
}

function closeAddNewPlace() {
  closePopup(addPlacePopup);
}

function handleAddPlaceForm(e) {
  e.preventDefault();
  const newCard = {
    name: inputPlace.value,
    link: inputPicture.value,
  };
  renderCard(newCard, cardSection);
  closeAddNewPlace();
}

// Открытие и закрытие попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeButton.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// Действия по карточке: Лайки, удаления, открыть изображение

const handleLikeClick = (e) => {
  e.target.classList.toggle('cards__like-button_active');
};

const handleDeleteClick = (e) => {
  e.target.closest(".cards__item").remove();
};

const handleImageClick = (e) => {
  popupImageView.src = e.target.src;
  popupImageName.alt = e.target.alt;
  popupImageName.textContent = e.target.alt;
  openPopup(popupImageItem);
};

function closeImageViewPopup() {
  closePopup(popupImageItem);
}

// Создание элементов из шаблона

function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector(".cards__img");
  const cardDescription = card.querySelector(".cards__heading");
  const likeButton = card.querySelector(".cards__like-button");
  const deleteButton = card.querySelector(".cards__remove");
  likeButton.addEventListener("click", handleLikeClick);
  deleteButton.addEventListener("click", handleDeleteClick);
  cardImage.addEventListener('click', handleImageClick);
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardDescription.textContent = item.name;
  return card;
}

const renderCard = (item, wrapItem) => {
  const card = createCard(item);
  wrapItem.prepend(card);
};

// Заполнение элементов из массива

initialCards.forEach(function (item) {
  renderCard(item, cardSection);
});

// Слушатели на кнопки редактировать и добавить

profileForm.addEventListener("submit", handleProfileFormSubmit);
profileEditButton.addEventListener("click", editProfilePopup);

addCardButton.addEventListener("click", openNewPlacePopup);
addForm.addEventListener("submit", handleAddPlaceForm);

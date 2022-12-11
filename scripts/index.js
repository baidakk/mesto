// Получаем массив

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//Данные по пользователю

let innitialUserDate = {
  popup1: {
    name: "Жак-Ив Кусто",
    role: "Исследователь океана",
  },
  popup2: {
    name: "",
    link: "",
  },
};

//Берем элементы в переменные

const cardsSection = document.querySelector(".js-cards");
const popupTriggers = document.querySelectorAll(".js-popup-trigger");
const popupCloses = document.querySelectorAll(".js-popup__close");
const popupSubmitProfile = document.querySelector(
  ".js-popup__button[data-type='editProfile']"
);
const popupAddCard = document.querySelector(
  ".js-popup__button[data-type='createCard']"
);
const cardRemove = document.querySelector("js-cards__remove-button");

//Передаем данные из профиля в попап

popupTriggers.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("data-target");
    const targetPopup = document.querySelector(`#${targetId}`);
    fillForm(innitialUserDate[targetId], targetPopup);
    targetPopup.classList.add("popup_opened");
  });
});

//Закрытие попапа

popupCloses.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.closest(".js-popup").classList.remove("popup_opened");
  });
});


//Слушаем кнопки на странице

popupSubmitProfile.addEventListener("click", formSubmitHandler1);
popupAddCard.addEventListener("click", formSubmitHandler2);

cardsSection.addEventListener("click", (evt) => {
  //Выбираем клики по лайкам
  if (evt.target.closest(".js-cards__like-button")) {
    evt.target
      .closest(".js-cards__like-button")
      .classList.toggle("cards__like-button_active");
  }

  //Выбираем клики по корзинкам
  // if (evt.target.closest(".js-cards__remove-button")) {

  // }

  //Выбираем клики по картинкам
  // if (evt.target.closest('.js-')) {

  // }
});

//Как данные из профиля передаются в попап?

function formSubmitHandler1(evt) {
  evt.preventDefault();
  const targetPopup = evt.target.closest(".js-popup");
  const targetForm = evt.target.closest(".js-popup__form");

  innitialUserDate = {
    ...innitialUserDate,
    popup1: {
      name: targetForm.querySelector('input[name="name"]').value,
      role: targetForm.querySelector('input[name="role"]').value,
    },
  };

  const profileHeading = document.querySelector(".profile__heading-name");
  const profileDescription = document.querySelector(".profile__description");

  profileHeading.textContent = innitialUserDate.popup1.name;
  profileDescription.textContent = innitialUserDate.popup1.role;

  targetPopup.classList.remove("popup_opened");
}

//Как создается новая карточка?

function formSubmitHandler2(evt) {
  evt.preventDefault();
  const targetPopup = evt.target.closest(".js-popup");
  const targetTitle = targetPopup.querySelector('input[name="name"]').value;
  const targetLink = targetPopup.querySelector('input[name="link"]').value;
  const cardsSectionList = cardsSection.querySelector(".js-cards__grid");
  const cardTemplate = `<li class="cards__item">
  <img
    class="cards__img"
    src="${targetLink}"
    alt="${targetTitle}"
  />
  <div class="cards__info">
    <h2 class="cards__heading">${targetTitle}</h2>
    <button
      aria-label="Like"
      type="button"
      class="cards__like-button js-cards__like-button"
    ></button>
  </div>
</li>`;
  cardsSectionList.insertAdjacentHTML("afterbegin", cardTemplate);
  targetPopup.classList.remove("popup_opened");
}


// Как заполняется карточка?

function fillForm(innitialUserDate, popup) {
  for (const key in innitialUserDate) {
    popup.querySelector(`[name="${key}"]`).value = innitialUserDate[key];
  }
}

// Как создается галлерея из карточек?

function createGallery(initialCards) {
  const galleryGrid = cardsSection.querySelector(".js-cards__grid");
  let outDate = [];
  initialCards.forEach((item) => {
    const cardTemplate = `<li class="cards__item">
    <button 
    aria-label="remove"
    type="button"
    class="cards__remove js-cards__remove-button">
    </button>
    <img
      class="cards__img"
      src="${item.link}"
      alt="${item.name}"
    />
    <div class="cards__info">
      <h2 class="cards__heading">${item.name}</h2>
      <button
        aria-label="Like"
        type="button"
        class="cards__like-button js-cards__like-button"
      ></button>
    </div>
  </li>`;
    outDate.push(cardTemplate);
  });
  galleryGrid.insertAdjacentHTML("beforeend", outDate.join(""));
}

createGallery(initialCards);

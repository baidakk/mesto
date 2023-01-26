//Массив

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


//Дом узлы

const cardGallerie = document.querySelector(".cards__grid");

//Шаблоны

const cardTemplate = document.querySelector('#card-template').content.querySelector('.cards__item');


// Генерация карточки

const generateCard = () => {
    const newCard = cardTemplate.cloneNode(true);
    // const title = newCard.querySelector('.cards__heading');
    // title.textContent = dataCard.title;
    return newCard;
}

//Обработчик событий

const handleSubmitAddTodoForm = (event) => {
    event.preventDegault();
    renderCard({title: Input.value})
    input.value = '';
};

//Добавление карточки

const renderCard = (dataCard) => {
    cardContainer.prepend(generateCard(dataCard));
}

// Рендер всех карточек

form.addEventListener("submit", handleSubmitAddTodoForm);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});


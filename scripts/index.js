const profileEditButton = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const popUpClose = popUp.querySelector('.popup__close');

const popUpToggle = function(){
    popUp.classList.toggle('popup_opened');
    document.querySelector('.popup__form').querySelector('#name').value = '';
    document.querySelector('.popup__form').querySelector('#role').value = '';
};

profileEditButton.addEventListener('click', popUpToggle);
popUpClose.addEventListener('click', popUpToggle);


const likeButton = document.querySelector('.cards__like-button');

const likeToggle = function(){
    likeButton.classList.toggle('cards__like-button_deactive');
};

likeButton.addEventListener('click', likeToggle);



// Находим форму в DOM
let formElement = document.querySelector('.popup__form');    // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM

let nameInput = formElement.querySelector('#name');  // Воспользуйтесь инструментом .querySelector()

let jobInput = formElement.querySelector('#role'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;

    let profileHeading = document.querySelector('.profile__heading-name'); // Выберите элементы, куда должны быть вставлены значения полей
    let profileRole = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    profileHeading.textContent = nameValue;
    profileRole.textContent = jobValue;
    popUpToggle()
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
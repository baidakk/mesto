const profileEditButton = document.querySelector('.profile__edit-button');
const popUp = document.querySelector('.popup');
const popUpClose = popUp.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form'); 
let nameInput = formElement.querySelector('#name');  
let jobInput = formElement.querySelector('#role'); 

const popUpToggle = function(){
    popUp.classList.toggle('popup_opened');
    document.querySelector('.popup__form').querySelector('#name').value = '';
    document.querySelector('.popup__form').querySelector('#role').value = '';
};

function formSubmitHandler (evt) {
    evt.preventDefault();
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    let profileHeading = document.querySelector('.profile__heading-name');
    let profileRole = document.querySelector('.profile__description');
    profileHeading.textContent = nameValue;
    profileRole.textContent = jobValue;
    popUpToggle()
}

formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', popUpToggle);
popUpClose.addEventListener('click', popUpToggle);


// const likeButton = document.querySelector('.cards__like-button');

// const likeToggle = function(){
//     likeButton.classList.toggle('cards__like-button_deactive');
// };

// likeButton.addEventListener('click', likeToggle);
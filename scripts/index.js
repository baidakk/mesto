const ProfileEditButton = document.querySelector('.profile__edit-button');
const PopUp = document.querySelector('.popup');
const PopUpClose = PopUp.querySelector('.popup__close');

const PopUpToggle = function(){
    PopUp.classList.toggle('popup_opened');
};

ProfileEditButton.addEventListener('click', PopUpToggle);
PopUpClose.addEventListener('click', PopUpToggle);
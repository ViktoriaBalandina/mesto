// ButtonStorage
const profileEditButton = document.querySelector('button.profile__edit-button')
const allClosePopupButton = document.querySelectorAll('button.popup__close-btn')
const profileSavePopupButton = document.querySelector('button.popup__submit-btn')
const profileAddButton = document.querySelector('button.profile__add-button')

//Popup Storage
const profilePopupWindow = document.querySelector('div.popup__profile-window')
const overlayPopupWindow = document.querySelector('div.popup__overlay')

//input
const profileLineUsername = document.querySelector('h1.profile__name')
const profileLineDescription = document.querySelector('p.profile__text')
const profileInputName = document.querySelector('input#name')
const profileInputAbout = document.querySelector('input#about')

//function Storage
const openDialogWindow = (popup) => {
    overlayPopupWindow.classList.remove('is-closed')
    popup.classList.add('is-active')
}
const closeDialodWindow = (popup) => {
    overlayPopupWindow.classList.add('is-closed')
    popup.classList.remove('is-active')
}
const closeActiveDialogWindow = () => {
    overlayPopupWindow.classList.add('is-closed')
    document.querySelectorAll('.is-active').forEach((activeWindow) => activeWindow.classList.remove('is-active'))
}
profileEditButton.addEventListener('click', () => {
    openDialogWindow(profilePopupWindow)
    profileInputName.value = profileLineUsername.innerText
    profileInputAbout.value = profileLineDescription.innerText
})
profileSavePopupButton.addEventListener('click', () => {
    profileLineUsername.innerText = profileInputName.value
    profileLineDescription.innerText = profileInputAbout.value
    closeDialodWindow(profilePopupWindow)
})
allClosePopupButton.forEach((buttonCurrent) => {
    buttonCurrent.addEventListener('click', () => closeActiveDialogWindow() )
})

document.querySelectorAll('button').forEach((buttonCurrent) => {
    buttonCurrent.addEventListener('click', (evt) => evt.preventDefault() )
})

document.addEventListener('mousedown', (evt) => {
    const activePopupWindow = document.querySelector('.popup.is-active')
    if (activePopupWindow && !activePopupWindow.contains(evt.target))
        closeActiveDialogWindow();
})
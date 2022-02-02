let btn = document.getElementById('botao-info')
let popup = document.getElementById('popup')
let closeBtn = document.getElementById('close')
let openPopup = () => {
    popup.classList.add('popup-active');
}
btn.addEventListener('click', openPopup)
closeBtn.addEventListener('click', () =>{
    popup.classList.remove('popup-active')
})
const modalWindow = document.querySelector('.modal');
const buttonsModal = document.querySelectorAll('.button-play__wrap');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    });
});

modalWindow.addEventListener('click', () => {
    modalWindow.classList.remove('active');

    var stopAllYouTubeVideos = () => {
        var iframes = document.querySelectorAll('iframe');
        Array.prototype.forEach.call(iframes, iframe => {
            iframe.contentWindow.postMessage(JSON.stringify({
                event: 'command',
                func: 'stopVideo'
            }), '*');
        });
    }
    stopAllYouTubeVideos();
});

const burgerButton = document.querySelector('.burger__button');
const burgerBox = document.querySelector('.burger-box');
const burgerBoxClose = document.querySelector('.burger-box__close');

burgerButton.addEventListener('click', () => {
    burgerBox.classList.add('_active');
});

burgerBoxClose.addEventListener('click', () => {
    burgerBox.classList.remove('_active');
});
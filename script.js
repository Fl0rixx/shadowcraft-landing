const copyButtons = document.querySelectorAll('.copy-btn, .copy-ip-btn');
const copyToast = document.querySelector('.copy-toast');

copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText('play.shadowcraft.ru');

        copyToast.classList.add('show');

        setTimeout(() => {
            copyToast.classList.remove('show');
        }, 2000);
    });
});
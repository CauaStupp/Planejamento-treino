const iconesHeader = document.querySelectorAll('.plano-header');
const iconesBody = document.querySelectorAll('.plano-body p');



iconesHeader.forEach(item => {
    if (item.classList.contains('act')) {
        item.classList.add('active');
    }
});

iconesBody.forEach(item => {
    if (item.classList.contains('act')) {
        item.classList.add('active')
    }
});
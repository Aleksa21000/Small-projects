const items = document.querySelectorAll('.js-fn-item');
const ball = document.querySelector('.js-ball');

items.forEach(function(item, index) {
    item.addEventListener('click', function() {
        items.forEach(function(itm, i) {
            if(index === i) {
                itm.classList.add('active');
            } else {
                itm.classList.remove('active');
            }

            if(index === 0) {
                ball.style.left = "calc(25% - 87px)";
            } else if(index === 1) {
                ball.style.left = "calc(50% - 87px)";
            } else if(index === 2) {
                ball.style.left = "calc(75% - 87px)";
            } else if(index === 3) {
                ball.style.left = "calc(100% - 87px)";
            }
        });
    });
});

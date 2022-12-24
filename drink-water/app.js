const bigBowl = document.querySelector('.js-big-bowl'),
    remain = bigBowl.querySelector('.js-remain'),
    liters = bigBowl.querySelector('.js-liters'),
    percent = bigBowl.querySelector('.js-percent');

const smallBowls = document.querySelectorAll('.js-small-bowl');
const smallBowlFill =  100 / smallBowls.length;
const remainPart = 2 / smallBowls.length;

smallBowls.forEach((smallBowl, index) => {
    smallBowl.addEventListener('click', () => {
        smallBowl.classList.toggle('active');
        const activeSmallBowls = document.querySelectorAll('.js-small-bowl.active');

        activeSmallBowls.forEach((activeSmallBowl, i) => {
            const activeHeightFill = (i + 1) * smallBowlFill;
            percent.style.height = `${activeHeightFill}%`;
            percent.innerHTML = `${activeHeightFill}%`;

            const remainFill = 100 - activeHeightFill;
            remain.style.height = `${remainFill}%`;

            const remainNumber = 2 - (remainPart * (i + 1));
            liters.innerHTML = `${remainNumber}L`;
        });

        if(activeSmallBowls.length === 0) {
            percent.style.height = `0`;
            percent.innerHTML = `0%`;
            remain.style.height = `100%`;
            liters.innerHTML = `2L`;
        }

        if(activeSmallBowls.length === smallBowls.length) {
            const resetBtn = document.createElement('button');
            resetBtn.classList.add('drink-water_big-bowl-reset');
            resetBtn.innerHTML = "Restart";
            percent.appendChild(resetBtn);

            resetBtn.addEventListener('click', () => {
                percent.style.height = `0`;
                percent.innerHTML = `0%`;
                remain.style.height = `100%`;
                liters.innerHTML = `2L`;

                activeSmallBowls.forEach((activeSmallBowl) => {
                    activeSmallBowl.classList.remove('active');
                });
            });
        }
    });
});
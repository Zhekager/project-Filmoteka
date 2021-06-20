const cardFilm = document.querySelector('.js-card-film'),
    arrowLeft = document.querySelector('.arrow-left'),
    arrowRight = document.querySelector('.arrow-right'),
    paginationEl = document.querySelector('#pagination');

let currentPage = 1;
let pages = 20;
let pageTotal;
let pagesSeach = 7;

function resetCurrentPage() {
    currentPage = 1;
}

export function renderPagination(totalPages, cards, fn, searchQuery) {
    paginationEl.innerHTML = '';
    resetCurrentPage();
    arrowLeft.removeEventListener('click', onClickArrowLeft);
    arrowRight.removeEventListener('click', onClickArrowRight);

    function createPagination(items, wrapper, rowPages) {
        wrapper.innerHTML = '';

        pageTotal = totalPages;
        let maxLeftPage = currentPage - Math.floor(pagesSeach / 2);
        let maxRightPage = currentPage + Math.floor(pagesSeach / 2);

        if (maxLeftPage < 1) {
            maxLeftPage = 1;
            maxRightPage = pagesSeach;
        }

        if (maxRightPage > totalPages) {
            maxLeftPage = totalPages - (pagesSeach - 1);

            if (maxLeftPage < 1) {
                maxLeftPage = 1;
            }
            maxRightPage = totalPages;
        }

        for (let i = 1; i <= totalPages; i++) {
            if (maxLeftPage !== 1 && i == 1) {
                let btn = paginationButton(i, items);
                wrapper.appendChild(btn);
            }

            if (maxRightPage !== totalPages && i == totalPages) {
                let btn = paginationButton(i, items);
                wrapper.appendChild(btn);
            }

            if (i >= maxLeftPage && i <= maxRightPage) {
                let btn = paginationButton(i, items);
                wrapper.appendChild(btn);
            }
            if (
                totalPages >= 6 &&
                i == 1 &&
                currentPage !== 1 &&
                currentPage !== 2 &&
                currentPage !== 3
            ) {
                const threeDotsEl = addDotsContainer();
                wrapper.insertBefore(threeDotsEl, wrapper[wrapper.length - 2]);
            }

            if (
                pageCount >= 7 &&
                i == pageCount - 1 &&
                currentPage !== pageCount &&
                currentPage !== pageCount - 2 &&
                currentPage !== pageCount - 1
            ) {
                const threeDotsEl = addDotsContainer();
                wrapper.insertBefore(threeDotsEl, wrapper[1]);
            }
        }
    }

    function addDotsContainer() {
        const dots = document.createElement('div');
        dots.classList.add('dots');
        dots.innerText = '...';
        return dots;
    }

    function paginationButton(page, items) {
        let button = document.createElement('button');
        button.innerText = page;

        if (currentPage == page) {
            button.classList.add('active');
        }

        button.addEventListener('click', onClickButtonPgn)

        return button;
    }

    function onClickButtonPgn() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        currentPage = page;
        fn(cardFilm, currentPage, searchQuery);

        let currentBtn = document.querySelector('.pages-numbers button.active');
        currentBtn.classList.remove('active');

        button.classList.add('active');
        createPagination(cardFilm, paginationEl, pages);
        hideExtremeButtons(totalPages);
    }

    function onClickArrowLeft() {
        if (currentPage > 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            currentPage--;
            createPagination(cardFilm, paginationEl, pages);
            fn(cardFilm, currentPage, searchQuery);
        }

        disableArrowBtn(totalPages);
        hideExtremeButtons(totalPages);
    }

    function onClickArrowRight() {
        if (currentPage < totalPages) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            currentPage++;
            createPagination(cardFilm, paginationEl, pages);
            fn(cardFilm, currentPage, searchQuery);
        }
        disableArrowBtn(totalPages);
        hideExtremeButtons(totalPages);
    }

    createPagination(cardFilm, paginationEl, pages);
    arrowLeft.onclick = onClickArrowLeft;
    arrowRight.onclick = onClickArrowRight;

    hideExtremeButtons(totalPages);
    disableArrowBtn(totalPages);
}

function disableArrowBtn(totalPages) {
    if (currentPage === 1) {
        arrowLeft.classList.add('disabled-arrow');
    } else {
        arrowLeft.classList.remove('disabled-arrow');
    }

    if (currentPage === totalPages) {
        arrowRight.classList.add('disabled-arrow');
    } else {
        arrowRight.classList.remove('disabled-arrow');
    }
}
'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const advImages = document.querySelectorAll('.promo__adv img');
const genreMovie = document.querySelector('.promo__genre');
const bgMovie = document.querySelector('.promo__bg');
const watchedList = document.querySelector('.promo__interactive-list');

advImages.forEach(adv => {
    adv.remove();
});

genreMovie.textContent = 'Драма';

bgMovie.style.backgroundImage = 'url(../img/bg.jpg)';



// Second part

const addForm = document.querySelector('.add');
const addInput = addForm.querySelector('.adding__input');
const addBtn = addForm.querySelector('button');
const addFavor = addForm.querySelector('[data-favourite]');


function deleteMovie() {
    let deleteMovieBtn = document.querySelectorAll('.delete');
    deleteMovieBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            movieDB.movies.splice(i,1);
            item.parentElement.remove();
            buildWatchedMovies();
        })
    });
};

function renderWatchedMovies() {
    movieDB.movies.forEach((item, i) => {
        if (item.length >= 21) {
            item = item.slice(0,21) + '...';
        };
        watchedList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${item}
                <div class="delete"></div>
            </li>
        `;
    });
}

function buildWatchedMovies() {
    watchedList.innerHTML = '';
    movieDB.movies.sort();
    renderWatchedMovies();
    deleteMovie();
}

buildWatchedMovies();




addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!addInput.value == '') {
        movieDB.movies.push(addInput.value);
        buildWatchedMovies();
        addFavor.checked ? console.log('Добавляем любимый фильм'): console.log('Добавляем просто фильм');;
        e.target.reset();
        console.log(movieDB.movies);
    } else {
        console.log("error");
    }
})



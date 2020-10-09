
// // alert("hello");

// // const result = confirm("Тебе есть 18?");
// // console.log(result);

// // const result = prompt("Сколько вчера выпил?", "");
// // console.log(result);

// const answers = [];

// // answers[0] = prompt("Как дела?", "");
// // answers[1] = prompt("Как с учебой?", "");
// // answers[2] = prompt("Что вечером делаешь?", "");

// console.log(typeof(answers));




// const user = 'Sergey';

// alert(`Hello, ${user}`);
// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false




// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?');
    
        if ( a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            console.log('nice')
            personalMovieDB.movies[a] = b;
        } else {
            console.log('Error');
            i--;
        }
    
    }
}

rememberMyFilms();




function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка!');
    }
}

detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);

    }
}

showMyDB(personalMovieDB.privat);

let data = [1, 2, 3];



function writeYourGenres() {
   for(let i = 1; i < 3; i++) {
    const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
    personalMovieDB.genres[i - 1] = a;

   }
} 
writeYourGenres();








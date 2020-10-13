'use strict';






const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
    
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++) {
         let a = prompt(`Ваш любимый жанр под номером ${i}`, '');
         
            if ( a != null || a != '') {
                console.log('nice')
                personalMovieDB.genres[i - 1] = a; 
            } else {
                console.log('Error');
                i--;
                } 
        }

        
       personalMovieDB.genres.forEach(function(item, i) {
             console.log(`Любимый жанр #${i+1} - это ${item}`);
        });


     }
    // toggleVisibleMyDB: function() {
    // if (personalMovieDB.privat) {
    //     personalMovieDB.privat = false;
    // } else {
    //     personalMovieDB.privat = true;
    // }
// }
    

};


































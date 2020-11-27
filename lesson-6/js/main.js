let isNumber = function(n){
    return !isNaN(parseFloat(n));
};

let randomNum = Math.ceil(Math.random() * 100);

console.log(randomNum);

function watch(random) {
    let numUser = prompt('Угадай число от 1 до 100');

    if (numUser == random) {
        alert(`Поздравляю, Вы угадали!!!`);
    } else if (!numUser) {
        alert('Игра окончена');
    } else if (isNumber(random) == false) {
        alert('Введи число!');
        watch(random);
    } else if (numUser < random) {
        alert('Загаданное число больше');
        watch(random);
    } else if (numUser > random) {
        alert('Загаданное число меньше');
        watch(random);
    } 
}

watch(randomNum);
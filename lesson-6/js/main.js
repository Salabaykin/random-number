function isNumber(num) {
    return !isNaN(parseFloat(num));
}

const game = function() {

    const randomNum = Math.ceil(Math.random() * 100);

    console.log(randomNum);

    function repeat() {

        let numUser = prompt('Угадай число от 1 до 100');

        if (isNumber(numUser)) {
            if (numUser < randomNum) {
                alert('Загаданное число больше');
                repeat();
            } else if (numUser > randomNum) {
                alert('Загаданное число меньше');
                repeat();
            } else {
                alert(`Поздравляю, Вы угадали!!!`);
            }
        } else {
            if (numUser === null) {
                alert('Игра окончена');
            } else {
                alert('Введи число!');
                repeat();
            }
        }
    }

    return repeat();

}

game();
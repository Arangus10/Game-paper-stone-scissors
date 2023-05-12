/**
 * getMoveName 
 */
function getMoveName(argMoveId){
    console.log('wywołano funkcję getMoveName z argumentem ' + argMoveId);
    if(argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id: ' + argMoveId)
    }
}

/**
 * displayResult
 */
function displayResult(argPlayerMove, argComputerMove){
    console.log('wywolano funkcję displayResut z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage ('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else {
        printMessage('Przegrywasz!');
    }
    printMessage('Zagrałem ' + argComputerMove + ' a Ty zagrałeś ' + argPlayerMove);
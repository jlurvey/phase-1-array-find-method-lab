// code your solution here
function superbowlWin(array) {
    const win = array.find(function(game) {
        return game.result === "W";
    });

    if (win) {
        return win.year;
    }
};
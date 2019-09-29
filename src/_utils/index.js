export function populateInsurance(booleanArray) {

    let txt = "";
    let count = 1;
    if(booleanArray[0]){
        txt = txt + count.toString() + ". Basic Health " + "\n";
        count++;
    }
    if(booleanArray[1]){
        txt = "\n" + txt + count.toString() + ". Critical Illness " + "\n";
        count++;
    }
    if(booleanArray[2]){
        txt = "\n" +txt + count.toString() + ". Housing Coverage " + "\n";
        count++;
    }
    if(booleanArray[3]){
        txt ="\n" + txt + count.toString() + ". Travel Coverage" + "\n";
    }
    return txt


}
export function calculateNetworth(gameControls){

    return gameControls.stocks.value + gameControls.bonds.value + gameControls.savings.value;

}
export function roundNumber(number){
    return Math.round(number * 100) / 100
}
export function checkLose(gameControls){
    if(gameControls.savings.value <= 0 || isNaN(gameControls.savings.value)){
        return true;
    }else{
        return false
    }
}
export function roundToZero(number){
    if(isNaN(number)){
        return 0
    }else{
        return number
    }
}

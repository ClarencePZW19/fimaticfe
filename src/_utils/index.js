export function populateInsurance(booleanArray) {

    let txt = "";
    let count = 1;
    if(booleanArray[0]){
        txt = txt + count.toString() + ". Basic Health Insurance " + "\n";
        count++;
    }
    if(booleanArray[1]){
        txt = "\n" + txt + count.toString() + ". Critical Illness Insurance" + "\n";
        count++;
    }
    if(booleanArray[2]){
        txt = "\n" +txt + count.toString() + ". Housing Insurance " + "\n";
        count++;
    }
    if(booleanArray[3]){
        txt ="\n" + txt + count.toString() + ". Travel Insurance" + "\n";
    }
    return txt

    // <Button onClick={() => this.handleChange("insurance", 2)}>Buy Housing Insurance for
    //     $1500</Button>
    //     <Button onClick={() => this.handleChange("insurance", 3)}>Buy Travel Insurance for $500</Button>
    //     <Button onClick={() => this.handleChange("insurance", 1)}>Buy Critical Illness Insurance
    // $2000</Button>
    // <Button onClick={() => this.handleChange("insurance", 0)}>Buy Basic Health Insurance for
    //     $1000</Button>
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

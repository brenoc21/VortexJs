/*static int UltimatePlayCalculator(int T, int Q, int X){
    int sum = 0;
    int C = 0;
    for(int i = Q-1; i > (Q-X); i--){
        C+= i - (Q-X);
    }
    sum = (T*(Q-X)) + C;
    return sum;
}*/
function UltimatePlayCalculator(){
    let T = parseInt(document.getElementById("valueT").value)
    let Q = parseInt(document.getElementById("valueQ").value)
    let X = parseInt(document.getElementById("valueX").value)
    let C = 0

    for(let i = Q-1; i > (Q-X); i--){
        C+= i - (Q-X)
    }
     let sum = (T*(Q-X)) + C
    document.getElementById("sum").innerHTML = sum
}

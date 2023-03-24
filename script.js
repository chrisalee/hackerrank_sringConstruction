/*
 * Complete the 'stringConstruction' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function stringConstruction(s) {
    let cost = 0;
    for(let i = 0; i < s.length; i++) {
        if(!s.slice(0, i).includes(s[i])) {
            cost ++;
        }
    }
    console.log('cost: ', cost)
    return cost;
}


*****************************************
function stringConstruction(s) {
   return new Set(s).size;
}

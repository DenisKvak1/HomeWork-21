
let temperatures = [-48, -46, 48, 27, -20, -35, 43, 4, 9, 10, 41, -46, -4, 0, -38, -49, 25, -46, 48, -23, -25, -22, 12, 38, 19, 20, 26, 4, 19, 23, 26, 41, 4, -13, -9, -11, -7, 38, 27, 41, 14, -35, -38, -44, -44, -22, 24, 29, -32, 41, 7, -25, 3, 27, 45, 10, 48, 8, -34, -49, 17, -16, 41, -11, -50, -6, -34, 20, 14, -18, 39, -28, -33, -27, 48, 40, -37, -44, 0, 46, 36, -34, -50, 8, -3, 26, 40, 10, -36, 24];

function FrozenDayFunc(temperatures){
    let FrozenDay=0;
    for(let i=0;i < temperatures.length; i++){
        if(temperatures[i]<0){
            FrozenDay++;
        }
    }
    return FrozenDay;
}
function QuantityFrozenDayFunc(temperatures){
    let maxFrozenDay=0
    let currentFrozenDay=0
    for(let i=0;i < temperatures.length; i++){
        if(temperatures[i]<0){
            currentFrozenDay++;
        }
        else{
            if(currentFrozenDay>maxFrozenDay){
                maxFrozenDay=currentFrozenDay;
            }
        currentFrozenDay = 0;    
        }
    }
    if (currentFrozenDay > maxFrozenDay) {
        maxFrozenDay = currentFrozenDay;
    }
    return maxFrozenDay;
}
console.log(`Количество морозных дней: ${FrozenDayFunc(temperatures)}`)
console.log(`Максимальное количество морозных дней подряд: ${QuantityFrozenDayFunc(temperatures)}`)
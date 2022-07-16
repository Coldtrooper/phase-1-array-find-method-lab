// code your solution here
function superbowlWin(record){
    let found = record.find(champion => champion.result === "W")
//    if (!!found){
    // return found.year}
   return !!found ? found.year : undefined
}

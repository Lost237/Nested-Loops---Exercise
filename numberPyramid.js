function numberPyramid(input) {
    let n =Number(input[0]);
    let current = 1;
    let printLine = "";
    let isBiger = false;
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= r; c++) {
           
            if(current > n){
                isBiger = true;
                break;;
            }
            printLine += current + " ";
            current++;
        }
        console.log(printLine);
        printLine = "";
        if(isBiger){
            break;
        }
        
    }
}
numberPyramid(["12"])
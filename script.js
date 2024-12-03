document.addEventListener('DOMContentLoaded', function() {
    let number = document.getElementById("number");
    let convertBtn = document.getElementById("convert-btn");
    let output = document.getElementById("output");


    const romanNumerals = [
        {"Roman":"M", "Arabic": 1000},
        {"Roman":"CM", "Arabic": 900},
        {"Roman":"D", "Arabic": 500},
        {"Roman":"CD", "Arabic": 400},
        {"Roman":"C", "Arabic": 100},
        {"Roman":"XC", "Arabic": 90},
        {"Roman":"L", "Arabic": 50},
        {"Roman":"XL", "Arabic": 40},
        {"Roman":"X", "Arabic": 10},
        {"Roman":"IX", "Arabic": 9},
        {"Roman":"V", "Arabic": 5},
        {"Roman":"IV", "Arabic": 4},
        {"Roman":"I", "Arabic": 1},
    ]
    

    
    function isEmpty() {
        return number.value.trim() === "";
    }

    function convert(){
        let num = ""
        let temp = number.value

        for(let i = 0; i < romanNumerals.length; i++){
            while(temp >= romanNumerals[i].Arabic){
                num += romanNumerals[i].Roman
                temp -= romanNumerals[i].Arabic
            }
        }
        return num;
    }

    function click() {
        if (isEmpty()) {
            output.innerHTML = "Please enter a valid number";
        }else if(number.value < 0){
            output.innerHTML = "Please enter a number greater than or equal to 1"
        } else if(number.value > 4000){
            output.innerHTML = "Please enter a number less than or equal to 3999"
        }
        else{
            output.innerHTML = convert();
        }
    }

    convertBtn.addEventListener("click", click);
});
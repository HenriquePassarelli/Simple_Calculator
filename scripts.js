const Color = {
    Theme() {

        document.querySelector('body').classList.add('active');

        document.querySelector('.dark').value = "Light Mode";

        document.querySelector('.dark').setAttribute('onclick', "Color.Themeback()")

    },

    Themeback() {

        document.querySelector('body').classList.remove('active');

        document.querySelector('.dark').value = "Dark Mode";

        document.querySelector('.dark').setAttribute('onclick', "Color.Theme()")

    }

}

function clearScreen() {
    document.getElementById("result").value = "";
    num1 = "";
    num2 = "";
    operator = "";
}

var operator = "";
var num1 = "";
var num2 = "";

function Numb(_value) {

    // validate operation
    if (_value == "=") {
        if ((num1 != "") & (num2 != "")) {
            operation();
        }
    }
    else
    {   
        // check operation
        if ((_value == "+") || (_value == "-") || (_value == "*") || (_value == "/")) {
            if ((num1 != "") && (num2 == "")) {
                operator = _value;
                document.getElementById('result').value = num1 + operator;
            }
            else if ((num1 != "") && (num2 != "")) {
                operate();
                operator = _value;
                document.getElementById('result').value = num1 + operator;
            }
        }

        else 
        {
            //increasing the number
            if (operator == "") {
                num1 = num1 + _value;
                document.getElementById('result').value = num1;
                console.log(num1)
            }
            else {
                num2 = num2 + _value;
                document.getElementById('result').value = num1 + operator + num2;
            }
        }
    }
}

function operation() {

    switch (operator) {
        case "+":
            num1 = String(Number(num1) + Number(num2));
            document.getElementById("result").value = num1;
            num2 = "";
            operator = "";
            break;
        case "-":
            num1 = String(Number(num1) - Number(num2));
            document.getElementById("result").value = num1;
            num2 = "";
            operator = "";
            break;
        case "*":
            num1 = String(Number(num1) * Number(num2));
            document.getElementById("result").value = num1;
            num2 = "";
            operator = "";
            break;
        case "/":
            //check denominator
            if (num2 == 0) {
                alert("denominator cannot be zero");
                num1 = "";
                num2 = "";
                operator = "";
                document.getElementById("result").value = "";
                break;
            }
            else {
                num1 = String(Number(num1) / Number(num2));
                document.getElementById("result").value = num1;
                num2 = "";
                operator = "";
                break;
            }

        default:
            break;
    }
}

/** create calculator object */
var calculator = {
    "first_num": "",
    "operator": "",
    "second_num": ""
}

function findLastCount() {
    let lastCount = null;

    switch (calculator.operator) {

        // proceed of Division function...
        case "/":
            var num1 = parseFloat(calculator.first_num);
            var num2 = parseFloat(calculator.second_num);
            lastCount = num1 / num2;
            $('#display_output').val(lastCount);
            break;
        // proceed of Multiplication function...
        case "*":
            var num1 = parseFloat(calculator.first_num);
            var num2 = parseFloat(calculator.second_num);
            lastCount = num1 * num2;
            $('#display_output').val(lastCount);
            break;
        // proceed of Subtraction function...
        case "-":
            var num1 = parseFloat(calculator.first_num);
            var num2 = parseFloat(calculator.second_num);
            lastCount = num1 - num2;
            $('#display_output').val(lastCount);
            break;
        // proceed of Addition function...
        case "+":
            var num1 = parseFloat(calculator.first_num);
            var num2 = parseFloat(calculator.second_num);
            lastCount = num1 + num2;
            $('#display_output').val(lastCount);
            break;
    }
}

/** Clear Button function */
$('#btnClear').click(function () {
    /*alert("clear");*/
    $('#display_output').val('');

});

/** Division Button function */
$('#btnDivision').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "/"

    $('#display_output').val('');

});

/** Multiplication Button function */
$('#btnMultiplication').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "*"

    $('#display_output').val('');
});

/** Subtraction Button function */
$('#btnSubtraction').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "-"

    $('#display_output').val('');
});

/** Addition Button function */
$('#btnAddition').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "+"

    $('#display_output').val('');
});

/** Button (1) function */
$('#btn1').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('1');
    } else {
        $('#display_output').val(display_output + '1');
    }
});

/** Button (2) function */
$('#btn2').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('2');
    } else {
        $('#display_output').val(display_output + '2');
    }
});

/** Button (3) function */
$('#btn3').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('3');
    } else {
        $('#display_output').val(display_output + '3');
    }
});

/** Button (4) function */
$('#btn4').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('4');
    } else {
        $('#display_output').val(display_output + '4');
    }
});

/** Button (5) function */
$('#btn5').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('5');
    } else {
        $('#display_output').val(display_output + '5');
    }
});

/** Button (6) function */
$('#btn6').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('6');
    } else {
        $('#display_output').val(display_output + '6');
    }
});

/** Button (7) function */
$('#btn7').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('7');
    } else {
        $('#display_output').val(display_output + '7');
    }
});

/** Button (8) function */
$('#btn8').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('8');
    } else {
        $('#display_output').val(display_output + '8');
    }
});

/** Button (9) function */
$('#btn9').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('9');
    } else {
        $('#display_output').val(display_output + '9');
    }
});

/** Button (00) function */
$('#btn00').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {
        $('#display_output').val('00');
    } else {
        $('#display_output').val(display_output + '00');
    }
});

/** Button (0) function */
$('#btn0').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '') {

    } else {
        $('#display_output').val(display_output + '0');
    }
});

/** Button (. Dot) function */
$('#btnDot').click(function () {
    let display_output = $('#display_output').val();

    $('#display_output').val(display_output + '.');
});

/** Equal Button functionalities */
$("#btnEqual").click(function () {
    let display_output = $('#display_output').val();

    calculator.second_num = display_output;

    // passed the user select first number to below method..
    findLastCount();
});


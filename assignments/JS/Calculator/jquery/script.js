
/** create calculator object */
var calculator = {
    "first_num": "",
    "operator": "",
    "second_num": ""
}

/** Clear Button function */
$('#btnClear').click(function () {
    /*alert("clear");*/
    $('#display_output').val('0');

});

/** Division Button function */
$('#btnDivision').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "/"

    $('#display_output').val('0');

});

/** Multiplication Button function */
$('#btnMultiplication').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num=display_output;
    calculator.operator="*"

    $('#display_output').val('0');
});

/** Subtraction Button function */
$('#btnSubtraction').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num=display_output;
    calculator.operator="-"

    $('#display_output').val('0');
});

/** Addition Button function */
$('#btnAddition').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num=display_output;
    calculator.operator="+"

    $('#display_output').val('0');
});

/** Button (1) function */
$('#btn1').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '0') {
        $('#display_output').val('1');
    } else {
        $('#display_output').val(display_output+'1');
    }
});

/** Button (2) function */
$('#btn2').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '0') {
        $('#display_output').val('2');
    } else {
        $('#display_output').val(display_output+'2');
    }
});

/** Button (3) function */
$('#btn3').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '0') {
        $('#display_output').val('3');
    } else {
        $('#display_output').val(display_output+'3');
    }
});

/** Button (4) function */
$('#btn4').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '0') {
        $('#display_output').val('4');
    } else {
        $('#display_output').val(display_output+'4');
    }
});

/** Button (5) function */
$('#btn5').click(function () {
    let display_output = $('#display_output').val();

    if (display_output === '0') {
        $('#display_output').val('5');
    } else {
        $('#display_output').val(display_output+'5');
    }
});




/** Equal Button functionalities */
$("#btnEqual").click(function () {
    let display_output = $('#display_output').val();

    calculator.second_num = display_output;

    // passed the user select first number to below method..
    findLastCount();
});


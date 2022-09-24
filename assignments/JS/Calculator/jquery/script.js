
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
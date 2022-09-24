
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

$('#btnDivision').click(function () {
    let display_output = $('#display_output').val();

    calculator.first_num = display_output;
    calculator.operator = "/"

    $('#display_output').val('0');

});
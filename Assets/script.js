var dT = moment();
$("#dateTime").text(dT.format("dddd, MMMM Do YYYY"));

var textInput = document.querySelectorAll("#Input");
var saveBtn = document.querySelectorAll("#keep-btn");

 
function textTable() { 
    for (var i = 0; i < 19; i++){
        $('#keep-btn' + i).click(savedData); 
    }

};
textTable()

function savedData(event) {
    var i = event.target.id.replace(/[^0-9]/g, '');
    var saveText = $('#Input' + i).val();
    console.log(saveText);
 localStorage.setItem('' + i, saveText);
}

function lastInput() { 
    for ( var i = 0; i < 19; i++){
        if (localStorage.getItem(i.toString()) !== null ){
            $('#Input' + i).val( localStorage.getItem(i.toString()));
        }; 
    };
};
lastInput();

function colorBorder() {
    var hourCurrent = moment().format('HH');
    for ( var i = 5; i < 24; i++){
        if (i < hourCurrent)
        $('#Input' + (i - 5)).css('background-color', 'grey');{
            if (i == hourCurrent)
            $('#Input' + (i - 5)).css('background-color', 'red');{
                if (i > hourCurrent)
                $('#Input' + (i - 5)).css('background-color', 'green');
            };
        };
    };
};
colorBorder();


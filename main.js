var player1 = "X";
var gameOver = false;

function cellClicked() {
    if (!gameOver) {
       $(event.target).css("background-color", "silver");
       $(event.target).off("mouseenter");
       $(event.target).off("mouseleave"); 

        if (player1 === "X") {
            player1 = "O";
            $(event.target).text("X");
        } else {
            player1 = "X";
            $(event.target).text("O");
        }
        winner()
    }
}
$("td").on("click", cellClicked);

function silver(event) {
    $(event.target).css("background-color", "silver");
}

function trans() {
    $(event.target).css("background-color", "silver");
    $("td").off("mouseenter");
    $("td").off("click");
    $("td").off("mouseleave"); 
}

function white(event) {
    $(event.target).css("background-color", "white");

}
$(".cell").on("mouseenter", silver);
$(".cell").on("mouseleave", white);
$(".cell").on("click", trans);


function winner() {
    
    var cell0 = $('#0').text()
    var cell1 = $('#1').text()
    var cell2 = $('#2').text()
    var cell3 = $('#3').text()
    var cell4 = $('#4').text()
    var cell5 = $('#5').text()
    var cell6 = $('#6').text()
    var cell7 = $('#7').text()
    var cell8 = $('#8').text()

   
    if (cell0 === cell1 && cell0 === cell2 && cell0 !== '') {
        $('#message').text('Winner is ' + cell0);
        gameOver = true;
        trans();

        
    } else if (cell3 === cell4 && cell3 === cell5 && cell3 !== '') {
        $('#message').text('Winner is ' + cell3);
        gameOver = true;
        trans();

          
    } else if (cell6 === cell7 && cell6 === cell8 && cell6 !== '') {
        $('#message').text('Winner is ' + cell6);
        gameOver = true;
        trans();

        
    } else if (cell0 === cell3 && cell0 === cell6 && cell0 !== '') {
        $('#message').text('Winner is ' + cell0);
        gameOver = true;
        trans();

       
    } else if (cell1 === cell4 && cell1 === cell7 && cell1 !== '') {
        $('#message').text('Winner is ' + cell1);
        gameOver = true;
        trans();

       
    } else if (cell2 === cell5 && cell2 === cell8 && cell2 !== '') {
        $('#message').text('Winner is ' + cell2);
        gameOver = true;
        trans();
       
    } else if (cell0 === cell4 && cell0 === cell8 && cell0 !== '') {
        $('#message').text('Winner is ' + cell0);
        gameOver = true;
        trans();
       
    } else if (cell2 === cell4 && cell2 === cell6 && cell2 !== '') {
        $('#message').text('Winner is ' + cell2);
        gameOver = true;
        trans();
    } else if (
        cell0 !== "" &&
        cell1 !== "" &&
        cell2 !== "" &&
        cell3 !== "" &&
        cell4 !== "" &&
        cell5 !== "" &&
        cell6 !== "" &&
        cell7 !== "" &&
        cell8 !== "") {
        $('#message').text("It's a tie");
        gameOver = true;
       // trans();
    }
}
$('button').click(function () {
    location.reload();
}); 
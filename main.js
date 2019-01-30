//Tic Tac Toe Game
//biult by Nahed Hawsawi

//declear varible for x and O
// console.log('hi')
var one=true;
//start game by create click function for click .
function cellClicked(event){ 
    if( $(event.target).text()==="" && gameOver === false){
        if (one===true ){
            $(event.target).text('X');
            one=false;   
        } else if(one===false){
            $(event.target).text('O');
            one=true;
        }
        findWinner()
    }
    /*
  $('#x').text(xWinner);
  $('#o').text(oWinner);
  */
}
$(".cell").on("click",cellClicked)


//To rest the game 
function reset(div){
   one = true;
   $('.cell').empty()
}
$('#remove').on("click",reset)


var xWinner =0;
var oWinner =0;
var gameOver = false;
//show winner 

function findWinner(){
    var cell0 = $('#0').text()
    var cell1 = $('#1').text()
    var cell2 = $('#2').text()
    var cell3 = $('#3').text()
    var cell4 = $('#4').text()
    var cell5 =$('#5').text()
    var cell6 =$('#6').text()
    var cell7 =$('#7').text()
    var cell8 =$('#8').text()



    // top row win
    if (cell0 === cell1 && cell0 === cell2 && cell0 !== ''&& true){
       
        /*if (cell0==='X'){
            xWinner++
        }
        else if(cell0==='O') {
           oWinner++ 
        }
        */
        
    }

    // middle row win
    else if (cell3 === cell4 && cell3===cell5 && cell3 !== '' && true){
        alert('Winner is' + cell3)
    }
    // bottom row win
    else if (cell6 === cell7 && cell6===cell8 && cell6 !== ''&& false){
        alert('Winner is' + cell6)   
    }
    // cross1 win
    else if (cell0 === cell4 && cell0===cell8 && cell0 !== '' && false){
        alert('Winner is' + cell0)
    }
    // cross2 win
    else if (cell2 === cell4 && cell2===cell6 && cell2 !== ''&& false){
        alert('Winner is' + cell2)
    }
    // left colm
    else if (cell0 === cell3 && cell0===cell6 && cell0 !== '' && false){
        alert('Winner is' + cell0)
    }
    //middl colm
    else if (cell1 === cell4 && cell1===cell7 && cell1 !== '' && false){
            alert('Winner is' + cell1)
    }
    //rigth colm
    else if(cell2 === cell5 && cell2===cell8 && cell2 !=='' && false){
            alert("Winner is" + cell2)
    }
}



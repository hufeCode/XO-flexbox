var board = [2, 2, 2, 2, 2, 2, 2, 2, 2];
var i = -1;


//freezeBoard freezes the board by disabling the buttons

const freezeBoard = () => {
	document.getElementById("btn0").disabled = true;
	document.getElementById("btn1").disabled = true;
	document.getElementById("btn2").disabled = true;
	document.getElementById("btn3").disabled = true;
	document.getElementById("btn4").disabled = true;
	document.getElementById("btn5").disabled = true;
	document.getElementById("btn6").disabled = true;
	document.getElementById("btn7").disabled = true;
	document.getElementById("btn8").disabled = true;
}


// resetBoard will enable all buttons on the board and will reset the text displayed on each button to ""

const resetBoard = () => {
		
	document.getElementById("btn0").disabled = false;
	document.getElementById("btn0").value = "";
	
	document.getElementById("btn1").disabled = false;
	document.getElementById("btn1").value = "";
	
	document.getElementById("btn2").disabled = false;
	document.getElementById("btn2").value = "";
	
	document.getElementById("btn3").disabled = false;
	document.getElementById("btn3").value = "";
	
	document.getElementById("btn4").disabled = false;
	document.getElementById("btn4").value = "";
	
	document.getElementById("btn5").disabled = false;
	document.getElementById("btn5").value = "";
	
	document.getElementById("btn6").disabled = false;
	document.getElementById("btn6").value = "";
	
	document.getElementById("btn7").disabled = false;
	document.getElementById("btn7").value = "";
	
	document.getElementById("btn8").disabled = false;
	document.getElementById("btn8").value = "";
	
	document.getElementById("status_disp").innerHTML = "";
	
	board = [2, 2, 2, 2, 2, 2, 2, 2, 2];
	i = -1;
}

// winnerMessage will display a winner message

const winnerMessage = () => {
	if (i % 2 === 0) document.getElementById("status_disp").innerHTML = "You are the winner, X! Thanks for playing!";
	else document.getElementById("status_disp").innerHTML = "You're the winner, O! Thanks for playing!";
}

// checkIfWinner will check if there's a winning line on the board, if yes, it will freeze the board and
// displays a message by calling

const checkIfWinner = () => {
	if(board[0]===board[1] && board[1]===board[2] && board[0]!==2){		//first row
		winnerMessage();
		freezeBoard();
	} else if(board[3]===board[4] && board[4]===board[5] && board[3]!==2){		//second row
		winnerMessage();
		freezeBoard();
	} else if(board[6]===board[7] && board[7]===board[8] && board[6]!==2){		//third row
		winnerMessage();
		freezeBoard();
	} else if(board[0]===board[3] && board[3]===board[6] && board[0]!==2){		//first column
		winnerMessage();
		freezeBoard();
	} else if(board[1]===board[4] && board[4]===board[7] && board[1]!==2){		//second column
		winnerMessage();
		freezeBoard();
	} else if(board[2]===board[5] && board[5]===board[8] && board[2]!==2){		//third column
		winnerMessage();
		freezeBoard();
	} else if(board[0]===board[4] && board[4]===board[8] && board[0]!==2){		//	\ diagonal line
		winnerMessage();
		freezeBoard();
	} else if(board[2]===board[4] && board[4]===board[6] && board[2]!==2){		//	/ diagonal line
		winnerMessage();
		freezeBoard();
	} else if(i>7){																//board full, no winning line
		document.getElementById("status_disp").innerHTML = "Draw! Play again!";
		freezeBoard();
	}
}

//pressed disables the pressed button on the board, sets the button display value and updates the board array

const pressed = btn => {
	i += 1;
	
	switch(btn) {
		case 0:
			document.getElementById("btn0").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn0").value = "X";
				board[0] = 1;
			}else {
				document.getElementById("btn0").value = "O";
				board[0] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 1:
			document.getElementById("btn1").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn1").value = "X";
				board[1] = 1;
			}else {
				document.getElementById("btn1").value = "O";
				board[1] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 2:
			document.getElementById("btn2").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn2").value = "X";
				board[2] = 1;
			}else {
				document.getElementById("btn2").value = "O";
				board[2] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 3:
			document.getElementById("btn3").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn3").value = "X";
				board[3] = 1;
			}else {
				document.getElementById("btn3").value = "O";
				board[3] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 4:
			document.getElementById("btn4").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn4").value = "X";
				board[4] = 1;
			}else {
				document.getElementById("btn4").value = "O";
				board[4] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 5:
			document.getElementById("btn5").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn5").value = "X";
				board[5] = 1;
			}else {
				document.getElementById("btn5").value = "O";
				board[5] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 6:
			document.getElementById("btn6").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn6").value = "X";
				board[6] = 1;
			}else {
				document.getElementById("btn6").value = "O";
				board[6] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 7:
			document.getElementById("btn7").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn7").value = "X";
				board[7] = 1;
			}else {
				document.getElementById("btn7").value = "O";
				board[7] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
		case 8:
			document.getElementById("btn8").disabled = true;
			if(i % 2 === 0){
				document.getElementById("btn8").value = "X";
				board[8] = 1;
			}else {
				document.getElementById("btn8").value = "O";
				board[8] = 0;
			}
			if(i > 3){ checkIfWinner();}
			break;
	}	

}



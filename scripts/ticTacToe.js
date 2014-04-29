$(document).ready(function () {
	//used to alternate between x and o
	var count = 0;
	//holds the placement of x and o, used to find winner (will later be used for 1 player mode)
	var left = ["","",""];
	var mid = ["","",""];
	var right = ["","",""];
	var grid = [left,mid,right];
	
	function setPosition(id, xORo) {
		switch(id)
		{ //this seems ugly. has to be a cleaner way. 
			case "topLeft":
				grid[0][0] = xORo;
				break;
			case "midLeft":
				grid[0][1] = xORo;
				break;
			case "bottomLeft":
				grid[0][2] = xORo;
				break;
			case "topMid":
				grid[1][0] = xORo;
				break;
			case "midMid":
				grid[1][1] = xORo;
				break;
			case "bottomMid":
				grid[1][2] = xORo;
				break;
			case "topRight":
				grid[2][0] = xORo;
				break;
			case "midRight":
				grid[2][1] = xORo;
				break;
			case "bottomRight":
				grid[2][2] = xORo;
				break;
		}
		
	}
	
	function checkForWin()
	{
		if (checkRow())
		{
			alert("WINNER");
			return true;
		}
		if (checkCol())
		{
			alert("WINNER");
			return true;
		}
		if(checkDiag())
		{
			alert("WINNER");
			return true;
		}
	}
	
	function checkRow()
	{ //clean this up....all the check functions can be simplified. so mych redundant code. yuck!
		if (grid[0][0] == "X" && grid[0][1] == "X" && grid[0][2] == "X")
			return true;
		if (grid[1][0] == "X" && grid[1][1] == "X" && grid[1][2] == "X")
			return true;
		if (grid[2][0] == "X" && grid[2][1] == "X" && grid[2][2] == "X")
			return true;
		if (grid[0][0] == "O" && grid[0][1] == "O" && grid[0][2] == "O")
			return true;
		if (grid[1][0] == "O" && grid[1][1] == "O" && grid[1][2] == "O")
			return true;
		if (grid[2][0] == "O" && grid[2][1] == "O" && grid[2][2] == "O")
			return true;
		else
			return false;
	}
	
	function checkCol()
	{
		if (grid[0][0] == "X" && grid[1][0] == "X" && grid[2][0] == "X")
			return true;
		if (grid[0][1] == "X" && grid[1][1] == "X" && grid[2][1] == "X")
			return true;
		if (grid[0][2] == "X" && grid[1][2] == "X" && grid[2][2] == "X")
			return true;
		if (grid[0][0] == "O" && grid[1][0] == "O" && grid[2][0] == "O")
			return true;
		if (grid[0][1] == "O" && grid[1][1] == "O" && grid[2][1] == "O")
			return true;
		if (grid[0][2] == "O" && grid[1][2] == "O" && grid[2][2] == "O")
			return true;
		else
			return false;
	}
	
	function checkDiag()
	{
		if (grid[0][0] == "X" && grid[1][1] == "X" && grid[2][2] == "X")
			return true;
		if (grid[2][0] == "X" && grid[1][1] == "X" && grid[0][2] == "X")
			return true;
		if (grid[0][0] == "O" && grid[1][1] == "O" && grid[2][2] == "O")
			return true;
		if (grid[2][0] == "O" && grid[1][1] == "O" && grid[0][2] == "O")
			return true;
		else
			return false;
	}
	
	function clearBoard()
	{
		left.forEach(clearElement);
		mid.forEach(clearElement);
		right.forEach(clearElement);
		//change this to work by class .box
		document.getElementById("topLeft").innerText = "";
		document.getElementById("midLeft").innerText = "";
		document.getElementById("bottomLeft").innerText = "";
		document.getElementById("topMid").innerText = "";
		document.getElementById("midMid").innerText = "";
		document.getElementById("bottomMid").innerText = "";
		document.getElementById("topRight").innerText = "";
		document.getElementById("midRight").innerText = "";
		document.getElementById("bottomRight").innerText = "";
		count = 0;
	}
	
	function clearElement( elem, index, array )
	{
		array[index] = "";
	}
	
	$("#new").click(function(){
		clearBoard();
	});
	
	$(".box").mousedown(function(){
		count++;
		if(count%2==1)
		{
			$(this).text("X");
			setPosition(this.id, "X")
		}
		else 
		{
			$(this).text("O");
			setPosition(this.id, "O")
		}
		if(checkForWin())
		{
			clearBoard();
		}
	});
});
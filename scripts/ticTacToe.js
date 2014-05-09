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
			alert("WINNER - " + getPlayer());
			return true;
		}
		if (checkCol())
		{
			alert("WINNER - " + getPlayer());
			return true;
		}
		if(checkDiag())
		{
			alert("WINNER - " + getPlayer());
			return true;
		}
	}
	
	function checkRow()
	{
		var plr = getPlayer();
		for (i = 0; i < 3; i++)
		{
			var inARow = 0;
			for(j = 0; j < 3; j++)
			{
				if(grid[j][i] == plr)
				{
					inARow++;
					if (inARow == 3)
						return true;
				}
			}
		}
		return false;
	}
	
//clean this up....all the check functions can be simplified. so much redundant code. yuck!
	function checkCol()
	{
		var plr = getPlayer();
		for (i = 0; i < 3; i++)
		{
			var inARow = 0;
			for(j = 0; j < 3; j++)
			{
				if(grid[i][j] == plr)
				{
					inARow++;
					if (inARow == 3)
						return true;
				}
			}
		}
		return false;
	}
	
	function checkDiag()
	{
		var plr = getPlayer();
		var inARow = 0;
		for(j = 0, i = 0; j < 3; i++, j++)
		{
			if(grid[i][j] == plr)
			{
				inARow++;
				if (inARow == 3)
					return true;
			}
		}
			
		if (grid[2][0] == "X" && grid[1][1] == "X" && grid[0][2] == "X")
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
		var elems = document.getElementsByClassName("box");
		Array.prototype.forEach.call(elems, function(el) { 
			el.innerText = "";
			});
		count = 0;
	}
	
	function setInner( elem, index, array)
	{
		array[index].innerText = "";
	}
	function clearElement( elem, index, array )
	{
		array[index] = "";
	}
	
	function getPlayer()
	{
		if (count%2 == 1)
			return "X";
		else
			return "O";
	}
	
	$("#new").click(function(){
		clearBoard();
	});
	
	$(".box").mousedown(function(){
		count++;
		var plr = getPlayer();
		$(this).text(plr);
		setPosition(this.id, plr)
		if(checkForWin())
		{
			clearBoard();
		}
	});
});
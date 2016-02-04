function buildTable(){
	var table = document.createElement("table");

	var headRow = document.createElement("tr");
	var columnCount = 4;
	for (var i = 1; i <= columnCount; i++){
		var headCell = document.createElement("th");
		headCell.textContent = "Header " + i;
		headRow.appendChild(headCell);
	}
	table.appendChild(headRow);

	var rowCount = 3;
	for (var j = 1; j <= rowCount; j++){
		var row = document.createElement("tr");
		for (var k = 1; k <= columnCount; k++){
			var cell = document.createElement("td");
      var cellLabel = k + "," + j;
			cell.textContent = cellLabel;
      cell.style.border = "1px solid black"
			cell.style.textAlign = "center";
      cell.setAttribute("class", "rowCell");
      cell.setAttribute("id", cellLabel);
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	
	return table;
}
var myTable = document.body.appendChild(buildTable());
document.getElementById("1,1").style.border = "3px solid black";
var currentRow = 1;
var currentCol = 1;
var topRow = 1;
var bottomRow = 3;
var leftCol = 1;
var rightCol = 4;



function addButton(name){
	var button = document.createElement("button");
	button.textContent = name;
  //button.setAttribute("class", "myButtons");
	return button;
}
var upButton = document.body.appendChild(addButton("Up"));
var downButton = document.body.appendChild(addButton("Down"));
var leftButton = document.body.appendChild(addButton("Left"));
var rightButton = document.body.appendChild(addButton("Right"));
var markButton = document.body.appendChild(addButton("Mark Cell"));


upButton.addEventListener("click", function(event){
  var currentCellId = String(currentCol) + "," + String(currentRow);
  var currentCell = document.getElementById(currentCellId);
  if (currentRow > 1){
  	currentCell.style.border = "1px solid black";
  
  	currentRow -= 1;
  
    currentCellId = String(currentCol) + "," + String(currentRow);
    currentCell = document.getElementById(currentCellId);
    currentCell.style.border = "3px solid black";
  }
});


downButton.addEventListener("click", function(event){
  var currentCellId = String(currentCol) + "," + String(currentRow);
  var currentCell = document.getElementById(currentCellId);
  if (currentRow < 3){
    currentCell.style.border = "1px solid black";

    currentRow += 1;

    currentCellId = String(currentCol) + "," + String(currentRow);
    currentCell = document.getElementById(currentCellId);
    currentCell.style.border = "3px solid black";
  }
});


leftButton.addEventListener("click", function(event){
  var currentCellId = String(currentCol) + "," + String(currentRow);
  var currentCell = document.getElementById(currentCellId);
  if (currentCol > 1){
    currentCell.style.border = "1px solid black";

    currentCol -= 1;

    currentCellId = String(currentCol) + "," + String(currentRow);
    currentCell = document.getElementById(currentCellId);
    currentCell.style.border = "3px solid black";
  }
});


rightButton.addEventListener("click", function(event){
  var currentCellId = String(currentCol) + "," + String(currentRow);
  var currentCell = document.getElementById(currentCellId);
  if (currentCol < 4){
    currentCell.style.border = "1px solid black";

    currentCol += 1;

    currentCellId = String(currentCol) + "," + String(currentRow);
    currentCell = document.getElementById(currentCellId);
    currentCell.style.border = "3px solid black";
  }
});


var cellList = document.getElementsByClassName("rowCell");
markButton.addEventListener("click", function(event) {
  for (var i = 0; i < cellList.length; i++){
    if (cellList[i].style.border == "3px solid black"){
    	cellList[i].style.backgroundColor = "yellow";
    }
  }
});

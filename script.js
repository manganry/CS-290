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
			cell.textContent = k + ", " + j;
			cell.style.textAlign = "center";
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
	
	return table;
}
document.body.appendChild(buildTable());


function addButton(name){
	var button = document.createElement("button");
	button.textContent = name;
	return button;
}
document.body.appendChild(addButton("Up"));
document.body.appendChild(addButton("Down"));
document.body.appendChild(addButton("Left"));
document.body.appendChild(addButton("Right"));
document.body.appendChild(addButton("Mark Cell"));
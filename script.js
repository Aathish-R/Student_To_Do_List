var values = document.getElementById("values"); 

values.addEventListener("click", displayfunction);
var row = 1;
function displayfunction() {
	var name = document.getElementById("name").value; 
	var rollno = document.getElementById("rollno").value;
	var email = document.getElementById("email").value;

	if (!name || !rollno || !email) {
		alert("Required Details must be Filled");
		return;
	}
	var display = document.getElementById("display"); 
	var newRow = display.insertRow(row);
	var cell1 = newRow.insertCell(0);
	var cell2 = newRow.insertCell(1);
	var cell3 = newRow.insertCell(2);
	cell1.innerHTML = name;
	cell2.innerHTML = rollno;
	cell3.innerHTML = email;
	row++;
}
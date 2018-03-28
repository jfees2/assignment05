/*eslint-env browser*/

window.addEventListener("load", function () {
    "use strict";
    var employees, name, title, action, extension, i, table, row, nameInput, titleInput, extensionInput, newEmployeeIndex, newAction, newRow, newName, newTitle, newExtension, deleteId, errors;
    
    //array of data
    employees = [
        name = ["Julia", "Justina", "Ryan", "Cynthia", "David"],
        title = ["CEO", "President", "Web Developer", "Accountant", "Foreman"],
        extension = [4166, 5330, 1330, 2487, 7515],
        action = ["<button id='delete-0'>Delete</button>", "<button id='delete-1'>Delete</button>", "<button id='delete-2'>Delete</button>", "<button id='delete-3'>Delete</button>", "<button id='delete-4'>Delete</button>"]
    ];
    
    //adding array data to table
    for (i = 0; i < employees[0].length; i++) {
        table = document.getElementById("employee-table");
        row = table.insertRow(-1);
        
        name = row.insertCell(0);
        title = row.insertCell(1);
        extension = row.insertCell(2);
        action = row.insertCell(3);
        
        name.innerHTML = employees[0][i];
        title.innerHTML = employees[1][i];
        extension.innerHTML = employees[2][i];
        action.innerHTML = employees[3][i];
    }
    
    document.getElementById("employee-count").innerHTML = employees[0].length; 
    if (employees[0].length === 1) {
        document.getElementById("plural").innerHTML = "";
    }
    else {
        document.getElementById("plural").innerHTML = "s";
    }
    
    for ( i = 0; i < employees[0].length; i++) {
        document.getElementById("delete-" + i).addEventListener("click", deleteEmployee, false);
    }
    
    function addNewEmployeeData(event) {
        event.preventDefault();
        
          
        //get new employee data from input
        nameInput = document.getElementById("new-name");
        titleInput = document.getElementById("new-title");
        extensionInput = document.getElementById("new-extension");
        
        errors = 0;
        if (nameInput.value === "") {
            document.getElementById("name-error").style.display = "block";
            errors++;
        }
        else {
            document.getElementById("name-error").style.display = "none"; 
        }
        if (titleInput.value === "") {
            document.getElementById("title-error").style.display = "block";
            errors++;
        }
        else {
            document.getElementById("title-error").style.display = "none"; 
        }
        if (extensionInput.value === "") {
            document.getElementById("extension-error").style.display = "block";
            errors++;
        }
        else {
            document.getElementById("extension-error").style.display = "none"; 
        }
        if (errors > 0) {
            return;
        }
        
        //push new data to array
        employees[0].push(nameInput.value);
        employees[1].push(titleInput.value);
        employees[2].push(extensionInput.value);
        newEmployeeIndex = employees[0].length - 1;
        employees[3].push("<button id='delete-" + newEmployeeIndex + "'>Delete</button>");
        
        //add new row and cells with input data
        newRow = table.insertRow(-1);
            
        newName = newRow.insertCell(0);
        newTitle = newRow.insertCell(1);
        newExtension = newRow.insertCell(2);
        newAction = newRow.insertCell(3);
        
        newName.innerHTML = employees[0][newEmployeeIndex];
        newTitle.innerHTML = employees[1][newEmployeeIndex];
        newExtension.innerHTML = employees[2][newEmployeeIndex];
        newAction.innerHTML = employees[3][newEmployeeIndex];
        
        var id = "delete-" + newEmployeeIndex;
        document.getElementById(id).addEventListener("click", deleteEmployee, false);  
        
        document.getElementById("employee-count").innerHTML = employees[0].length;
        if (employees[0].length === 1) {
            document.getElementById("plural").innerHTML = "";
        }
        else {
            document.getElementById("plural").innerHTML = "s";
        }
        nameInput.value = "";
        titleInput.value = "";
        extensionInput.value = "";
    }
    
    //when add-button clicked execute addNewEmployeeData
    document.getElementById("sum-bttn").addEventListener("click", addNewEmployeeData, false);
    
    //delete button
    function deleteEmployee(event) {
        for (i = employees[0].length; i > 0; i--) {
            table.deleteRow(i - 1);
        }
        
        deleteId = event.target.id.replace("delete-", "");
        employees[0].splice(deleteId, 1);
        employees[1].splice(deleteId, 1);
        employees[2].splice(deleteId, 1);
        employees[3].splice(deleteId, 1);
        
        for (var j = 0; j < employees[0].length; j++) {
            row = table.insertRow(-1);

            name = row.insertCell(0);
            title = row.insertCell(1);
            extension = row.insertCell(2);
            action = row.insertCell(3);

            name.innerHTML = employees[0][j];
            title.innerHTML = employees[1][j];
            extension.innerHTML = employees[2][j];
            action.innerHTML = "<button id='delete-" + j + "'>Delete</button>";
        }
        
        for ( i = 0; i < employees[0].length; i++) {
            document.getElementById("delete-" + i).addEventListener("click", deleteEmployee, false);
        }
        
        document.getElementById("employee-count").innerHTML = employees[0].length;
        if (employees[0].length === 1) {
            document.getElementById("plural").innerHTML = "";
        }
        else {
            document.getElementById("plural").innerHTML = "s";
        }
    }

});









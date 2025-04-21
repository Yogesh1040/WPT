// Read
let parentEl = document.getElementById("d1");
let xmlObj1 = new XMLHttpRequest();
xmlObj1.onload = function () {
    let data = JSON.parse(this.responseText);

    for (let d of data) {
        let newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${d.id}</td><td>${d.name}</td><td>${d.post}</td><td>${d.salary}</td><td>${d.location}</td><td>${d.mode}</td>`;
        parentEl.appendChild(newRow);
    }
}

xmlObj1.open("GET", "http://localhost:8888/Employee");

xmlObj1.send();

// Delete

function deleteEmployee() {
    let id = document.getElementById("eid").value;

    if (window.confirm(`Are you sure that you want to delete Employee with id : ${id}`)) {
        let xmlObj = new XMLHttpRequest();
        xmlObj.onload = function () {
            window.alert("Employee Deleted Successfully");
        }
        xmlObj.open("DELETE", `http://localhost:8888/Employee/${id}`);
        xmlObj.send();
    }

}

//ADD 

function addEmployee() {
    let empObj = {
        id: document.getElementById("eId").value,
        name: document.getElementById("eName").value,
        post: document.getElementById("ePost").value,
        salary: document.getElementById("eSalary").value,
        location: document.getElementById("eLocation").value,
        mode: document.getElementById("eMode").value,
    };

    let empJson = JSON.stringify(empObj);
    let xmlObj = new XMLHttpRequest();
    xmlObj.onload = function () {
        window.alert("Employee Added Successfully");
    }
    xmlObj.open("POST", `http://localhost:8888/Employee`);
    xmlObj.send(empJson);
}

//Update 
let id;
function getEmployee() {
    id = document.getElementById("upId").value;
    let xmlObj = new XMLHttpRequest();
    xmlObj.onload = function () {
        let data = JSON.parse(this.responseText);

        document.getElementById("upName").value = data.name;

        document.getElementById("upPost").value = data.post;

        document.getElementById("upSalary").value = data.salary;

        document.getElementById("upLocation").value = data.location;

        document.getElementById("upMode").value = data.mode;

    }
    xmlObj.open("GET", `http://localhost:8888/Employee/${id}`);
    xmlObj.send();
}


function updateEmployee() {

    id = document.getElementById("upId").value;
    let xmlObj = new XMLHttpRequest();
    xmlObj.onload = function () {
        window.alert("Employee Updated Successfully");
    }
    let upData = {
        name: document.getElementById("upName").value,
        post: document.getElementById("upPost").value,
        salary: document.getElementById("upSalary").value,
        location: document.getElementById("upLocation").value,
        mode: document.getElementById("upMode").value
    };

    xmlObj.open("PUT", `http://localhost:8888/Employee/${id}`)

    xmlObj.send(JSON.stringify(upData));
}
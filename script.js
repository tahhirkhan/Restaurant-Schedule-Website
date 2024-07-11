

document.getElementById('deptForm').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
    var department = document.getElementById('department').value;
    console.log(department);

    if (department == "Kitchen Staff") {
        showKitchenStaff();
    }

    else if (department == "Service Staff") {
        showServiceStaff();
    }

    else if (department == "Administrative Staff") {
        showAdministrativeStaff();
    }

    else {
        showAllStaff();
    }

});


// show KITCHEN STAFF only and hide the rest ones
function showKitchenStaff() {
    var k = document.getElementById("kitchenStaff");
    var s = document.getElementById("serviceStaff");
    var a = document.getElementById("administrativeStaff");

    k.style.display = "block";
    s.style.display = "none";
    a.style.display = "none";
}

// show SERVICE STAFF only and hide the rest ones
function showServiceStaff() {
    var a = document.getElementById("administrativeStaff");
    var s = document.getElementById("serviceStaff");
    var k = document.getElementById("kitchenStaff");

    k.style.display = "none";
    a.style.display = "none";
    s.style.display = "block";
    
}


// show ADMINISTRATIVE STAFF only and hide the rest ones
function showAdministrativeStaff() {
    var k = document.getElementById("kitchenStaff");
    var s = document.getElementById("serviceStaff");
    var a = document.getElementById("administrativeStaff");

    k.style.display = "none";
    s.style.display = "none";
    a.style.display = "block";
}


// show ALL STAFF
function showAllStaff() {
    var k = document.getElementById("kitchenStaff");
    var s = document.getElementById("serviceStaff");
    var a = document.getElementById("administrativeStaff");

    k.style.display = "block";
    s.style.display = "block";
    a.style.display = "block";
}

console.log("hyy");

function validate() {
   
    let name = String(document.getElementById("name").value);
    if (name.length <= 3) {
        alert("please fill name");
        return false;

    }
    let email = String(document.getElementById("email").value);
    if (email.length <= 3) {
        alert("please fill proper email");
        return false;

    }
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(mailformat)) {
        alert("Please Enter Valid Email");
        return false;


    }
    let number = String(document.getElementById("number").value);
    if (number.length != 10) {
        alert("please fill proper mobile number");
        return false;

    }
    else {
        return true;
    }

}


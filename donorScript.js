

function clearmoney() {
  moneytext.innerHTML = ` `; 
  preventDefault();
  
}

console.log(name)
let alertbox = document.getElementById("alertbox");
var eligible=true;


let drink = document.getElementById("drink");
drink.addEventListener("click", function checkbox() {
    if (drink.checked) {



        alertbox.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Not Accepteble</strong> You have Drink past 10 Days.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`

    }
});
let diseas = document.getElementById("diseas");
diseas.addEventListener("click", function checkbox() {
    if (diseas.checked) {


        alertbox.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Not Accepteble</strong> You Need Checkup Required .
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
});

let nothealthy = document.getElementById("nothealty");
nothealthy.addEventListener("click", function checkbox() {
    if (nothealthy.checked) {


        alertbox.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Not Acceptable</strong> You Should Be Healthy First.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`
    }
});
let money = document.getElementById("money");
money.addEventListener("click", function checkbox() {
    if (money.checked) {
        let moneytext = document.getElementById("moneytext");
        moneytext.innerHTML = ` <input type="text" id="moneyamount" placeholder="Amount In Rupees" style="background-color: transparent;width: 
        100%; border-radius: 5px; padding: 5px;color: white;"><br> <button type="button" onclick="clearmoney()" class="btn btn-warning my-2">No I Don't Want Money </button>
        `;
      

    }
  
});



let submit = document.getElementById("submit").addEventListener('click', function SubmitClick(e) {

    console.log("Clicked");
    e.preventDefault();
    let name = String(document.getElementById("name").value);
    let email = String(document.getElementById("email").value);
    let number = String(document.getElementById("number").value);
    let weight = (document.getElementById("weight").value);
    

    if (drink.checked || diseas.checked || nothealthy.checked) {
        eligible = false;
       
    }

    if (name.length <= 3) {
        alert("please fill name")
        eligible = false;
    }
    if (email.length <= 3) {
        alert("please fill proper email")
        eligible = false;
    }
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.match(mailformat)){
        alert("Please Enter Valid Email")
        eligible= false;
    }

    if (number.length != 10) {
        alert("please fill proper mobile number")
        eligible = false;
    }
    
    if (weight < 50) {
        alertbox.innerHTML = ` <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Less Weight </h4>
        <p>Your Weight Is Less Please Try After Some Time Good Luck!.
        
      </div>`
        
        eligible = false;
    }

    if(eligible){
        alertbox.innerHTML = ` <div class="alert alert-success" role="alert">
        <h4 class="alert-heading">Congratulation </h4>
        <p>You Are Eligible To Donate Blood.
        
      </div>`


       

    }
    else{
      alertbox.innerHTML = ` <div class="alert alert-danger" role="alert">
      <h4 class="alert-heading"> Sorry </h4>
      <p>You Are Not Eligible To Donate Blood.
      
    </div>`

    }




})
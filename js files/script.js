// making function
function submitHandler() {
  let Yname = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let messege = document.getElementById("messege").value;
// using if else condition
  if (Yname == "" || email == "" || messege == "") {
    alert("You must fill all the details.");
  }
  else{
    alert("Thank you for submitting.");
  }
}

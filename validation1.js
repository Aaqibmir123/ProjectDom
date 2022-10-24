var form = document.getElementById("my-form");
var msgs = document.getElementsByClassName("msg");
var inputs = document.getElementById("name");
var emails = document.getElementById("email");
var sub = document.getElementsByClassName("btn");

form.addEventListener('submit', adduser);

function adduser(e) {
    e.preventDefault();
    var ins = document.getElementById("name").value;
    var em = document.getElementById("email").value;
    var obj = {
        ins,
        em
    }
    window.localStorage.setItem(`${obj.ins}`,JSON.stringify(obj));

    //retrive
    for (let i = 0; i < localStorage.length; i++) {
        var d=document.getElementsByClassName("info-div");
        d = localStorage.key(obj.ins);
        d.innerHTML=(`Item at ${obj.ins}: ${d}`);
    }

 

    //conditions

    if (inputs.value === '' || emails.value === '') {
        alert("please enter the details");
        // msgs.classList.add("error");
        // msgs.innerHTML="please enter the info";

        // setTimeout(() => {
        //     msgs.remove(),3000);

    }
    else {
        // console.log("successs");
        //Grab the ul
        var ul = document.querySelector("#users");

        var li = document.createElement("li");
        var textNode = document.createTextNode(`${inputs.value} ${emails.value}`);
        li.appendChild(textNode);
        ul.appendChild(textNode);
    }

        //add edit and delete button when user clicks

   //retrevive items
   for (let i = 0; i < localStorage.length; i++) {
    let storedValue = localStorage.key(i);
    console.log(storedValue);
   
}



}


//Delete the user
function user(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

//remove from the screen

function remove(emailId){
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}


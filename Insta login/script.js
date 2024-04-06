function submitForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var dob=document.getElementById("dob").value;
    var gender=document.querySelector('input[name="gender"]:checked').value;
    var address=document.getElementById("address").value;
    var message="Name:"+name+"<br>"+"Email:"+email+"<br>"+"DOB:"+dob+"<br>"+"Gender:"+gender+"<br>"+"Address:"+address;
    document.getElementById("message").innerHTML=message;
}
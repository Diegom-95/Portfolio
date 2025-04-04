function sendMail(){
  let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("message").value,
  }


  emailjs.send("service_5nykcva","template_raj2ueb",parms).then(alert("Email Sent!"))
}



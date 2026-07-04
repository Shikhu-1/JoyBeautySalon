function sendMessage(event){
    event.preventDefault();

    let name=document.getElementById("name").value;

    alert("Thank you " + name + "! Your message has been received.");

    document.getElementById("contactForm").reset();
}
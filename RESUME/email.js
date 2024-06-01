function sendMail() {
    var datax= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        massage: document.getElementById("message").value,
    }
    const serviceID = "service_3zvsqri";
    const templateID = "template_eg5r7n6";

    emailjs
        .send(serviceID, templateID, datax)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully");
            }
        )
        .catch((err) => consol.log(err));
}

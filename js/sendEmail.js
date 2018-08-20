$('#contactForm').submit(function(e){
    var name=$('#inputName'),
        email=$('#inputEmail'),
        message=$('#message');

    if(!name.val() || !email.val() || !message.val()){

    }
    else{
        $.ajax({
            url: "https://formspree.io/vania.boncheva@gmail.com",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        alert('Message sent');
    }
})
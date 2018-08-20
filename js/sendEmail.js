$('#contactForm').submit(function(e){
    var name=$('#inputName'),
        email=$('#inputEmail'),
        message=$('#message');

    if(!name.val() || !email.val() || !message.val()){
        alertify.error('Please check your entries.')
    }
    else{
        $.ajax({
            url: "https://formspree.io/contactForm",
            method: "POST",
            data: $(this).serialize(),
            dataType: "json"
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success('Message sent');
    }
})
// Contact Form Scripts

$(function() {

    $("#contactFormModal input,#contactFormModal textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var nameModal = $("input#nameModal").val();
            var emailModal = $("input#emailModal").val();
            var phoneModal = $("input#phoneModal").val();
            var creditModal = $("input#creditModal").val();
            var messageModal = $("textarea#messageModal").val();
            var firstName = nameModal; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = nameModal.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././mail/credits.php",
                type: "POST",
                data: {
                    nameModal: nameModal,
                    phoneModal: phoneModal,
                    emailModal: emailModal,
                    creditModal: creditModal,
                    messageModal: messageModal
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactFormModal').trigger("reset");
                    $('#closeModal-1').click();
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactFormModal').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#nameModal').focus(function() {
    $('#success').html('');
});

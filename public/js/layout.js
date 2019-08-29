$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});

$(document).ready(function(){
    $('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('whatever') 
    var modal = $(this)
    modal.find('.identificador').text('New message to ' + recipient)
    modal.find('#id').val(recipient)
    });
});

$(document).ready(function() {
    var table = $('#seminarios').DataTable();
} );

$(document).ready(function(){
    $('#tipo_persona').change(function(){
        var value = $(this).val();
        var x = document.getElementById("administrador");
        var y = document.getElementById("general");
        var a = document.getElementById("rol_persona");
        a.style.display = "block";
        if(value === "administrador"){
            x.style.display = "block";
            y.style.display = "none";
        } else if (value === "general"){
            x.style.display = "none";
            y.style.display = "block";
        } 
    });
});

/*$(document).ready(function(){
    $('#tipo_persona').change(function(){
        var value = $(this).val();
        var x = document.getElementById("administrador");
        var y = document.getElementById("panelista");
        var z = document.getElementById("participante");
        var a = document.getElementById("rol_persona");
        a.style.display = "block";
        if(value === "administrador"){
            x.style.display = "block";
            y.style.display = "none";
            z.style.display = "none";
        } else if (value === "panelista"){
            x.style.display = "none";
            y.style.display = "block";
            z.style.display = "none";
        } else if (value === "participante"){
            x.style.display = "none";
            y.style.display = "none";
            z.style.display = "block";
        }
    });
}); */
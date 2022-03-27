
$(document).ready(function() {
    $('#list').click(function(event) {
        event.preventDefault();
        $('#products .item').addClass('list-group-item');
    });
    $('#grid').click(function(event) {
        event.preventDefault();
        $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });
    $('[data-toggle="tooltip"]').tooltip();

    if ($("#init_bg").length === 1) {
        setTimeout(function() {
            $("#init_bg").fadeOut()
        }, 3000);
    }
    var rtlclass="";
if($("#lang")=="ar"){
    rtlclass="owl-rtl";
}
    var owl = $('.owl-carousel');
    if (owl.length > 0) {
        owl.owlCarousel({
            margin: 10,
            rewind: true,
freeDrag:true,
rtlClass:rtlclass,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }
        })
    }
});
function SetLanguage(s) {


    if (typeof $('#SelectLang') != undefined && $('#SelectLang') != undefined) {
        document.cookie = "lang=" + $('#SelectLang').val();
        location.reload();

    }

}
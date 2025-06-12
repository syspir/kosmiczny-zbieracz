
$("#przycisk-start").click(function() {
    $("#ekran-startowy").hide();
    $("#interfejs-gry").show();
});

$("#przycisk-pokaz-wyniki").click(function() {
    $("#ekran-startowy").hide();
    $("#tablica-wynikow").show();
});

$("#przycisk-powrot").click(function() {    
    $("#tablica-wynikow").hide();
    $("#ekran-startowy").show();
});



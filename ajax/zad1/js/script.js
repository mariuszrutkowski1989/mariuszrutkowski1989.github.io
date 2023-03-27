console.log('dziala?');

$(document).ready(function () {
    $('#pobierz-dane').click(function () {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            dataType: 'json',
            success: function (response) {
                console.log(response);
                let daneProgramisty = '<br>'+'<br>'+'<br>'+'<p>Imię: ' + response.imie + '</p>' +
                    '<p>Nazwisko: ' + response.nazwisko + '</p>' +
                    '<p>Zawód: ' + response.zawod + '</p>' +
                    '<p>Firma: ' + response.firma + '</p>';
                    
                $('#dane-programisty').html(daneProgramisty);
            },
            error: function (error) {
                console.log('Wystąpił błąd:', error);
            }
        });
    });
});

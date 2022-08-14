$(document).on('click','.send_form', function(){
var input_blanter = document.getElementById('wa_email');

/* Whatsapp Settings */
var walink = 'https://web.whatsapp.com/send',
    phone = '+584243031596',
    walink2 = 'Hola Dist. EDMIDIMAR C.A ',
    text_yes = 'Enviado.',
    text_no = 'Complete su pedido y luego haga clic en Enviar.';

/* Smartphone Support */
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
var walink = 'whatsapp://send';
}

if("" != input_blanter.value){

 /* Call Input Form */
var input_select1 = $("#wa_select :selected").text(),
    input_name1 = $("#wa_name").val(),
    input_email1 = $("#wa_email").val(),
    input_number1 = $("#wa_number").val(),
    input_url1 = $("#wa_url").val(),
    input_textarea1 = $("#wa_textarea").val();

/* Final Whatsapp URL */
var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
    '*Nombre* : ' + input_name1 + '%0A' +
    '*Email* : ' + input_email1 + '%0A' +
    '*Seleccion Opcion* : ' + input_select1 + '%0A' +
    '*Numero de entrada* : ' + input_number1 + '%0A' +
    '*URL/Link* : ' + input_url1 + '%0A' +
    '*Description* : ' + input_textarea1 + '%0A';

/* Whatsapp Window Open */
window.open(blanter_whatsapp,'_blank');
document.getElementById("text-info").innerHTML = '<span class="yes">'+text_yes+'</span>';
} else {
document.getElementById("text-info").innerHTML = '<span class="no">'+text_no+'</span>';
}
});
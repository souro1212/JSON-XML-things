$(document).ready(function(){
    var editor = new JsonEditor('#json-display', getJson());
    $('#translate').on('click', function () {
        editor.load(getJson());
    });
    $("#jsonMessage").html('');
});



function getJson(){
    try {
        $("#jsonMessage").html('<div class="ui positive message transition successMessagebackground">Valid JSON</div>');
        return JSON.parse($('#jsonValidatorField').val());
    } catch (ex) {
        $("#jsonMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
        console.log('Wrong JSON Format: ' + ex);
    }
}

function clearJsonField(){
    $("#jsonValidatorField").val('');
    $("#json-display,#jsonMessage").html('');
}


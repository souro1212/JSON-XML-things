$(document).ready(function(){
    //var editor = new JsonEditor('#json-display', getJson());
    $('#translate').on('click', function () {
        var outputVal = getJson();
        //console.log(outputVal);
        outputVal = hljs.highlight($('#jsonValidatorField').val().trim(), {language: 'json'});
        //console.log(outputVal);
        $("#json-display").html(outputVal.value);
        document.querySelectorAll('#json-display').forEach((el) => {
           hljs.highlightElement(el);
        });
    });
    $("#jsonMessage").html('');
});



function getJson(){
    try {
        $("#jsonMessage").html('<div class="ui positive message transition successMessagebackground">Valid JSON</div>');
        return JSON.parse($('#jsonValidatorField').val().trim());
    } catch (ex) {
        $("#jsonMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
        console.log('Wrong JSON Format: ' + ex);
    }
}

function clearJsonField(){
    $("#jsonValidatorField").val('');
    $("#json-display,#jsonMessage").html('');
}


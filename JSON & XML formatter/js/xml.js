function processXML(){
    try {
        $("#xmlValidatorFieldOutput").empty();
        var xml = $("#xmlValidatorField").val();
        $("#xmlValidatorFieldOutput").simpleXML({ xmlString: xml });
        $("#xmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid XML</div>');
       
    } catch (ex) {
        $("#xmlMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
        console.log("Unable to process XML: " + ex);
    }
}

function clearXmlField(){
    $("#xmlValidatorField").val('');
    $("#xmlValidatorFieldOutput,#xmlMessage").html('');
}
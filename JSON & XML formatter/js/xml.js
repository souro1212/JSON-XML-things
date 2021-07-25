function processXML(){
    try {
        $("#xmlValidatorFieldOutput").empty();
        var xml = $("#xmlValidatorField").val().trim();
        var parser = new DOMParser();
        var outputVal = parser.parseFromString(xml,"text/xml");
       // console.log(outputVal);
        var find = $(outputVal).find("parsererror").length;
        if(find == 0){
            xml = hljs.highlight(xml, {language: 'xml'});
            //console.log(xml);
            $("#xmlValidatorFieldOutput").html(xml.value);
            document.querySelectorAll('#xmlValidatorFieldOutput').forEach((el) => {
                hljs.highlightElement(el);
            });
    
           // $("#xmlValidatorFieldOutput").simpleXML({ xmlString: xml });
            $("#xmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid XML</div>');
        }else{
            $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">Invalid XML</div>');
        }
        
       
    } catch (ex) {
        $("#xmlMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
        //console.log("Unable to process XML: " + ex);
    }
}

function clearXmlField(){
    $("#xmlValidatorField").val('');
    $("#xmlValidatorFieldOutput,#xmlMessage").html('');
}
$(document).ready(function(){
    $("#xmljsonDropdown").dropdown("set value","JSON to XML");
});

function jsonXmlProcess(){
    var jsonXMLVal = $("#jsonXMLInput").val().trim();
    var convertTo = $("#xmljsonDropdown").dropdown("get value");
    console.log(convertTo);

    var outputVal;

    if(convertTo === "xml to json"){
        var parser = new DOMParser();
        outputVal = parser.parseFromString(jsonXMLVal,"text/xml");
       // console.log(outputVal);
        var find = $(outputVal).find("parsererror").length;
        if(find == 0){
            
            outputVal = xml2json(jsonXMLVal, {compact: false, spaces: 4});
            //outputVal = outputVal.replace("undefined", '');
            
            $("#jsonXMLOutput").removeClass("language-html").addClass("language-json");
            outputVal = hljs.highlight(outputVal, {language: 'json'});
            $("#jsonXMLOutput").html(outputVal.value);
            document.querySelectorAll('#jsonXMLOutput').forEach((el) => {
               hljs.highlightElement(el);
            }); 

            $("#jsonXmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid XML</div>');
           
        }else{
            $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">Invalid XML</div>');
        }
        

    }else{
        try {  
           // console.log("hi")
            outputVal = JSON.parse(jsonXMLVal);
           // console.log(outputVal);
            
            outputVal = json2xml(outputVal, {compact: true, spaces: 4});
            //outputVal = json2xml(outputVal);
            // console.log(outputVal);
        
            $("#jsonXMLOutput").empty();
            $("#jsonXMLOutput").addClass("language-html").removeClass("language-json");
            outputVal = hljs.highlight(outputVal, {language: 'xml'});
          // console.log(outputVal);
           $("#jsonXMLOutput").html(outputVal.value);
           document.querySelectorAll('#jsonXMLOutput').forEach((el) => {
               hljs.highlightElement(el);
           }); 
           
            //$("#jsonXMLOutput").simpleXML({ xmlString: outputVal });
            $("#jsonXmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid XML</div>');
           
        } catch (ex) {
            $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
           //console.log("Unable to process XML: " + ex);
        }
    }   
}

function clearJsonXmlMessage(){
    $("#jsonXmlMessage").html('');
    $("#jsonXMLInput").val('');
    $("#jsonXMLOutput").empty();
}

function getJson(outputVal){
    try {
        $("#jsonXmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid JSON</div>');
        return JSON.parse(outputVal);
    } catch (ex) {
        $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
       // console.log('Wrong JSON Format: ' + ex);
    }
}


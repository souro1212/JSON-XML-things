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
        console.log(outputVal);
        var find = $(outputVal).find("parsererror").length;
        if(find == 0){
            outputVal = xml2json(outputVal);
            console.log(outputVal);
            outputVal = outputVal.replace("undefined", '');
            console.log(outputVal);
        
            var editor = new JsonEditor('#jsonXMLOutput', getJson());
            editor.load(getJson(outputVal));
        }else{
            $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">Invalid XML</div>');
        }
        

    }else{
        try {  
            outputVal = JSON.parse(jsonXMLVal);
            console.log(outputVal);
            outputVal = json2xml(outputVal);
            console.log(outputVal);
       
        
            $("#jsonXMLOutput").empty();
            $("#jsonXMLOutput").simpleXML({ xmlString: outputVal });
            $("#jsonXmlMessage").html('<div class="ui positive message transition successMessagebackground">Valid XML</div>');
           
        } catch (ex) {
            $("#jsonXmlMessage").html('<div class="ui negative message transition errorMessagebackground">'+ex+'</div>');
           // console.log("Unable to process XML: " + ex);
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


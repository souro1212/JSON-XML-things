$(document).ready(function(){
    
    loadLandingPage();
});
    
//loadLandingPage
function loadLandingPage(){
    $("#mainLoader").load("landingPage.html");
}

//open sidebar
function openSidebar(){
    $('#sidebar').sidebar({
        "dimmable": false,
        "onVisible": function(){
            
        }
    }).sidebar('toggle');
    
}

//changeCardImage
function changeCardImage(obj){
    if($(obj).hasClass("jsonClass")){
        $(obj).find("img").attr("src","pic/json-file-high.svg");
    }else if($(obj).hasClass("xmlClass")){
        $(obj).find("img").attr("src","pic/xml-high.svg");
    }else if($(obj).hasClass("convertClass")){
        $(obj).find("img").attr("src","pic/convert-high.svg");
    }else if($(obj).hasClass("swaggerClass")){
        $(obj).find("img").attr("src","pic/swagger-high.svg");
    }else{
        $(obj).find("img").attr("src","pic/home-high.svg");
    }
    
}

function changeImageBack(obj){
    if($(obj).hasClass("jsonClass")){
        $(obj).find("img").attr("src","pic/json-file.svg");
    }else if($(obj).hasClass("xmlClass")){
        $(obj).find("img").attr("src","pic/xml.svg");
    }else if($(obj).hasClass("convertClass")){
        $(obj).find("img").attr("src","pic/convert.svg");
    }else if($(obj).hasClass("swaggerClass")){
        $(obj).find("img").attr("src","pic/swagger.svg");
    }else{
        $(obj).find("img").attr("src","pic/home.svg");
    }
}

function loadJsonPage(){
    $("#mainLoader").load("json.html");
}

function loadXmlPage(){
    $("#mainLoader").load("xml.html");
}

function loadJsonXmlPage(){
    $("#mainLoader").load("jsonXml.html");
}

//load SwaggerUI
function loadSwaggerUI(){
    $("#mainLoader").load("openAPISpecs.html");
}

//open credits modal
function openCreditsModal(){
    $("#creditsModal").modal('show');
}

//load Yaml To Json
function loadYamlToJson(){
    $("#mainLoader").load("yaml/index.html");
}





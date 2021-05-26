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
    }else if($(obj).hasClass("convertInvClass")){
        $(obj).find("img").attr("src","pic/convert-inv-high.svg");
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
    }else if($(obj).hasClass("convertInvClass")){
        $(obj).find("img").attr("src","pic/convert-inv.svg");
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
    $("#mainLoader").load("swaggerui.html");
}

//open credits modal
function openCreditsModal(){
    $("#creditsModal").modal('show');
}





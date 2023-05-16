$(document).ready(function(){
    //$("#test").load("swaggerui/index.html");
    
});

function deleteSwaggerUI(){
    localStorage.setItem("swaggerFile", '');
    $("#swaggerUISegment").hide();
    $("#swaggerUiEmbed").attr('src',''); 
}

function getSwaggerUrl(){
    var url = $("#swaggerUrl").val().trim();
    $("#swaggerUrl").val(url);
    console.log(url);
    if(url != ""){
            localStorage.setItem("swaggerFile", url);
            $("#swaggerUISegment").show();
            $("#swaggerUiEmbed").attr('src','swaggerui/index.html');
    }
}

$('input#swaggerFileInput').on('change', function () {
    var filename = $('#swaggerFileInput').val();
    var fileExtension = ['yaml', 'json'];
    if ($.inArray(filename.split('.').pop().toLowerCase(), fileExtension) == -1) {
            alert("Only formats are allowed : "+fileExtension.join(', '));
    }else{
        var reader = new FileReader();
        reader.onload = function (e) {
            
            var thisFile = reader.result;
            localStorage.setItem("swaggerFile", thisFile);
        };
        reader.readAsDataURL(this.files[0]);
    
        $("#swaggerUISegment").show();
        $("#swaggerUiEmbed").attr('src','swaggerui/index.html');
    }
    
});

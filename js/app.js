let htmlWrittenCode=document.getElementById("htmlCode")
let cssWrittenCode=document.getElementById("cssCode");
let jsWrittenCode=document.getElementById("jsCode");

document.onload = onLoadPage()

function writeIFrame(){
    let frame = document.getElementById("preview-window").contentWindow.document;
    let htmlCode = htmlWrittenCode.value;
    let cssCode = "<style> "+cssWrittenCode.value+" </style>";
    let jsCode = "<script> "+jsWrittenCode.value+" </script>";
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();

}

function showPreview(){

    writeIFrame()
    //saving code in localStorage
    localStorage.setItem("HTML code" , `${htmlWrittenCode.value}`)
    localStorage.setItem("CSS code" , `${cssWrittenCode.value}`)
    localStorage.setItem("JS code" , `${jsWrittenCode.value}`)
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}

function onLoadPage(){
    if(localStorage.getItem("CSS code") !== null){cssWrittenCode.value = localStorage.getItem("CSS code")}
    if(localStorage.getItem("JS code") !== null){jsWrittenCode.value = localStorage.getItem("JS code")}
    if(localStorage.getItem("HTML code") !== null){
        htmlWrittenCode.value = localStorage.getItem("HTML code");
        writeIFrame();
    }
    
}


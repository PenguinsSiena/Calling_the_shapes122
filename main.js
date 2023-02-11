x = 0;
y = 0;
rectangle = "";
circle_var= "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech detected is:" + content;
    if(content == "circle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Circle is being drawn";
        circle_var = "set";
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Rectangle is being drawn";
        rectangle = "set";
    }
}

function setup(){
    canvas = createCanvas(900, 600);
}

function draw(){
    if(circle_var == "set"){
        radius = Math.floor(Math.random() * 150);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        circle_var = "";
    }
    if(rectangle == "set"){
        rect(x,y,150,70);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        rectangle = "";
    }
}

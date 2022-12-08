//setup for canvas
var mouseEvent="empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;


//add events:

//add event for click
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    //additional
    color = document.getElementById("color").value;
    width = document.getElementById("width");

     mouseEvent = "mouseDown";
}

//add event for mouse leaving canvas
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

//add event for release
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

//add event for mouse moving
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    //get mouse position
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;

    //put brush down
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
    

    //put last mouse position on console
    console.log("Last mouse position: ");
    console.log(last_x + ", " + last_y);

    //paint
    ctx.moveTo(last_x, last_y);

    //put mouse position on console
    console.log("Mouse position: ");
    console.log(mouse_x + ", " + mouse_y);

    //stroke
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();

}

//rewrite mouse position
last_x = mouse_x;
last_y = mouse_y;

}
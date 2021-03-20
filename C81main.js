var canvas=document.getElementById("my_canvas");
var ctx=canvas.getContext("2d")
ctx.beginPath()
ctx.strokeStyle="blue"
ctx.lineWidth=4
ctx.arc(200,200,35,0,360)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="black"
ctx.lineWidth=4
ctx.arc(290,200,35,0,360)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="red"
ctx.lineWidth=4
ctx.arc(380,200,35,0,360)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="yellow"
ctx.lineWidth=4
ctx.arc(242,238,35,0,360)
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle="green"
ctx.lineWidth=4
ctx.arc(330,238,35,0,360)
ctx.stroke()
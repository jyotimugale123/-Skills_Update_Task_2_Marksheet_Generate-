function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);


function myFun()
{
var a=document.form1.txtname.value;
document.getElementById("demoname").innerHTML=a;
var b=document.form1.txtfname.value;
document.getElementById("demofname").innerHTML=b;
var c=document.form1.txtins.value;
document.getElementById("demoins").innerHTML=c;
var d=document.form1.txtbatch.value;
document.getElementById("demobatch").innerHTML=d;
var e=document.form1.txtoffice.value;
document.getElementById("demooffice").innerHTML=e;
var f=document.form1.txtweb.value;
document.getElementById("demoweb").innerHTML=f;
var g=document.form1.txtit.value;
document.getElementById("demoit").innerHTML=g;
var h=document.form1.txtc.value;
document.getElementById("democ").innerHTML=h;
var txt1=eval(parseFloat(document.form1.txtoffice.value)+parseFloat(document.form1.txtweb.value)
+parseFloat(document.form1.txtit.value)+parseFloat(document.form1.txtc.value));
document.getElementById("demototal").innerHTML=txt1;
var txt2=eval(parseFloat(txt1*100)/400);
document.getElementById("demoper").innerHTML=txt2.toFixed(2)+"%";

switch(true)
{
case(txt2>=80):
document.getElementById("demograde").innerHTML="A1";
break;
case(txt2>=70):
document.getElementById("demograde").innerHTML="A";
break;
case(txt2>=60):
document.getElementById("demograde").innerHTML="B";
break;
case(txt2>=50):
document.getElementById("demograde").innerHTML="C";
break;
case(txt2>=40):
document.getElementById("demograde").innerHTML="D";
break;
case(txt2<40):
document.getElementById("demograde").innerHTML="Fail";
break;
}

}
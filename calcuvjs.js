function ganancia (){
  var vc=parseInt(document.getElementById("vc").value);
  var ut=parseInt(document.getElementById("ut").value);
  var iva=parseInt(document.getElementById("iva").value);
  var resultado1=vc*ut/100;
  var resultado2=vc*iva/100; 
  var suma=resultado1+resultado2+vc;
   
  document.getElementById('ga').value=resultado1;
  document.getElementById('vv').value=suma;
  
}
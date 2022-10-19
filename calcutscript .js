var valor =document.getElementById("valor");
valor.addEventListener('kayup',convertir);
var resultado =document.getElementById("resultado");
resultado.addEventListener('kayup',convertir);

unidad1=document.getElementById("unidad1");
unidad1.addEventListener('change',convertir);
unidad2=document.getElementById("unidad2");
unidad2.addEventListener('change',convertir);






function calcular(){
  
  numero=valor.value;
  numero=parseFloat(numero);
  
  

  if(unidad1.value=="Byte"&&unidad2.value=="Kilobyte"){

    a=numero/1000;
    document.getElementById('resultado').value=a;
    
  } else if(unidad1.value=="Byte"&&unidad2.value=="Byte"){
   alert("Error de combinación");

  } else if(unidad1.value=="Byte"&&unidad2.value=="Megabyte"){
    b=numero/1048576;
    document.getElementById('resultado').value=b;

  } else if(unidad1.value=="Byte"&&unidad2.value=="Gigabyte"){
    c=numero/1073741824;
    document.getElementById('resultado').value=c;

  } else if(unidad1.value=="Byte"&&unidad2.value=="Terabyte"){
    d=numero/1099511627776;
    document.getElementById('resultado').value=d;

  } else if(unidad1.value=="Kilobyte"&&unidad2.value=="Byte"){
    e=numero*1000;
    document.getElementById('resultado').value=e;

  } else if(unidad1.value=="Kilobyte"&&unidad2.value=="Kilobyte"){
    alert("Error de combinación");

  } else if(unidad1.value=="Kilobyte"&&unidad2.value=="Megabyte"){
    g=numero/1024;
    document.getElementById('resultado').value=g;
  } else if(unidad1.value=="Kilobyte"&&unidad2.value=="Gigabyte"){
    h=numero/1048576;
    document.getElementById('resultado').value=h;
  } else if(unidad1.value=="Kilobyte"&&unidad2.value=="Terabyte"){
    i=numero/1073741824;
    document.getElementById('resultado').value=i;
  } else if(unidad1.value=="Megabyte"&&unidad2.value=="Byte"){
    j=numero*1048576/1;
    document.getElementById('resultado').value=j;
  } else if(unidad1.value=="Megabyte"&&unidad2.value=="Kilobyte"){
    k=numero*1000;
    document.getElementById('resultado').value=k;

} else if(unidad1.value=="Megabyte"&&unidad2.value=="Megabyte"){
  alert("Error de combinación");

}else if(unidad1.value=="Megabyte"&&unidad2.value=="Gigabyte"){
  l=numero/1000;
  document.getElementById('resultado').value=l;

} else if(unidad1.value=="Megabyte"&&unidad2.value=="Terabyte"){
  m=numero/1048576;
  document.getElementById('resultado').value=m;

} else if(unidad1.value=="Gigabyte"&&unidad2.value=="Byte"){
  n=numero*1073741824/1;
  document.getElementById('resultado').value=n;

} else if(unidad1.value=="Gigabyte"&&unidad2.value=="Kilobyte"){
  ñ=numero*1048576/1;
  document.getElementById('resultado').value=ñ;

} else if(unidad1.value=="Gigabyte"&&unidad2.value=="Megabyte"){
  o=numero*1000;
  document.getElementById('resultado').value=o;

} else if(unidad1.value=="Gigabyte"&&unidad2.value=="Gigabyte"){
  alert("Error de combinación");

} else if(unidad1.value=="Gigabyte"&&unidad2.value=="Terabyte"){
  p=numero/1000;
  document.getElementById('resultado').value=p;

} else if(unidad1.value=="Terabyte"&&unidad2.value=="Byte"){
  q=numero*1099511627776/1;
  document.getElementById('resultado').value=q;

} else if(unidad1.value=="Terabyte"&&unidad2.value=="Kilobyte"){
  r=numero*1073741824/1;
  document.getElementById('resultado').value=r;

} else if(unidad1.value=="Terabyte"&&unidad2.value=="Megabyte"){
  s=numero*1048576/1;
  document.getElementById('resultado').value=s;

} else if(unidad1.value=="Terabyte"&&unidad2.value=="Gigabyte"){
  t=numero*1000;
  document.getElementById('resultado').value=t;

} else if(unidad1.value=="Terabyte"&&unidad2.value=="Terabyte"){
  alert("Error de combinación");

} 
}

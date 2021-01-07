
      function inputdata(){
       var n=document.forms['datapribadi']['nama'].value;
       var e=document.forms['datapribadi']['email'].value;
       var p=document.forms['datapribadi']['work'].value;
       var a=document.forms['datapribadi']['desc'].value;        
                                               
       var tabel = document.getElementById("databel");
       var baris = tabel.insertRow(1);
       var kol1 = baris.insertCell(0);
       var kol2 = baris.insertCell(1);
       var kol3 = baris.insertCell(2);
       var kol4 = baris.insertCell(3);
               
       kol1.innerHTML = n;
       kol2.innerHTML = e;
       kol3.innerHTML = p;
       kol4.innerHTML = a;
      }
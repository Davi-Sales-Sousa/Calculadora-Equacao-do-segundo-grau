function Raizes(){
    var a = window.document.getElementById('coeficiente_a');
    var b = window.document.getElementById('coeficiente_b');
    var c = window.document.getElementById('coeficiente_c');

    var c_a = Number(a.value);
    var c_b = Number(b.value);
    var c_c = Number(c.value);

    if(c_a == NaN && c_b == NaN && c_c == NaN){

    }
    else if(c_a == 0 && c_b != 0 && c_c != 0){
        res.innerHTML = `<h5>Resultado</h5> <h5>x = ${-c_c/c_b}</h5>`;
    }
    else if(c_a != 0 && c_b != 0 && c_c != 0){
        var delta = c_b**2 - 4*c_a*c_c;

        if(delta >= 0){
            var x1,x2;
            x1 = (-c_b + Math.sqrt(delta))/(2*c_a);
            x2 = (-c_b - Math.sqrt(delta))/(2*c_a);
            res.innerHTML = `<h5>Resultado:</h5> <h5>x1 = ${x1}</h5> <h5>x2 = ${x2}</h5>`;
   
        }
        if(delta < 0){
            var x1_real,x1_imag;
            var x2_real,x2_imag;

            x1_real = -c_b/(2*c_a);
            x1_imag = Math.sqrt(-delta)/(2*c_a);
            x2_real = x1_real;
            x2_imag = -x1_imag;

            res.innerHTML = `<h5>Resultado:</h5> <h5> x1 = ${x1_real} + i ${x1_imag}</h5>       <h5> x2 =  ${x2_real} - i ${-x2_imag}</h5>`;
        }
    }
}

function Instrucoes(){
    Calculadora.innerHTML=`<h5> Como usar:</h5> <p> Digite os coeficientes <strong>a</strong>, <strong>b</strong> e <strong>c</strong> de uma equação do segundo grau da forma:
     <strong>ax<sup>2</sup>+bx+c = 0</strong></p> <p> Caso você digite <strong>a=0</strong>, e somente digite os coeficientes <strong>b</strong> e <strong>c</strong> esta passará a ser uma equação de primeiro
     grau do tipo <strong>bx + c = 0</strong>.`;
}




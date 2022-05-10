function Raizes(){
    var a = window.document.getElementById('coeficiente_a');
    var b = window.document.getElementById('coeficiente_b');
    var c = window.document.getElementById('coeficiente_c');

    var c_a = Number(a.value);
    var c_b = Number(b.value);
    var c_c = Number(c.value);

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




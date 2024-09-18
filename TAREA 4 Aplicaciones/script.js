function realizarOperaciones() {
    // Obtener los valores ingresados
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    // Verificar si los valores ingresados son números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, ingrese dos números válidos.');
        return;
    }

    // Inicializar el contenedor de resultados
    const results = document.getElementById('results');
    results.innerHTML = ''; // Limpiar resultados previos

    // Iterar 5 veces para realizar las operaciones
    for (let i = 1; i <= 5; i++) {
        let result;
        let operation;
        
        switch (i) {
            case 1:
                result = num1 + num2;
                operation = 'Suma';
                break;
            case 2:
                result = num1 - num2;
                operation = 'Resta';
                break;
            case 3:
                result = num1 * num2;
                operation = 'Multiplicación';
                break;
            case 4:
                // Verificar división por cero
                if (num2 === 0) {
                    result = 'Error: División por cero';
                } else {
                    result = num1 / num2;
                }
                operation = 'División';
                break;
            case 5:
                // Verificar módulo por cero
                if (num2 === 0) {
                    result = 'Error: Módulo por cero';
                } else {
                    result = num1 % num2;
                }
                operation = 'Módulo';
                break;
        }

        // Mostrar el resultado
        results.innerHTML += `<p>${operation} = ${result}</p>`;
    }
}

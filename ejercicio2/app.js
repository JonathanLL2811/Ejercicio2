document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('gradesForm');
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const resultMessage = document.getElementById('resultMessage');

    calculateBtn.addEventListener('click', function () {
        const firstPartial = parseFloat(document.getElementById('firstPartial').value);
        const secondPartial = parseFloat(document.getElementById('secondPartial').value);
        const thirdPartial = parseFloat(document.getElementById('thirdPartial').value);

        if (isNaN(firstPartial) || isNaN(secondPartial) || isNaN(thirdPartial)) {
            resultMessage.textContent = 'Por favor, ingrese todas las notas.';
            resultMessage.className = 'alert alert-danger';
            resultMessage.classList.remove('d-none');
            return;
        }

        // Validaciones 
        if (firstPartial < 0 || firstPartial > 30 || secondPartial < 0 || secondPartial > 30 || thirdPartial < 0 || thirdPartial > 40) {
            resultMessage.textContent = 'Las notas deben estar en el rango de 0 a 30 para los dos primeros parciales y de 0 a 40 para el tercer parcial.';
            resultMessage.className = 'alert alert-danger';
            resultMessage.classList.remove('d-none');
            return;
        }

        // Calcular la nota final
        const finalGrade = firstPartial + secondPartial + thirdPartial;

        //mensaje a mostrar
        let message = '';
        let alertClass = '';
        if (finalGrade < 60) {
            message = 'Reprobado';
            alertClass = 'alert-danger';
        } else if (finalGrade < 80) {
            message = 'Bueno';
            alertClass = 'alert-warning';
        } else if (finalGrade < 90) {
            message = 'Muy Bueno';
            alertClass = 'alert-info';
        } else {
            message = 'Sobresaliente';
            alertClass = 'alert-success';
        }

        //mensaje
        resultMessage.textContent = `Nota final: ${finalGrade}%. ${message}`;
        resultMessage.className = `alert ${alertClass}`;
        resultMessage.classList.remove('d-none');
    });

    // Limpiar los campos
    resetBtn.addEventListener('click', function () {
        form.reset();
        resultMessage.classList.add('d-none');
    });
});

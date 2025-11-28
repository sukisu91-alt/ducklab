

document.addEventListener('DOMContentLoaded', function() {
    const receiptBox = document.getElementById('receipt-box');
    const thanksBox = document.getElementById('thanks-box');

    receiptBox.classList.remove('hidden');
    receiptBox.classList.add('visible');
    thanksBox.classList.add('hidden');
    
    setTimeout(function() {
        receiptBox.classList.remove('visible');
        receiptBox.classList.add('hidden');
        thanksBox.classList.remove('hidden');
        thanksBox.classList.add('visible');
        
        const colores = ['yellow', 'coral', 'orange', 'fuchsia', 'aqua','lime'];
        let colorIndex = 0;
        thanksBox.style.backgroundColor = colores[colorIndex];
        colorIndex = (colorIndex + 1) % colores.length;
        setInterval(function() {
            thanksBox.style.backgroundColor = colores[colorIndex];
            colorIndex = (colorIndex + 1) % colores.length;
        }, 900);  
    }, 9000); 
});
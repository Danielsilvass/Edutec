var num = 300;
var num2 = 300;

 

var carrosseis = document.querySelectorAll('.carrossel');

carrosseis.forEach(function(carrossel) {
    var btnRight = carrossel.querySelector('.bntright');
    var btnLeft = carrossel.querySelector('.bntleft');
    var slideContainer = carrossel.querySelector('.container');
    var limitador = carrossel.querySelector('.limitador');

    btnRight.addEventListener('click', () => {
        var limit = limitador.getBoundingClientRect().left;
        var ref = btnRight.getBoundingClientRect().left;

        if (limit > ref) {
            slideContainer.style.transform = 'translateX(-' + num + 'px)';
            num = num + 300;
            num2 = num2 - 300;
        } else {
            var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;
            var stopedRound = Math.round(stoped);
            slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';
        }
    });

    btnLeft.addEventListener('click', () => {
        var limit = limitador.getBoundingClientRect().left;
        var ref = btnLeft.getBoundingClientRect().left;
        var slide = slideContainer.getBoundingClientRect().left;

        if (slide < ref) {
            slideContainer.style.transform = 'translateX(' + num2 + 'px)';
            num = num - 300;
            num2 = num2 + 300;
        } else {
            slideContainer.style.transform = 'translateX(0)';
            num = 300;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 

            var dataValue = this.getAttribute('data-value');
            
            localStorage.setItem('selectedDataValue', dataValue);
            console.log('data-value recuperado:', dataValue);
            
            var iframeSrc =`./modals/${dataValue}/${dataValue}.html`;
            console.log('O src do iframe agora é:',iframeSrc);
            
            document.getElementById('modalmarte').style.display = 'flex';
        });
    });

    document.getElementById('close-marte').onclick = function() {
        document.getElementById('modalmarte').style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target == document.getElementById('modalmarte')) {
            document.getElementById('modalmarte').style.display = 'none';
        }
    };
});
// Variáveis de contagem da direção
var num = 500;
var num2 = 500;

// Selecionando todos os carrosseis
var carrosseis = document.querySelectorAll('.carrossel');

// Função para manipular o botão direito
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
            num = num + 500;
            num2 = num2 - 500;
        } else {
            var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;
            var stopedRound = Math.round(stoped);
            slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';
        }
    });

    // Função para manipular o botão esquerdo
    btnLeft.addEventListener('click', () => {
        var limit = limitador.getBoundingClientRect().left;
        var ref = btnLeft.getBoundingClientRect().left;
        var slide = slideContainer.getBoundingClientRect().left;

        if (slide < ref) {
            slideContainer.style.transform = 'translateX(' + num2 + 'px)';
            num = num - 500;
            num2 = num2 + 500;
        } else {
            slideContainer.style.transform = 'translateX(0)';
            num = 150;
        }
    });
});
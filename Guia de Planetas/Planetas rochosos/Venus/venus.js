document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item').forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            
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
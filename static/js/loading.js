var startTime = new Date().getTime();
    
window.addEventListener('load', function() {
    var endTime = new Date().getTime();
    var timeElapsed = endTime - startTime;
    var remainingTime = Math.max(0, 2000 - timeElapsed);
    
    setTimeout(function() {
        var loading = document.getElementById('loading');
        loading.style.opacity = '0';
        loading.style.display = 'none';
        
        var content = document.getElementById('sb');
        content.classList.add('show');
    }, remainingTime + 2000);
});
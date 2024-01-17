window.onbeforeunload = function(e) {
    e.preventDefault(); // 阻止默认行为
    e.returnValue = ''; // 设置返回值为空
    // var returnf = confirm('您确定要关闭此页面吗？')
    var returnf =""
    if (returnf) {
        return true; // 允许关闭页面
    } else {
        return false; // 不允许关闭页面
    }
}
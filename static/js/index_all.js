
// 关闭页面检测

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

// 移动设备检测

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // 如果用户使用移动设备，显示警告信息
    alert("抱歉,改网站暂不支持手机端访问。手机端访问本网站页面布局可能异常。请使用电脑访问。")
}


// 监听页面可见性变化事件
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
    // 更换网页标题
        document.title = '欢迎加入我们-deqecraft官网';
     } else {
    // 恢复原始网页标题
        document.title = '新年快乐-deqecraft官网';
      }
    });
    
// 链接检测

// 获取链接元素和确认框元素
var links = document.querySelectorAll('.safeLink');
var confirmLink = document.getElementById('confirmLink');
var confirmBox = document.getElementById('confirmBox');
    
// 为每个链接添加点击事件监听器
links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接跳转行为
        confirmLink.href = this.href; // 设置确认链接的地址为当前点击链接的地址
        confirmBox.style.display = 'block'; // 显示确认框
    });
});

function hideAlert() {
    confirmBox.style.display = 'none';
}
    
function closeAlert() {
    confirmBox.style.display = 'none';
}
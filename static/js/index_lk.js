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
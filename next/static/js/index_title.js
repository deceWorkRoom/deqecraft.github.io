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
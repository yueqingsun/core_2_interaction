function showContent(index) {
    // 隐藏所有内容
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    // 显示点击的内容
    var content = document.getElementById('content' + index);
    if (content) {
        content.classList.add('active');
    }
}
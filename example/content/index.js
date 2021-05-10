import './index.less';
if (document.querySelector) {
    var eleBox = document.getElementById('box');
    // 目前柱子元素和个数
    var eleBars = document.querySelectorAll('#box > i');
    var lenBar = eleBars.length;
    if (eleBox && lenBar) {
        for (var indexBar = 0; indexBar < lenBar; indexBar += 1) {
            // 柱形图的柱子高度和背景色随机
            eleBars[indexBar].style.height = Math.ceil(256 * Math.random()) + 'px';
            eleBars[indexBar].style.backgroundColor = '#' + (Math.random() + '').slice(-6);
        }
    }

    // 增加数据
    var eleBtn = document.getElementById('button');
    if (eleBtn && lenBar) {
        eleBtn.onclick = function() {
            // 随机高度和背景色
            var height = Math.ceil(256 * Math.random()) + 'px';
            var backgroundColor = '#' + (Math.random() + '').slice(-6);

            // 创建柱子元素
            var eleClone = eleBars[0].cloneNode();

            eleClone.style.height = height;
            eleClone.style.backgroundColor = backgroundColor;
            
            // 此处的字符替换为了兼容IE8下的演示效果
            eleBox.innerHTML = eleBox.innerHTML.replace(/I><I/ig, 'I> <I') + ' ' + eleClone.outerHTML;

            lenBar+=1;
            // 最多10条数据
            if (lenBar == 10) {
                this.setAttribute('disabled', 'disabled');
            }
        };
    }
}
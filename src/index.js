/*
 * @Author: your name
 * @Date: 2021-05-09 23:02:51
 * @LastEditTime: 2021-05-17 08:00:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /css/src/index.js
 */
import './index.less';


var eleLabel = document.querySelector('label[for="search"]'),
eleSearch = document.getElementById('search');

if (eleLabel && eleSearch) {
    eleLabel.onclick = function() {
        eleSearch.value = '';
    };
}
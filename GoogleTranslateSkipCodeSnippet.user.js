// ==UserScript==
// @name         谷歌翻译跳过代码片段
// @namespace    http://tampermonkey.net/
// @version      0.1.3
// @description  谷歌翻译 【翻译此页功能】跳过代码片段；GoogleTranslateSkipCodeSnippet
// @author       n3taway
// @match        *://*/*
// @license      MIT
// @grant        none
// ==/UserScript==
/*jshint esversion: 6 */
(function () {
    'use strict';
    const nodeNames = [
        'pre',//常规代码片段 例如github
        '.gist',
        '.type-powershell',
        '.type-javascript',
        '.type-css',
        '.js-file-line',
    ];
    nodeNames.forEach((name)=>{
       [...document.querySelectorAll(name)].forEach( node => {
           node.classList.add('notranslate')
       })
    });
})();

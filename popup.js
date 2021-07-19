'use strict'

let result = document.getElementById("result");
let array = [];

chrome.tabs.query({ lastFocusedWindow: true, active: true }, function (tabs) {

    for (var i = 0; i < tabs.length; i++) {
        var url = tabs[i].url;
        var title = tabs[i].title;
        array.push(title);
        array.push(url);
    }

    result.value = array.join("\n");
    result.select();
});
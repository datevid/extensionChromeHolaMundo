chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == 'search') {
        var count = 0;
        var pattern = /Hola mundo/g;
        var bodyText = document.body.innerText;
        var match = pattern.exec(bodyText);
        while (match != null) {
            count++;
            match = pattern.exec(bodyText);
        }
        sendResponse({count: count});
    }
});

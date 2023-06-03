document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchBtn').addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'search'}, function(response) {
                document.getElementById('result').innerHTML = response.count + ' ocurrencias encontradas';
                console.log("asdfasdfasdfsdf")
            });
        });
    });
});

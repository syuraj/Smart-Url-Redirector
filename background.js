chrome.omnibox.onInputEntered.addListener((text) => {
    chrome.storage.sync.get(['ticketUrlTemplate', 'keywordUrl', 'keyword'], (data) => {
        const ticketNumberPattern = /^\d+$/;
        const keywordPattern = new RegExp(`^${data.keyword}$`, 'i');

        let newUrl;
        if (ticketNumberPattern.test(text)) {
            newUrl = data.ticketUrlTemplate.replace('{ticket}', text);
        } else if (keywordPattern.test(text)) {
            newUrl = data.keywordUrl;
        } else {
            newUrl = `https://www.google.com/search?q=${encodeURIComponent(text)}`;
        }

        chrome.tabs.update({ url: newUrl });
    });
});

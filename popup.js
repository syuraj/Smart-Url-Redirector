document.addEventListener('DOMContentLoaded', () => {
    const ticketUrlTemplateInput = document.getElementById('ticketUrlTemplate');
    const keywordInput = document.getElementById('keyword');
    const keywordUrlInput = document.getElementById('keywordUrl');
    const saveButton = document.getElementById('save');

    chrome.storage.sync.get(['ticketUrlTemplate', 'keyword', 'keywordUrl'], (data) => {
        if (data.ticketUrlTemplate) ticketUrlTemplateInput.value = data.ticketUrlTemplate;
        if (data.keyword) keywordInput.value = data.keyword;
        if (data.keywordUrl) keywordUrlInput.value = data.keywordUrl;
    });

    saveButton.addEventListener('click', () => {
        const ticketUrlTemplate = ticketUrlTemplateInput.value;
        const keyword = keywordInput.value;
        const keywordUrl = keywordUrlInput.value;

        chrome.storage.sync.set({
            ticketUrlTemplate,
            keyword,
            keywordUrl
        }, () => {
            alert('Settings saved');
        });
    });
});

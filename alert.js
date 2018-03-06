document.addEventListener('DOMContentLoaded',function()
{
    var buttonCheck = document.getElementById('languageCheck');
    var lang = "Language: \n";
    buttonCheck.addEventListener('click',function()
    {
        chrome.tabs.detectLanguage(tab.id, function(dict)
        {

        });
    });
});

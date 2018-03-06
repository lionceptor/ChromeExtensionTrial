document.addEventListener('DOMContentLoaded',function()
{
    var buttonCheck = document.getElementById("languageCheck");
    var lang = "Language: \n";
    buttonCheck.addEventListener("click",function()
    {
        chrome.tabs.getSelected(null, function(tab))
        {
            chrome.tabs.detectLanguage(tab.id, function(dict)
            {
                for(var m = 0; m < dict.languages.length; m++)
                {
                    lang = lang + dict.languages[m].language + " ";
                }
            });
        }
        alert(lang);
    });
});

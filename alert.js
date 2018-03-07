document.addEventListener('DOMContentLoaded',function()
{
    //links buttonCheck to clicking the language button
    var buttonCheck = document.getElementById("languageCheck");
    var lang = "Language: \n";

    //alert of what language it is when button is pressed
    buttonCheck.addEventListener("click",function()
    {
        chrome.tabs.getSelected(null, function(tab)
        {
            chrome.tabs.detectLanguage(tab.id, function(dict)
            {
                lang += dict;
                alert(lang);
            });
        });
    });

});
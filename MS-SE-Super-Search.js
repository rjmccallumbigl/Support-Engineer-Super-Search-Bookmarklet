javascript: /*If this doesn't work, allow pop-ups windows, accept third-party cookies, and enable JavaScript. Inspiration: https://www.muo.com/tag/10-ingenious-bookmarklets-to-make-you-a-google-power-user/ */(function(){initialQuery = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text); if (!initialQuery) initialQuery = prompt('Enter your search here to query several Microsoft support docs', ''); if (initialQuery) {query = encodeURIComponent(initialQuery); window.open('https://portal.microsofticm.com/imp/v3/incidents/omnisearch?searchString=' + query); window.open('https://github.com/search?q=' + query + '&type=issues'); window.open('https://github.com/search?q=' + query + '&type=discussions'); window.open('https://serverfault.com/search?q=' + query); window.open('https://stackoverflow.com/search?q=' + query); window.open('https://social.msdn.microsoft.com/Forums/en-US/home?category=&forum=&filter=&sort=relevancedesc&brandIgnore=true&searchTerm=' + query); window.open('https://www.reddit.com/search?q=' + query); window.open('https://support.microsoft.com/search/results?query=' + query + '+WINDOWS&isEnrichedQuery=true'); window.open('https://answers.microsoft.com/en-us/search/search?SearchTerm=' + query); window.open('https://docs.microsoft.com/en-us/answers/search.html?c=&includeChildren=&f=&type=question+OR+idea+OR+kbentry+OR+answer+OR+topic+OR+user&redirect=search%2Fsearch&sort=relevance&q=' + query); window.open('https://techcommunity.microsoft.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&q=' + query); window.open('https://www.google.com/search?q=' + query); window.open('https://www.bing.com/work/search?q=' + query); window.open('https://supportability.visualstudio.com/_search?text=' + query + "&type=wiki&pageSize=25"); window.open('https://supportability.visualstudio.com/_search?text=' + query + "&type=wiki&lp=dashboard-Project&pageSize=25&filters=Project%7BAzureVMPOD%7D"); window.open('https://docs.microsoft.com/en-us/search/?search=' + query); }})();

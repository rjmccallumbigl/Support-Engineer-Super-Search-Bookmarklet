# Support-Engineer-Super-Search-Bookmarklet
Highlight text and click the bookmarklet to search the text on several sites. Each entry opens in a new tab.

## Instructions
1. In your browser (Edge or Chrome), create a new bookmark and add it to your bookmark bar.
2. Right click -> Edit
3. Replace the Name with something memorable (I named mine "MS-SE-Super-Search").
4. Replace the URL with the script: https://github.com/rjmccallumbigl/Support-Engineer-Super-Search-Bookmarklet/blob/main/MS-SE-Super-Search.js
5. Highlight a term you want to search on the current page. Click the bookmarklet in the bookmarks bar. It should search for your term on several sites in new tabs.
    *	__Warning__: as is, it opens up like 12 tabs, if you wanna reduce this, modify the javascript in VSCode or some other text editor and remove the sites e.g. `window.open(...);`
6. If you just click on the bookmarklet without highlighting text, you can search the same several sites for a particular query you need to type

## Current list of searched sites:	
* https://supportability.visualstudio.com/
*	https://docs.microsoft.com/
*	https://internal.support.services.microsoft.com/en-us
*	https://www.google.com
*	https://www.bing.com/work/ (tabs to the left search docs available to you, SharePoints, Teams convos, support KBs, etc)
*	https://portal.microsofticm.com/
*	https://github.com/ (issues)
*	https://github.com/ (discussions)
*	https://serverfault.com
*	https://stackoverflow.com/
*	https://social.msdn.microsoft.com/
*	https://www.reddit.com/

## Modifying
* To add another site to the list, you'll need to add it to the end of the script after the last search engine, but before the closing brackets `}})();`
* The search has to meet the same criteria as custom Chrome/Edge browser search engines, except `%s` is replaced by `query`.
* For instance, this is the Google search: `window.open('https://www.google.com/search?q=' + query);`
* If you find another great search engine you want to use, add it in this format but replace the search URL with your sites search URL.
* A good way to discover the search URL is to search something on this site, grab the URL, and find your query.
* Example: 
    * If I want to add DuckDuckGo, I'd go to DuckDuckGo.com
    * Search an example text, such as "PICNIC error"
    * Copy the URL `https://duckduckgo.com/?q=PICNIC+error`
    * Add it to the list, but replacing the search query. The final result is: `window.open('https://duckduckgo.com/?q=' + query);`
*	__Warning__: as is, it opens up like 12 tabs, if you wanna reduce this, modify the javascript in VSCode or some other text editor and remove the sites you don't wanna search starting with `window.open(...)` and ending with the semicolon `;`
    
## Comments
Please ping me any good recommendations to add to the super search. Thanks!

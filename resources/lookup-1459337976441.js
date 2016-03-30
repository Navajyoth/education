(function(window, undefined) {
var dictionary = {
"e248db5e-7a6e-45c4-889b-7f7dd8353a9b": "Preferences",
"1df5f44c-bc7b-4b64-a13c-0b7be4ee70fd": "Main Screen",
"00f58284-084c-495f-b405-89fccd8fb1dc": "Create Profile",
"d12245cc-1680-458d-89dd-4f0d7fb22724": "Left Slider",
"8f836602-d03a-454f-907d-ca540dc80382": "Search Results",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
};

var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);
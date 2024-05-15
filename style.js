// Create a <style> element
var style = document.createElement('style');

// Set the CSS rules
var css = `
:root,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
}

html {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  overflow: auto;
  font-family: -apple-system, "system-ui", "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}

body {
  padding: 16px;
  overflow: auto;
  background-color: transparent;
}

/* Hide codesandbox highlighter */
body > #highlighter {
  display: none;
}

.ag-theme-quartz {
    /* height: 100%;*/
    --ag-header-background-color: rgb(17, 187, 230); 
    --ag-odd-row-background-color: rgba(12, 181, 187, 0.4);
    --ag-selected-row-background-color: rgba(251, 255, 4, 0.945);
 } 

`;

// Set the CSS text of the <style> element
style.textContent = css;

// Append the <style> element to the <head> of the document
document.head.appendChild(style);
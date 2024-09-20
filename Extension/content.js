window.onload = function() {
    log("Plugin loaded");
    let handle = setInterval(() => {
        log("Checking for elements");
        let elems = document.querySelectorAll("div.work-item-title");
        if (elems.length > 0) {
            clearInterval(handle);
            init();
        }
    }, 200);
    setTimeout(() => {
        clearTimeout(handle);
    }, 30000);
};

function init() {
    let spanElems = document.querySelectorAll("div.work-item-title span");
    log(`${spanElems.length} elements found`);
    spanElems.forEach(function(elem, index) {
        let url = window.location.origin + window.location.pathname + "#" + index;
        let style = "style='text-decoration:none;color:inherit;'";
        elem.innerHTML=`<a href='${url}' ${style}>${elem.innerHTML}</a>`;
    });
    log("Hyper links injected");
    if (window.location.hash) {
        let index = parseInt(window.location.hash.substring(1));
        let divElems = document.querySelectorAll("div.work-item-title");
        if (divElems.length > index) {
            divElems[index].click();
            log("Window popped up");
        }
    }
};

function log(str) {
    console.log(`[PingCodeNewTab] ${str}`);
}

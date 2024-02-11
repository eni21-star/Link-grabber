let userInput = document.getElementById("txtbox");
let ulEl = document.getElementById("list");
let getLink = document.getElementById("gtnbtn");
let webA = [];



getLink.addEventListener("click", function () {


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {


        webA.push(tabs[0].url);
        localStorage.setItem("links", JSON.stringify(webA));
        render(webA);

    })




})
let linkstore = JSON.parse(localStorage.getItem("links"));
if (linkstore) {

    webA = linkstore;
    render(webA);
}


let sbmBtn = document.getElementById("sbmbtn");
sbmBtn.addEventListener("click", function () {

    webA.push(userInput.value);
    localStorage.setItem("links", JSON.stringify(webA));
    render(webA);
    clrInp();
})

function render(x) {

    let textcontent = "";
    for (i = 0; i < x.length; i++) {
        textcontent += `<li> <a target = '_blank' href='${x[i]}'>${x[i]}
    </a></li> `;
    }
    ulEl.innerHTML = textcontent;
}
function clrInp() {
    document.getElementById("txtbox").value = "";

}

let delBtn = document.getElementById("delete");

delBtn.addEventListener("click", function () {

    if (webA.length > 0) {
        webA.pop(); 
        localStorage.setItem("links", JSON.stringify(webA));
        render(webA);
    }
})
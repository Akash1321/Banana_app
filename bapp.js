var btnClick = document.querySelector("#btn-click");
var theText =document.querySelector("#text-area");
var output = document.querySelector("#translated");

var theURL = "https://api.funtranslations.com/translate/minion.json"


function constructURL(text){
    
    return theURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with the server try sometimes later")
}

btnClick.addEventListener("click", function eventHandler(){

    var inputText = theText.value
 

 fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText})
    .catch(errorHandler)

    
  
     
})


    

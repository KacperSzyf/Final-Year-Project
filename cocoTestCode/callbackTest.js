function createQuote(quote, callback){
    var myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2
}

function logQuote(quote){
    console.log(quote);
}

createQuote("eat your vegetables!", logQuote); //

function serverRequest(query, callback){
    setTimeout(function(){
        var response = query + "full!";
        callback(response);
    },5000);
}

function getResults(results){
    console.log("Response from the server: " + results);
}

serverRequest("The glass is half ", getResults);

// Result in console after 5 second delay:
// Response from the server: The glass is half full!
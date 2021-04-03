

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime()
{
    const date = new Date();
    return date.getHours() +" Hrs: "+date.getMinutes() + " Mins:" 
    +date.getSeconds() +" Secs";
}

function makePromiseCall(methodtype,url,async = true,data = null)
{
    return new Promise(function(resolve,reject)  {
   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
   console.log(methodtype+" State Changes Called. Ready State : "+
                      xhr.readyState +" Status : "+xhr.status);
     if(xhr.readyState === 4) {
     //Matching all 200 Series Responses
      if(xhr.status === 200 || xhr.status === 201)
      {
          resolve(xhr.responseText);
      }  else if(xhr.status >= 400){
          reject({
              status: xhr.status ,
              statusText : xhr.statusText
          })
    }
   }
   }
   xhr.open(methodtype,url,async);
   if(data){
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(JSON.stringify(data));
    }
else xhr.send();
console.log(methodtype+" request sent to the server"+showTime());
});
}

const getURL = "http://localhost:3000/employees/1";
makePromiseCall("GET",getURL,true)
    .then(responseText => {
    console.log("Get User Data : "+ responseText +"at time : "+showTime());
    })
    .catch(error =>  console.log("GET Error Status : "+JSON.stringify(error)));

const deleteURL = "http://localhost:3000/employees/4";
makePromiseCall("DELETE",deleteURL,false)
.then(responseText => {
    console.log("User deleted : "+ responseText +"at time : "+showTime());
    })
    .catch(error =>  console.log("DELETE Error Status : "+JSON.stringify(error)));


const postURL = "http://localhost:3000/employees";
const empData = {"name":"Harry","salary": "5000"};
makePromiseCall("POST",postURL,true,empData)
.then(responseText => {
    console.log("User Added : "+ responseText +"at time : "+showTime());
    })
    .catch(error =>  console.log("POST Error Status : "+JSON.stringify(error)));
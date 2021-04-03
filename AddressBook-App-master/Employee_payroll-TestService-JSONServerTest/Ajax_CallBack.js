let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function showTime()
{
    const date = new Date();
    return date.getHours() +" Hrs: "+date.getMinutes() + " Mins:" 
    +date.getSeconds() +" Secs";
}

const getURL = "http://localhost:3000/employees/1";

function makeAJAXCall(methodtype,url,callback,async = true,data = null)
{
   let xhr = new XMLHttpRequest();
   xhr.onreadystatechange = function() {
   console.log(methodtype+" State Changes Called. Ready State : "+
                      xhr.readyState +" Status : "+xhr.status);
     if(xhr.readyState === 4) {
     //Matching all 200 Series Responses
      if(xhr.status === 200 || xhr.status === 201)
      {
          callback(xhr.responseText);
      }  else if(xhr.status >= 400){
          console.log("Handle 400 Client Error or 500 Server Error");
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
}

makeAJAXCall("GET",getURL,getUserDetails,true);
function getUserDetails(data)
{
    console.log("Get User Data : "+ data+"at time : "+showTime());
}

const deleteURL = "http://localhost:3000/employees/4";
function userDeleted(data)
{
    console.log("User Deleted : "+ data+"at time : "+showTime());
}
makeAJAXCall("DELETE",deleteURL,userDeleted,false);


const postURL = "http://localhost:3000/employees";
const empData = {"name":"Harry","salary": "5000"};
function userAdded(data)
{
    console.log("User Added : "+ data+"at time : "+showTime());
}
makeAJAXCall("POST",postURL,userAdded,true,empData);
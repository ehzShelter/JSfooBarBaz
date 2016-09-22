var APIService = require("./APIService")

var loadData= function(endpoint){

  APIService.getData(endpoint)
  .then((data) => {
    // do something with your data
    // It may be JSON data
  })
  .then((error) => {
    // handle the error
  })
}


loadData("...")


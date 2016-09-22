class APIService {

  getData(endpoint) {

    const deferred = Promise.defer();

    fetch(endpoint)
      .then((data) => {
        deferred.resolve(data)
      });


  return deferred;
  }

}

module.exports = new APIService;

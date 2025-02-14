function parseQueryString(queryString) {
    const queryParams = {};
    console.log(queryParams)
    const keyValuePair = queryString.split("=");
    const key = keyValuePair[0]; // key will hold 'fruit'
    const value = keyValuePair[1]; // value will hold 'banana'
    queryParams.key = value;
  console.log(queryParams)
    return queryParams;
  }
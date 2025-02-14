// function parseQueryString(queryString) {
//     const queryParams = {};
//     console.log(queryParams)
//     const keyValuePair = queryString.split("=");
//     const key = keyValuePair[0]; // key will hold 'fruit'
//     const value = keyValuePair[1]; // value will hold 'banana'
//     queryParams.key = value;
//   console.log(queryParams)
//     return queryParams;
//   }
// function parseQueryString(queryString) {

//     const queryParams = {}; 
//     const keyValuePairs = queryString.split("&"); 
//     for (const pair of keyValuePairs) {
//       const [key, value] = pair.split("=");
//       queryParams[key] = value;
//     }
//     console.log(queryParams)
//     return queryParams;
//   }
  
//   parseQueryString("sort=lowest&colour=yellow");
const [key,value]
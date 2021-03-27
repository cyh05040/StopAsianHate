'use strict';

module.exports.hello = async (event) => {
  if (event.path == '/whoami' && event.httpMethod === 'GET'){
    return {
      statusCode: 200,
      body: JSON.stringify({username: 'yc2645 Eric Chen is the best'})
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

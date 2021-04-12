const headers = {
  'Access-Control-Allow-Origin': '*'
  }


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
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.incident = async (event) => {
  // You'll only receive events for GET /incident requests
  const firebaseTokenVerifier = require('firebase-token-verifier')
  const projectId = 'firebase-project-id'
  if (event.path === '/incident' && event.httpMethod === 'GET') {

    // check the header named Authorization
    const token = event.headers['Authorization']
    // If no token is provided, or it is "", return a 401
    if (!token) {
      return {
        statusCode: 401
      }
    }
    try {
      // validate the token from the request
      const decoded = await firebaseTokenVerifier.validate(token, projectId)
       // user is now confirmed to be authorized, return the data
      return {
        statusCode: 200,
        body: JSON.stringify([{
          description: 'Some one said to me: Mind your business Chinese lady. I don’t care about you people. Go to hell. This is America.',
          neighborhood: 'Woodside, Queens',
          type: 'Racial Slurs',
          img: '/img/incident_1.jpg',
        }])
      } 
    } catch (err) {
      // the token was invalid,
      console.error(err)
      return {
        statusCode: 401
      }
    }
  }
};
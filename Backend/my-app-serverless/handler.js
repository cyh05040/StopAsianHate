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

module.exports.help = async (event) => {
  // You'll only receive events for GET /help requests
  const firebaseTokenVerifier = require('firebase-token-verifier')
  const projectId = 'firebase-project-id'
  if (event.path === '/help' && event.httpMethod === 'GET') {

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
          organization: 'EnoughIsEnough',
          images: 'enoughIsenough.jpg',
          type: 'donation',
          description: '#EnoughIsEnough is a grassroots initiative by Asian American business owners in New York City who came together to take action on the recent surge in nationwide hate crimes against the Asian American community. Frustrated by the lack of media coverage on the recent violence, we are rallying all the industry homies to encourage people both in and out of the Asian community to realize the power of their voice.',			
          url: 'https://givebutter.com/enoughisenough',
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
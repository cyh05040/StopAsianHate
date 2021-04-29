const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const docClient = new AWS.DynamoDB.DocumentClient();
const headers = {
  'Access-Control-Allow-Origin': '*'
  }


const checkUser = async (event) => {
  //// Should I add this?
  const firebaseTokenVerifier = require('firebase-token-verifier')
  const projectId = 'stopasianhate-8eeee'
  ////
  const token = event.headers['Authorization']
    if (!token) {
      throw new Error('Missing token')
    }
    const decodedUser = await firebaseTokenVerifier.validate(token, projectId)
    return decodedUser
}

module.exports.incident = async (event) => {
  // You'll only receive events for GET /incident requests
  const firebaseTokenVerifier = require('firebase-token-verifier')
  const projectId = 'stopasianhate-8eeee'
  if (event.httpMethod === 'OPTIONS') {
    // return the expected status and CORS headers
    return {
        statusCode: 200,
        headers
    }
  }

  if (event.path === '/incident' && event.httpMethod === 'GET') {
    // console.log(event)
    // check the header named Authorization
    const token = event.headers['Authorization']
    // If no token is provided, or it is "", return a 401
    if (!token) {
      return {
        statusCode: 401,
        headers
      }
    }
    try {
      // validate the token from the request
      const user = await firebaseTokenVerifier.validate(token, projectId)
       // user is now confirmed to be authorized, return the data
      const results = await docClient.query({
        TableName: "incident-list",
        KeyConditionExpression: "user_key = :user_key",
        ExpressionAttributeValues: {
        ":user_key": user.sub,
        },
      }).promise()
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(results)
        // body: JSON.stringify([{
        //   description: 'Some one said to me: Mind your business Chinese lady. I don’t care about you people. Go to hell. This is America.',
        //   zipcode: '10044',
        //   type: 'Racial Slurs',
        //   img: '/img/incident_1.jpg',
        // }])
      } 
    } catch (err) {
      // the token was invalid,
      console.error(err)
      return {
        statusCode: 401,
        headers,
      }
    }
  }

  if (event.path === '/incident' && event.httpMethod === 'POST') {
    // check if the user is authenticated
    let user;
    try {
      user = await checkUser(event)
    } catch (err) {
      return {
        statusCode: 401,
        headers,
        body: JSON.stringify({message: err.message})
      }
    }
  
    // check that the request contains a body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({message: 'Missing body'})
      }
    }
  
    // parse the request body as JSON
    const requestBody = JSON.parse(event.body);

    // const reportIncident = (userKey, requestBody) => {
        // return 
    
    try {
      await docClient
          .put({
            TableName: "incident-list",
            Item: {
              user_key: user.sub,
              incidentId: uuidv4(),
              timestamp: Date.now(),
              description: requestBody.description,
              zipcode: requestBody.zipcode,
            },
          })
        .promise()
        // send back a successful response
        return {
          statusCode: 201,
          headers
      }
    } catch (err) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({message: err.message})
      }
    }
    
      
    }


};




/* Amplify Params - DO NOT EDIT
    API_KINETECO_GRAPHQLAPIENDPOINTOUTPUT
    API_KINETECO_GRAPHQLAPIIDOUTPUT
    API_KINETECO_GRAPHQLAPIKEYOUTPUT
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda', '@aws-sdk/client-s3').APIGatewayProxyHandler}
 */

const { S3, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const s3 = new S3({ region: process.env.AWS_REGION });

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const cvs = {
        'cv': 'psw1',
      'tharindu': ['psw2', 'psw3', 'psw4'],
      'cv1': ['psw7', 'psw8', 'psw9'],
      'cv2': 'psw4',
    };

    const isBase64Encoded = event.isBase64Encoded;
    let body;
    if (isBase64Encoded) {
        const decodedString = Buffer.from(event.body, 'base64').toString('utf-8');
        body = JSON.parse(decodedString);
    } else {
        body = JSON.parse(event.body);
    }
    const { cvid, password } = body;

    const validateUser = (un, pw) => {
            const storedPassword = cvs[un];
          if (Array.isArray(storedPassword)) {
            return storedPassword.includes(pw);
          }
          return storedPassword === pw;
    };

    const isValidUser = validateUser(cvid, password);

    if (isValidUser) {
        try {

            let command = new GetObjectCommand({
                Bucket: "kinetecodd9fd557c04f4e9fb49f6d7a1804df2caf6fe-dev",
                Key: `${cvid}.pdf`
            });
            const signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });

            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "*",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ signedUrl })
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: "Failed to retrieve file", details: error.message })
            };
        }
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: "Unauthorized" })
        };
    }
};
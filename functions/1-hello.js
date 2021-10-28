// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  // always return object
  return {
    statusCode: 200,
    body: 'Our first netlify serverless functions',
  };
};

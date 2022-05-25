
/**@type {(url: URL) => String} */
const getOriginFromUrl = (url) => new URL(url).origin

/**
 * Get underlying body if available. Works for text and json bodies.
 * 
 * @param {Request} req 
 * @returns 
 */
const getBodyContent = async (req) => {

  const isGET = req.method === 'GET';
  const isJSON = req.headers.get('Content-Type').indexOf('json') !== -1;

  if (!isGET) {
    if(isJSON) {
      const jsonBody = await req.json()
      return JSON.stringify(jsonBody);
    }

    return req.text();
  }
};




/**
 * 
 * @param {Request} req 
 */
export const authProcessor = (req) => {
  const requestProcessor = (idToken) => {
    // let req = evt.request;


    /**@type {Promise<Response> | Promise<void>} */
    let processRequestPromise = Promise.resolve();
    // For same origin https requests, append idToken to header.
    if (self.location.origin == getOriginFromUrl(evt.request.url) &&
        (self.location.protocol == 'https:' ||
         self.location.hostname == 'localhost') &&
        idToken) {
      // Clone headers as request headers are immutable.
      const headers = new Headers();
      req.headers.forEach((val, key) => {
        headers.append(key, val);
      });
      // Add ID token to header.
      headers.append('Authorization', 'Bearer ' + idToken);
      processRequestPromise = getBodyContent(req).then((body) => {
        try {
          req = new Request(req.url, {
            method: req.method,
            headers: headers,
            mode: 'same-origin',
            credentials: req.credentials,
            cache: req.cache,
            redirect: req.redirect,
            referrer: req.referrer,
            body,
            // bodyUsed: req.bodyUsed,
            // context: req.context
          });
        } catch (e) {
          // This will fail for CORS requests. We just continue with the
          // fetch caching logic below and do not pass the ID token.
        }
      });
    }
    return processRequestPromise.then(() => fetch(req));
  };


  return requestProcessor
} 
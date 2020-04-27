// EntryPoint for Cloudflare
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
});

//Handle Main Request
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Hello worker response!', {
    headers: { 'content-type': 'text/plain' },
  });
}

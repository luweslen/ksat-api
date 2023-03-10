import http from 'node:http';
import { JSONHandler } from './middleware/jsonHandler.js';
import { buildQueryParams } from './utils/buildQueryParams.js';
import { routes } from './routes.js';

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await JSONHandler(request, response);

  const route = routes.find(route => {
    return route.method === method && route.path.test(url);
  })

  if (route) {
    const routeParams = url.match(route.path);

    const { query, ...params } = routeParams.groups;

    request.params = params;
    request.query = query
      ? buildQueryParams(query)
      : {};

    return route.handler(request, response);
  }

  return response
    .writeHead(404)
    .end()
});

server.listen(3333, () => {
  console.log('KSAT API IS ONLINE IN PORT 3333')
});
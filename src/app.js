import http from 'node:http';
import { JSONHandler } from './middleware/jsonHandler.js';
import { routes } from './routes/index.js';

export class App {
  server;

  constructor() {
    this.server = http.createServer(async (request, response) => {
      const { method, url } = request;

      await JSONHandler(request, response);

      const route = routes.find(route => {
        return route.method === method && route.path.test(url);
      });

      if (route) {
        const routeParams = url.match(route.path);

        const { query, ...params } = routeParams.groups;

        request.params = params;
        request.query = query
          ? this.#buildQueryParams(query)
          : {};

        return route.handler(request, response);
      }

      return response
        .writeHead(404)
        .end();
    });
  }

  listen(port) {
    this.server.listen(port, () => {
      console.log('KSAT API IS ONLINE IN PORT 3333')
    });
  }

  #buildQueryParams(query) {
    return query.substr(1).split('&').reduce((queryParams, param) => {
      const [key, value] = param.split('=');

      queryParams[key] = value;

      return queryParams;
    }, {});
  }
}
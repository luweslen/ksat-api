export class Router {
  routes = [];

  constructor() { }

  get(url = '', handler = () => { }) {
    this.#newRoute('GET', url, handler);
  }

  post(url = '', handler = () => { }) {
    this.#newRoute('POST', url, handler);
  }

  put(url = '', handler = () => { }) {
    this.#newRoute('PUT', url, handler);
  }

  patch(url = '', handler = () => { }) {
    this.#newRoute('PATCH', url, handler);
  }

  delete(url = '', handler = () => { }) {
    this.#newRoute('DELETE', url, handler);
  }

  #newRoute(method = '', url = '', handler = () => { }) {
    this.routes.push({
      method,
      path: this.#buildRouteParams(`${url}`),
      handler
    });
  }

  #buildRouteParams(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g;
    const paramsWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)');

    const pathRegex = new RegExp(`^${paramsWithParams}(?<query>\\?(.*))?$`);

    return pathRegex;
  }
}
import { buildRouteParams } from '../utils/buildRouteParams.js'
import info from '../../package.json' assert { type: 'json' };

export const statusRoutes = [
  {
    method: 'GET',
    path: buildRouteParams('/status'),
    handler: (_, response) => {
      const statusData = {
        service: info.name,
        version: info.version,
        status: 'ON'
      }

      return response.end(JSON.stringify(statusData));
    }
  }
]
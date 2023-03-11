import info from '../../package.json' assert { type: 'json' };

export class StatusController {
  constructor() { }

  get(_, response) {
    const statusData = {
      service: info.name,
      version: info.version,
      status: 'ON'
    };

    return response.end(JSON.stringify(statusData));
  }
}
import 'angular-server-side-configuration/process';

// @see: https://www.npmjs.com/package/angular-server-side-configuration
export const environment = {
  production: false,
  BACKEND_HOST: process.env?.['BACKEND_HOST'] ?? '',
};

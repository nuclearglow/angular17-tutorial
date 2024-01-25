# Angular17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

Along the lines of [the Angular tutorial](https://angular.io/tutorial/first-app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end
testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Build Docker Images

### Browser

- Build and Start

```shell
  docker build -t angular17-browser .
  docker run --name angular17-browser -p 80:80 -d angular17-browser
```

- Stop

```shell
  docker stop angular17-browser
```

### Backend Server

- Build and Start

```shell
  cd server
  docker build -t angular17-server .
  docker run --name angular17-server -p 3000:3000 -d angular17-server
```

- Stop

```shell
docker stop angular17-server
```

## Kubernetes Deployment

TODO

```shell
kubectl apply -k k8s
```

# grpcweb-proxy - an integration and test suite for `grpcweb` and `caddy`

## Tech used

### Backend

- Protobuf
- Go server and client

### Frontend

- Protobuf
- Yarn 1.x
- Vite
- TypeScript
- Vanilla web page

### Dependencies

- Install Yarn 1.x from [here](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

### Usage

1. Generate protobuf defs for backend: `make genback`
2. Generate protobuf defs for frontend: `make genfront`
3. Run a backend service: `make runserver`
4. Validate GRPC server availability: `make runclient`
5. Update and run caddy: `caddy start`
6. Start the Web Browser: `make runfront`
7. Open a web Browser with the proper address e.g. `localhost:5137`, press F12 to open a console and watch the network calls

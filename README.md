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
- Install Protobuf Compiler For Linux/Mac from [here](https://github.com/protocolbuffers/protobuf/releases)

### Usage

1. Generate protobuf defs for backend: `make genback`
2. Generate protobuf defs for frontend: `make genfront`
3. Run a backend service: `make runserver`
4. Validate GRPC server availability using a direct GRPC link (no proxy): `make runclient`
5. Optional: run caddy: `caddy start`
6. Run envoy proxy: `make runproxy`
7. Start the Web Browser: `make runfront`
8. Open a web Browser with the proper address e.g. `localhost:5137`, press F12 to open a console and watch the network calls

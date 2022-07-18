import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { GreeterClient } from "./proto/greeter/greeter.client";

const URL = "http://localhost:5052";

const web = new GrpcWebFetchTransport({
  baseUrl: `${URL}`,
});

const greeter = new GreeterClient(web);
export default greeter;

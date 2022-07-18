import { HelloRequest } from "./proto/greeter/greeter";
import greeter from "./client";

const greet = () => {
  const req: HelloRequest = { name: "Blah" };

  const res = greeter.sayHello(req);

  console.log(`*** Server Response Code: ${res.status}`);
};

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  greet();

  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}

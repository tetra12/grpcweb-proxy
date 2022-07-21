import greeter from "./client";
import { HelloRequest } from "./proto/greeter/greeter";

const greet = () => {
  const req: HelloRequest = { name: "Friend" };

  greeter.sayHello(req).then((res) => {
    console.log(res.response.message);
  });
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

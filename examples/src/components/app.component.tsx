import { h } from "preact";

import { HelloWorld } from "@/hello-world";

const hw = new HelloWorld("whaaaaat uupppp?");

export function App(): h.JSX.Element {
  return (
    <div>
      <h1>My Cool App</h1>
      <p>{hw.sayHello()}</p>
    </div>
  );
}

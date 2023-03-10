if (process.env.NODE_ENV === "development") {
  require("preact/debug");
}

import { render } from "preact";
import { App } from "./app/app";

render(<App />, document.getElementById("root"));

const express = require("express");

// load the agent
const newrelic = require("newrelic");

// instrument express after the agent has been loaded
newrelic.instrumentLoadedModule(
  "express", // the module's name, as a string
  express // the module instance
);

const app = express();

app.use(express.json());

app.use(express.static("public"));

if (process.platform == "win32") {
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

export default app;

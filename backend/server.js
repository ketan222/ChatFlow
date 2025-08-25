import app from "./app.js";

const server = app;

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

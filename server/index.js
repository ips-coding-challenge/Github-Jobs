const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const axios = require("axios");
const port = process.env.PORT || 1337;
const cors = require("@koa/cors");

app.use(
  cors({
    origin: "http://localhost:3000",
    allowMethods: "GET",
  })
);

let cachedJobs;

router.get("/jobs", async (ctx) => {
  if (!cachedJobs) {
    console.log(`Made a api request`);
    const params = ctx.request.query;
    const url = `https://jobs.github.com/positions.json`;
    const response = await axios.get(url, params);
    ctx.body = response.data;
    cachedJobs = response.data;
  } else {
    console.log(`From the cache`);
    ctx.body = cachedJobs;
  }
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

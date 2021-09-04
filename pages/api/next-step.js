import nc from "next-connect";

import { metrics } from "next-step-metrics";

const handler = nc().post((req, res) => {
  console.log(req.body);
  return metrics(req, res);
});

export default handler;


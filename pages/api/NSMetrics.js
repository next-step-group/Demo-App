import nc from "next-connect";
import fs from "fs";

import { importMetrics } from "next-step-npm";

const handler = nc().post((req, res) => {
  return importMetrics(req, res);
});

export default handler;

//FID
//good -> <100ms
//needs improvement -> 300ms-100ms
//poor -> 300ms>

//CLS
//good -> <0.1
//needs improvement -> .25-0.1
//poor -> 25ms>

//LCP
//good -> 2.5sec
//needs improvement -> 4sec-2.5sec
//poor -> 4sec>

import nc from "next-connect";
import fs from "fs";
// const { handler } = require("npmfunctionality");
import { importMetrics } from "next-step-npm";
// const handler = dynamic(() => import("npmfunctionality"), {
//   ssr: false,
// });
const handler = nc().post((req, res) => {
  return importMetrics(req, res);
});

export default handler;


// const handler = nc().post((req, res) => {
//   const json = JSON.parse(req.body);
//   const { name, value } = json;

//   if (!fs.existsSync("metrics.json")) {
//     const newObj = { metrics: [{}] };
//     fs.writeFileSync("metrics.json", JSON.stringify(newObj, null, 4));
//   }

//   const results = JSON.parse(
//     fs.readFileSync("metrics.json", "utf-8", (err, data) => {
//       console.log(data);
//     })
//   );
//   results.metrics[0][name] = value; //.toFixed(2);

//   fs.writeFileSync("metrics.json", JSON.stringify(results, null, 4));

//   // fs.appendFileSync("metrics.json", JSON.stringify(data), (err) => {
//   //   console.log("err");
//   // });
//   res.status(200).json({ test: "test worked" });
// });

// {
// 	"metrics": [
// 		{
// 			"FCP": "1.2s",
// 			"CLS": "0.85",
// 			"LCP": "2.5s"
// 		}
// 	]
// }
// JSON.stringify(data) + ", ";

//Name: FCP
//value: num

//name: CLS
//value: num

//name: TTFB
//value: num

//name: LCP
//value: num

import nc from "next-connect";
import fs from "fs";

const handler = nc().post((req, res) => {
  const json = JSON.parse(req.body);
  const { name, value } = json;

  if (!fs.existsSync("metrics.json")) {
    const newObj = { metrics: [{}] };
    fs.writeFileSync("metrics.json", JSON.stringify(newObj, null, 4));
  }

  const results = JSON.parse(
    fs.readFileSync("metrics.json", "utf-8", (err, data) => {
      console.log(data);
    })
  );
  results.metrics[0][name] = value; //.toFixed(2);

  fs.writeFileSync("metrics.json", JSON.stringify(results, null, 4));
  
  res.status(200).json({ test: "test worked" });
});

export default handler;
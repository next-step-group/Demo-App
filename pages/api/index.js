import nc from 'next-connect';
import fs from 'fs';

const handler = nc()
  .post((req, res) => {
    const json = JSON.parse(req.body)
    const { name, startTime, value } = json;
    const data = {
      name,
      startTime,
      value
    }
    fs.appendFileSync('metrics.json', JSON.stringify(data) + ", ", (err) => {
        console.log('err');
    })
    res.status(200).json({test: 'test worked'})
  });

  export default handler;



  // {
// 	"metrics": [
// 		{
// 			"FCP": "1.2s",
// 			"CLS": "0.85",
// 			"LCP": "2.5s"
// 		}
// 	]
// }
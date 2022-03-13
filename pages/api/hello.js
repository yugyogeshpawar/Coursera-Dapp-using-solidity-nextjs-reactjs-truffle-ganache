// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`content/partners/${req.query.slug}.json`, (err, data) => {
    err && res.status(500).json({error : "blog not found"})   
    // console.log(req.query)
    res.status(200).json(JSON.parse(data))
  })  
}

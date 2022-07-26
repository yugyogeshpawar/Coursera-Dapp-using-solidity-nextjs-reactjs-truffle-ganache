// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs'

export default function handler(req, res) {
  fs.readFile(`content/allCourse/${req.query.slug}`, 'utf-8', (err, data) => {

    err && res.status(500).json({ hero: "blog not found", course: `${req.query.slug}.json` })   
        
    res.status(200).json(data)
  })  
}

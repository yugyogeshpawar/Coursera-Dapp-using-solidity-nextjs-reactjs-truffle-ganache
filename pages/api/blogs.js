// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default function handler(req, res) {
  fs.readdir(`content/allCourse`, (err, data) => {
    err && res.status(500).json({ error: "blog not found" }).status(405).end()
    
    res.status(200).json(data)


  })
}

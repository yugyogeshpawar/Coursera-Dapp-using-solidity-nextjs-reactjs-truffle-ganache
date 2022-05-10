// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'

export default function handler(req, res) {
  fs.readdir(`content/allCourse`, (err, data) => {
    err && res.status(500).json({ error: "blog not found" }).status(405).end()
    
    res.status(200).json(data)

    // err &&
    //     res.json(error);
    //     res.status(405).end();
    // resolve(); // in case something goes wrong in the catch block (as vijay commented)
    
    //     res.statusCode = 200
    
    //     res.setHeader('Content-Type', 'application/json');
    //     res.setHeader('Cache-Control', 'max-age=180000');
    //     res.end(JSON.stringify(data));
    //     resolve();
      
     
      

  })  
}

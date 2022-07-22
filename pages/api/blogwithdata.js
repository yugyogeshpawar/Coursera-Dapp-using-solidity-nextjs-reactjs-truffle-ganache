import * as fs from 'fs'

const alldata = {}

export default function handler(req, res) {

    
    

    fs.readdir(`content/allCourse`, function (err, files) {
        
        err && res.status(500).json({ error: "blog not found" }).status(405).end()       

        files.forEach(function (file) {
            fs.readFile(`content/allCourse/${file}` , 'utf8', function (err, data) {                
                alldata.file = data;
            })
        })
        
        res.status(200).json(alldata)
    })

}

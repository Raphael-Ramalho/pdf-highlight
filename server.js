const fs = require("fs")
const http = require("http")
const { PdfReader } = require("pdfreader");
const pdf2html = require('pdf2html')


// new PdfReader().parseFileItems("teste.pdf", (err, item) => {
//   if (err) console.error("error:", err);
//   else if (!item) console.warn("end of file");
//   else if (item.text) console.log(item.text);
// });



const server = http.createServer((req, res)=>{
  const pathName = req.url
  if((pathName === "/")){
    // res.end("this is the home page")
    pdf2html.html('teste2.pdf', (err, html) => {
      if (err) {
          console.error('Conversion error: ' + err)
      } else {
          // console.log(html)
          res.end(html)
      }
    })
  }
})

server.listen(8080, "localhost", ()=>{
  console.log("Listening to requests on port 8080")
})




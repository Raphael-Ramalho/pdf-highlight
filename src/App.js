import './App.css';
import {useState} from "react"

function App() {
  const [dropedFile, setDropedFile] = useState()
  const [base64, setBase64] = useState('')

  const fileHandler =(e)=>{
    const file = e.target.files[0]
    // setDropedFile(e.target.files[0])
    // console.log("files: ", e.target.files)
    let reader = new FileReader(file)
    // reader.readAsBinaryString(file)
    // reader.readAsArrayBuffer(file)
    reader.readAsDataURL(file)
    reader.onloadend=function(){
      const teste = reader.result
      setBase64(teste)
      // console.log("reader: ", teste)
    }
  }
  const texto = Buffer.from(base64, 'base64').toString("utf-8")
  console.log("texto: ", texto)

  return (
    <div className="App">
      <h1>Highlight PDF</h1>
      <input type="file" onChange={(e)=>fileHandler(e)}></input>
    </div>
  );
}

export default App;

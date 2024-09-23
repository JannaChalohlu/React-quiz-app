import express from 'express'
import cors from 'cors'
import  connection  from './libs/database.js'
import questionRoute from './routes/questionRoute.js'
import path from "path";
import { fileURLToPath } from "url";


await connection()

const app = express()

app.use(
    cors({
      credentials: true,
      origin: ["http://localhost:5174"],
    })
  );
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
 
  app.use(express.static(path.join(__dirname, "client/dist", "index.html")));
app.use(express.json())

app.use('/question', questionRoute)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist", "index.html"));
  });

const port = process.env.PORT || 5100;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})


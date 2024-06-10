import express from "express"
import { databaseConnect } from "./database/databaseConnect.js";
import userRoutes from "./user/user.routes.js";

const app = express();

// Making express to know JSON
app.use(express.json())

// Database Connection
databaseConnect();

// ---- Routes ----

// User Routes
app.use(userRoutes)

// Making app listen to the Port Number 
const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`App listening to port: ${PORT}`)
})
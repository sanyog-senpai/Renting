import express from "express"
import { databaseConnect } from "./database/databaseConnect.js";
import userRoutes from "./user/user.routes.js";
import productRoutes from "./product/product.routes.js";
import cors from 'cors'

const app = express();

// Configure CORS
app.use(cors({
   origin: 'http://localhost:3000', // Allow requests from this origin
   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
   credentials: true, // Allow cookies to be sent
}));


// Making express to know JSON
app.use(express.json())

// Database Connection
databaseConnect();

// ---- Routes ----

// User Routes
app.use(userRoutes)

// Product Routes
app.use(productRoutes)

// Making app listen to the Port Number 
const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`App listening to port: ${PORT}`)
})
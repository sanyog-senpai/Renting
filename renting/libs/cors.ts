import { NextApiRequest, NextApiResponse } from 'next';
import cors from 'cors';

// Helper function to promisify the cors middleware
function initMiddleware(middleware: any) {
   return (req: NextApiRequest, res: NextApiResponse) =>
      new Promise((resolve, reject) => {
         middleware(req, res, (result: any) => {
            if (result instanceof Error) {
               return reject(result);
            }
            return resolve(result);
         });
      });
}

// You can customize the cors options as needed
const corsMiddleware = initMiddleware(
   cors({
      origin: '*', // Allow all origins. Adjust this as needed for your security requirements.
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
      allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
   })
);

export default corsMiddleware;

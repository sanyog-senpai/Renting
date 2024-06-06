import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
   message: string
}

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   // Create Product 
   if (req.method === 'POST') {
      res.status(200).json({ message: 'Hello from Next.js!' })
   }
   // Get Product
   else if (req.method === 'GET') {
      res.status(200).json(req.body)
   }  
   // Edit Product
   else if (req.method === 'PUT') {
      res.status(200).json(req.body)
   } 
   // Delete Product
   else if (req.method === 'DELETE') {
      res.status(200).json(req.body)
   } 
   // Sending allowed Header 
   else {
      res.setHeader('Allow', ['GET', 'POST' ,'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
   }
}
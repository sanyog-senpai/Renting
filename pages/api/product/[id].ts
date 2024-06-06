import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
   message: string
}

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<ResponseData>
) {
   const { id } = req.query
   console.log('Request ID:', id)
   console.log('Request Method:', req.method)
   console.log('Request Body:', req.body)

   // Get Product
   if (req.method === 'GET') {
      res.status(200).json({ message: 'GET' })
   }  
   // Edit Product
   else if (req.method === 'PUT') {
      res.status(200).json({ message: 'PUT' })
   } 
   // Delete Product
   else if (req.method === 'DELETE') {
      res.status(200).json({ message: 'DELETE' })
   } 
   // Sending allowed Header 
   else {
      res.setHeader('Allow', ['GET', 'POST' ,'PUT', 'DELETE'])
      res.status(405).end(`Method ${req.method} Not Allowed`)
   }
}

// pages/api/scholarships/[id].js
import fs from 'fs';
import path from 'path';

export default function handler(req: { method: string; query: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
    console.log("asdas",req.method);
    
  if (req.method === 'DELETE') {
    // Decode the id from the query to handle URL-encoded characters
    console.log(req.query.id);
    const decodedId = decodeURIComponent(req.query.id as string);
    console.log(decodedId);
    const filePath = path.join(process.cwd(), '../../scholarships/scholarship.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    
    

    // Filter out the scholarship with the given ID
    const updatedData = data.scholarships.filter((scholarship: { id: string; }) => scholarship.id!== decodedId);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify({ scholarships: updatedData }));

    res.status(200).json({ message: 'Scholarship deleted successfully' });
  } else {
    // Handle any other HTTP method
    console.log("Method Not Allowed");
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

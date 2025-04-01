// server.ts
import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Simple route to check if the server is working
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

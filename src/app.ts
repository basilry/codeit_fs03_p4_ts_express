import express, { NextFunction, Request, Response } from 'express';

const app = express();

const handler = (req: Request, res: Response, next: NextFunction) => {
  res.send()
  next()
}

app.get('/', handler, (req, res) => {
  res.status(200).send('ok')
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
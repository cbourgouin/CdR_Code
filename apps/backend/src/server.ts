import express from 'express';
import isEmpty from 'utils';
import { serve, setup } from 'swagger-ui-express';

import swaggerDocument from '../public/swagger.json' with { type: 'json' };

const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', serve, setup(swaggerDocument));

app.get('/', (req, res) => {
  const donnee = 1;
  res.send(isEmpty(donnee));
});

app.listen(port, () => {
  console.log('Server started on port ' + port.toString());
});

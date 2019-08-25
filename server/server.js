import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/components/app';

const PORT = process.env.PORT || 9000;
const app = express();

const router = express.Router();

const serverRenderer = (req, res, next) => {
  const context = {};
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    return res.send(
      data.replace(
        '__ROOT__',
        ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )
      )
    );
  });
};

router.use('^/$', serverRenderer);

router.use(
  express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
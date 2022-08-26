import express from 'express'
import { createProxyMiddleware } from "http-proxy-middleware";
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

app.use(cors())

app.use('/api', createProxyMiddleware({
  target: `${ process.env.API_URL }`,
  changeOrigin: true,
  pathRewrite: {
    [`^/api`]: '',
  },
}));

const port = process.env.PORT;
app.listen(port, () => console.log(`Running on port ${ port }`));

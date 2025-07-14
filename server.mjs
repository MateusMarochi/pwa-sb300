import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import https from 'https'
import selfsigned from 'selfsigned'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const certDir = join(process.cwd(), 'certs')
const keyPath = join(certDir, 'key.pem')
const certPath = join(certDir, 'cert.pem')

if (!existsSync(certDir)) {
  mkdirSync(certDir)
}
if (!existsSync(keyPath) || !existsSync(certPath)) {
  const { private: key, cert } = selfsigned.generate([{ name: 'commonName', value: 'localhost' }], { days: 365 })
  writeFileSync(keyPath, key)
  writeFileSync(certPath, cert)
}

const httpsOptions = {
  key: readFileSync(keyPath),
  cert: readFileSync(certPath),
}

const port = parseInt(process.env.PORT || '3000', 10)

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => handle(req, res))
    .listen(port, () => {
      console.log(`> Ready on https://localhost:${port}`)
    })
})

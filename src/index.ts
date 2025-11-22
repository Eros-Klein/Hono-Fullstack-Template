import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import fs from 'fs'
import path from 'path'
import type { HelloResponse } from '../types/model.js'

const app = new Hono()

app.get('/api', (c) => {
  return c.json<HelloResponse>({
    message: 'Hello World'
  })
})

app.get('/:path?', (c) => {
  console.log(c.req.param('path'))

  if (c.req.param('path') === undefined) {
    return c.html(fs.readFileSync('static/index.html', 'utf8'))
  }

  const filePath = path.join('static', c.req.param('path')!)
  const ext = path.extname(filePath)
  const content = fs.readFileSync(filePath, 'utf8')

  if (ext === '.js') {
    return c.text(content, 200, { 'Content-Type': 'application/javascript' })
  } else if (ext === '.html') {
    return c.html(content)
  } else if (ext === '.css') {
    return c.text(content, 200, { 'Content-Type': 'text/css' })
  }

  return c.text(content)
})

serve({
  fetch: app.fetch,
  port: 3005
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
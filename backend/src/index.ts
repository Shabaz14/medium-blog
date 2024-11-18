import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })


app.post('api/v1/signup',(c)=>{
  return c.text("signup router")
})

app.post('api/v1/signin',(c)=>{
  return c.text("signin router")
})

app.post('api/v1/blog',(c)=>{
  return c.text("signup router")
})
app.put('api/v1/blog',(c)=>{
  return c.text("signup router")
})
app.get('api/v1/blog/:id',(c)=>{
  return c.text("signup router")
})
app.get('api/v1/blog/bulk',(c)=>{
  return c.text("signup router")
})
export default app

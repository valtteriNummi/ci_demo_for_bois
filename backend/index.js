import express from 'express'

export const app = express()
export const port = () => 5000

app.get('/', (req, res) => {
    res.send({val: 'Hello World'})
})

export default app;
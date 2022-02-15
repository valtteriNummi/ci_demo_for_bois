import express from 'express'
import 'dotenv/config'

export const app = express()
export const port = () => process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send({val: 'Hello World'})
})

app.listen(port())
console.log(`App running at http://localhost:${port()}`)

export default app;
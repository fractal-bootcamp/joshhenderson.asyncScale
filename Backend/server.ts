import express from 'express'

const app = express()
const port = 3005


app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/other", (req, res) => {
    res.send("hello fractal")
})

app.listen(3005, () => { console.log("server is runnong on port 3005") })
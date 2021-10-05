const app = require("express")()
const port = process.env.port || 3000

app.get("", (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => {
    console.log(`App is up at port: ${port}`)
})
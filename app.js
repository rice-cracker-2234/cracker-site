const app = require("express")()

app.get("", (req, res) => {
    res.send("Hello world!")
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`App is up`)
})
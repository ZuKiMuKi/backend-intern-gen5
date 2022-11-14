const express = require("express")
const { port, url } = require("./config")
const studentRouter = require("./routes/student-route")
const app = express()

app.use(express.json())

app.use("/api", studentRouter.router)

const data = ["big", "boun", "bank", "tolae", "maem"]

app.get("/", (req, res) => {
    console.log(req.query)
    res.send(data)
})

app.post("/", (req, res) => {
    var name = req.body.name
    data.push(name)
    res.send(`you add ${name}`)
})

app.put("/:name/:newName", (req, res) => {
    var name = req.params.name
    var index = data.indexOf(name)
    if(index == -1){
        return res.send(`name: ${name} does not exist in database`)
    }
    var newName = req.params.newName
    data[index] = newName
    res.send(`${name} changed to ${newName}`)
})

app.delete("/:name", (req, res) => {
    var name = req.params.name
    var index = data.indexOf(name)
    if(index == -1){
        return res.send(`name: ${name} does not exist in database`)
    }
    data.splice(index, 1)
    res.send(`${name} has been deleted`)
})

app.listen(port, () => console.log("app is listening at " + url + port))

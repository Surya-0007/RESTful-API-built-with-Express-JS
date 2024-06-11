const express = require("express");
const users = require("./MOCK_DATA.json")
const fs = require("fs")
const port = 8000;
const app = express();

// Middleware - Plugin
app.use(express.urlencoded({extended: false}));

app.get("/api/users", (req, res)=>{
    return res.json(users)
})

app.get("/users", (req, res)=>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})

app.route("/api/users/:id").get((req, res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user)
}).patch((req, res)=>{
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...req.body };
        fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users));
        return res.json(users[userIndex]);
    } else {
        return res.status(404).json({ error: "User not found" });
}
}).delete((req, res)=>{
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users));
        return res.json({ status: "Success" });
    } else {
        return res.status(404).json({ error: "User not found" });
    }
})

app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users), (err, data)=>{
        return res.json("status: Success")
    })
    
})

app.listen(port, ()=>{
    console.log("Server started")
})
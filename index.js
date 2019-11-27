const { app } = require("./bin/routes");


app.listen(27017, ()=>{
    console.log("servidor activado");
})

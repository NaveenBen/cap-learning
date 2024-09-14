const cds=require("@sap/cds")
const rootRouter=require("./routes/rootRouter");
const express=require("express");
cds.on("bootstrap",(app)=>{
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(rootRouter);
    app.use((err,req,res,next)=>{
        res.json({"status":202,"Message":"Internal Server Error"});
        console.log(err.stack);
    });
    console.log(`Server Running`);
});
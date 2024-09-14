try{
    const express=require("express");
    const router=express.Router();
    const rootController=require("../controllers/rootController");
    router.get('/',rootController.index);
    router.get("/data",rootController.data)
    router.all('*',rootController.other);
    module.exports=router;
    }
    catch(err){
        console.log(err);
    }
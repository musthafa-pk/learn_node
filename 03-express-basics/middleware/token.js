module.exports  = function(req,res,next){
    setInterval(() => {
     const TOKEN = "123";
     console.log(`creating token....${TOKEN}`);
     req.user='Musthafa';
     req.token=TOKEN;
     next();
    },2000);
 
 
 }



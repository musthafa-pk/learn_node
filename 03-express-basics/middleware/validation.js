module.exports =function validation(req,res,next){
    if(req.token){
        console.log('Token Approved....');
        next();
        return;
    }


}


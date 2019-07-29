module.exports = {
    sucess: function (req, res) {
        if (req.msg) {
            if(req.tokendata){
                return ({
                    "code": "success",
                    "msg": req.msg,
                    "token": req.tokendata
                })
            }else{
                return ({
                    "code": "success",
                    "msg": req.msg
                    
                })
            }
            
        } else {
            return ({
                "code": "success",
                "data": req
                
            })
        }
    },
    error: function (req, res) {
        if (req.msg) {
            return ({
                "code": "error",
                "msg": req.msg
            })
        }

    }
}
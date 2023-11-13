const asyncHandler=(fn)=>async(req,res,next)=>{
    try {
        await fn(req,req,next)
    } catch (error) {
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}

export {asyncHandler}


// const asyncHandler=(reqHandler)=>{
//     (req,res,next)=>{
//         return Promise.resolve(reqHandler()).catch((err)=> next(err))
//     }
    
// }
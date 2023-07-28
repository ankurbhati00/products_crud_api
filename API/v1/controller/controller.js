const Products = require('../modals/product');

//create data into database
module.exports.createProduct = async (req, res) =>{

    
     try{

        await Products.create(req.body).then((data)=>{
            if(data){
            return res.status(200).json({
                products:req.body,
                message:'product created successfully in db'
            });

            }

            return res.status(500).json({
                message:'Error in creating products'
            })
        });
    }catch(err){

                return res.status(500).json({
                    message:'Invalid request'
                })
    }

    
};

// load data from database
module.exports.loadProducts = async(req, res)=>{


     await Products.find({})
        .then((data)=>{

        if(!data){
            return res.status(200).json({
                message:'data not found'
            })
        }

            return res.status(200).json({
            products:{
                data:data
            }
            });
        }).catch((err)=>{
            console.log(err);
            return res.status(500).json({
                message:'Invalid request'
            });
        })

}

//delete product by id
module.exports.deleteProduct = async (req, res)=>{

try{

await Products.findByIdAndDelete(req.params.id).then((data)=>{

if(!data){
    return res.status(500).json({
        message:'product not found in database.'
    })
}

    return res.status(200).json({
        message:'product deleted successfully !!'
    })
})





}catch(err){

    return res.status(500).json({
        message:'Invalid request'
    })
}



}

//update quantity
module.exports.updateQuantity = async (req, res)=>{

    
try{

    await Products.findByIdAndUpdate(req.params.id,{quantity:req.query.number}).then(async (data)=>{
    
    if(!data){
        return res.status(500).json({
            message:'product not found in database.'
        })
    }
    let updatedData = await Products.findById(req.params.id);
        return res.status(200).json({
            data:updatedData,
            message:'product updated successfully !!'
        })
    })
    
    
    
    
    
    }catch(err){
    
        return res.status(500).json({
            message:'Invalid request'
        })
    }
    


}
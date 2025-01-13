"use server"

import connectDB from "@/config/database"
import cloudinary from "@/models/cloudinary";
import PropertyModel from "@/models/Property";
import { getSessionUser } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const deleteProperty = async(propertyID)=>{
    connectDB();
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId){
        throw new Error("User Id IS Required")
    }

    const {userId} = sessionUser

    const property = await PropertyModel.findById(propertyID);

    if(!property){
        throw new Error("Property Not Found");
    }

   // verify owner 
   if(property.owner.toString() !== userId){
    throw new Error("Unauthorised to delete");
    
   }
   //extract public id from image urls

   const publicIDS = property.images.map((image)=> {
    const parts = image.split("/")
    return parts.at(-1).split('.').at(0)
   })

   /// delete images from cloud
   if(publicIDS.length > 0){
    for (let publicId of publicIDS) {
        await cloudinary.uploader.destroy('propertyPulseBrad'+ publicId)
    }
   }


   await property.deleteOne();

   revalidatePath('/','layout')

   


}


export default deleteProperty;
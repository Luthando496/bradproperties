"use server";

import connectDB from "@/config/database"
import cloudinary from "@/models/cloudinary";
import PropertyModel from "@/models/Property";
import { getSessionUser } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";



const updateProperty=async(propertyID,formData)=>{
    await connectDB();

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId){
        throw new Error("User Id is required");
    }
    const {userId} = sessionUser;
    const amenities = formData.getAll("amenities")

    const existProperty = await PropertyModel.findById(propertyID);

     // verify owner 
   if(existProperty.owner.toString() !== userId){
    throw new Error("Current User Does not Own This Property");
   }

   const propertyData = {
    owner:userId,
    type:formData.get("type"),
    name:formData.get("name"),
    description:formData.get("description"),
    location:{
        street:formData.get("location.street"),
        street:formData.get("location.street"),
        state:formData.get("location.state"),
        zipcode:formData.get("location.zipcode"),
    },
    beds:formData.get("beds"),
    baths:formData.get("baths"),
    square_feet:formData.get("square_feet"),
    amenities,
    rates:{
        nightly:formData.get("rates.nightly"),
        weekly:formData.get("rates.weekly"),
        monthly:formData.get("rates.monthly"),
    },
    seller_info:{
        name:formData.get("seller_info.name"),
        email:formData.get("seller_info.email"),
        phone:formData.get("seller_info.phone"),
    },

}

const updated = await PropertyModel.findByIdAndUpdate(propertyID,propertyData)

revalidatePath('/','layout');
redirect(`/properties/${updated._id}`)


}

export default updateProperty;


"use server"

import connectDB from "@/config/database"
import cloudinary from "@/models/cloudinary";
import PropertyModel from "@/models/Property";
import { getSessionUser } from "@/utils/getSession";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const addProperty = async(formData)=>{
    await connectDB();

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId){
        throw new Error("User Id is required");
    }
    const {userId} = sessionUser;


    const amenities = formData.getAll("amenities")

    const images = formData.getAll("images").filter((image)=> image.name !== "" )

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

    const imageUrls = []
    for (const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer();
        const imageArray = Array.from(new Uint8Array(imageBuffer))
        const imageData = Buffer.from(imageArray);

        //convert to base64 images
        const imageBase64 = imageData.toString("base64")
        //upload

        const result = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`,{
            folder:"propertyPulseBrad"
        })
        imageUrls.push(result.secure_url)
    }

    propertyData.images = imageUrls;


    const newProperty = new PropertyModel(propertyData);
    await newProperty.save();

    revalidatePath('/','layout');
    redirect(`/properties/${newProperty._id}`)
}

export default addProperty
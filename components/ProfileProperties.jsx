"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from "next/image"
import deleteProperty from "@/app/actions/deleteProperty"
import { toast } from "react-toastify"



const ProfileProperties = ({properties:initialProperties}) => {
    const [properties,setProperties]  = useState(initialProperties)


    const handleDelete = async(id)=>{
        const confirm = window.confirm("Are You Sure You Want To Delete This Property");

        if(!confirm) return;

        await deleteProperty(id);

        let updatedProperties = properties.filter((prop)=> prop._id !== id);
    
    setProperties(updatedProperties)

    toast.success("Property Deleted Successfully")
    }


  return properties.map((property)=>(
    <div key={property._id} className="mb-10">
                <Link href={`/properties/${property._id}`}>
                  <Image
                    className="h-32 w-full rounded-md object-cover"
                    src={property.images[0]}
                    width={200}
                    height={200}
                    alt="Property 1"
                  />
                </Link>
                <div className="mt-2">
                  <p className="text-lg font-semibold">{property.name}</p>
                  <p className="text-gray-600">Address: {property.location.street}</p>
                </div>
                <div className="mt-2">
                  <Link
                    href={`/properties/${property._id}/edit`}
                    className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                    type="button"
                    onClick={()=> handleDelete(property._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
  ))
}

export default ProfileProperties

import React from 'react'
import PropertyCard from '@/components/PropertyCard'
// import properties from "@/properties.json"
import connectDB from '@/config/database'
import PropertyModel from '@/models/Property'


const PropertiesPage = async() => {
  await connectDB();
  const properties = await PropertyModel.find({}).lean();
  return (
    <section className='py-6 px-4'>
      <div className="container-xl lg:container mx-auto px-6 py-6">

        {properties.length === 0 ? (<p>No properties found</p>) : (
          <div className="grid cols-1 md:grid-cols-3 gap-6">
            {
              properties.map((property)=>(
                <PropertyCard key={property._id} property={property}  />
              ))
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage

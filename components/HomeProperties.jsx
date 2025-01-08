import React from 'react'
import properties from "@/properties.json"
import PropertyCard from './PropertyCard'

const HomeProperties = () => {

    const recent = properties.slice(0,3)
  return (
    <section className='py-6 px-4'>
      <div className="container-xl lg:container mx-auto px-6 py-6">
        <h2 className="text-3xl mb-6 font-semibold text-amber-600 text-center">Recent Properties</h2>
        {properties.length === 0 ? (<p>No properties found</p>) : (
          <div className="grid cols-1 md:grid-cols-3 gap-6">
            {
              recent.map((property)=>(
                <PropertyCard key={property._id} property={property}  />
              ))
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeProperties

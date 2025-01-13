import PropertyEditForm from '@/components/PropertyEditForm'
import connectDB from '@/config/database'
import PropertyModel from '@/models/Property';
import React from 'react'

const EditPage = async({params}) => {
  await connectDB();
  const {id}  = await params;
  const property = await PropertyModel.findById(id)
  const plainProperty = JSON.parse(JSON.stringify(property))

  if(!property){
    return <h1 className="text-center text-bold text-red">Property Not Found</h1>
  }


  return (
    <section className='bg-teal-50'>

      <div className="container mx-auto max-w-2xl py-24">

        <div className="bg-white px-6 py-8 mb-4 rounded-lg shadow-2xl shadow-black m-4 md:m-0">
          <PropertyEditForm  property={plainProperty} />
        </div>

      </div>

    </section>
  )
}

export default EditPage

import Link from 'next/link'
import React from 'react'

const InfoBoxes = () => {
  return (
    <>
      <section>
      <div class="container-xl lg:container m-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">For Renters</h2>
            <p class="mt-2 mb-4">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <Link
              href="/properties"
              class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Properties
            </Link>
          </div>
          <div class="bg-blue-100 p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold">For Property Owners</h2>
            <p class="mt-2 mb-4">
              List your properties and reach potential tenants. Rent as an
              airbnb or long term.
            </p>
            <Link
              href="/properties/add"
              class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default InfoBoxes

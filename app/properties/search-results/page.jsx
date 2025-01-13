import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import connectDB from '@/config/database'
import PropertyModel from '@/models/Property';
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';



FaArrowAltCircleLeft

const SearchResultsPage = async({searchParams:{location,propertyType}}) => {
    await connectDB();

    const locationRegex = new RegExp(location,'i');

    let query = {
        $or:[
            {name:locationRegex},
            {description:locationRegex},
            {"location.street":locationRegex},
            {"location.city":locationRegex},
            {"location.state":locationRegex},
        ]
    };

    if(propertyType !== "All"){
        let typePattern = new RegExp(propertyType,'i');
        query.type = typePattern;
    }


    const propertiesQuery = await PropertyModel.find(query).lean();
    const properties = JSON.parse(JSON.stringify(propertiesQuery))

    // console.log(properties)

  return (
    <>
      <section className="py-4 bg-teal-700">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 md:px-8">
            <PropertySearchForm  />
        </div>
      </section>

      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto py-6 px-4">
            <Link href={'/properties'} className='flex items-center text-teal-500 hover:underline'>
            <FaArrowAltCircleLeft className='mr-2 mb-1' />Back to Properties
            </Link>

            <h1 className="text-2xl mb-4">Search Results</h1>
            {properties.length === 0 ? <p className='text-center font-semibold text-red-700 text-3xl'>No Properties Found In That Search </p> : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.map(property=>(
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
            )}
        </div>
      </section>
    </>
  )
}

export default SearchResultsPage

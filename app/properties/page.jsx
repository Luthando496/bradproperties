import React from "react";
import PropertyCard from "@/components/PropertyCard";
// import properties from "@/properties.json"
import connectDB from "@/config/database";
import PropertyModel from "@/models/Property";
import Pagination from "@/components/Pagination";

const PropertiesPage = async ({ searchParams }) => {
  const { page = 1, pageSize = 2 } = await searchParams;

  await connectDB();
  const skip = (page - 1) * pageSize;
  const total = await PropertyModel.countDocuments({});
  const properties = await PropertyModel.find({})
    .skip(skip)
    .limit(pageSize)
    .lean();

    const showPagination = total > pageSize
  return (
    <section className="py-6 px-4">
      <div className="container-xl lg:container mx-auto px-6 py-6">
        {properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}

        {showPagination && <Pagination page={parseInt(page)} pageSize={parseInt(pageSize)}  total={parseInt(total)} />}
      </div>
    </section>
  );
};

export default PropertiesPage;

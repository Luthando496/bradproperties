"use client";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";

const PropertyImages = ({ images }) => {
  return (
    <Gallery>
      <section className="bg-blue-50 shadow-2xl shadow-amber-700 rounded-t-xl p-4">
        <div className="container mx-auto">
          {images.length === 3 ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                {images.slice(0, 2).map((image, index) => (
                  <div key={index} className="col-span-1">
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1024"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          alt="property-images"
                          src={image}
                          className="h-[420px] object-cover w-full rounded-md"
                          width={1800}
                          height={400}
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>
              <div className="w-full mt-4 h-[400px]">
                <Item
                  original={images[2]}
                  thumbnail={images[2]}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      alt="property-images"
                      src={images[2]}
                      className="h-[420px] object-cover w-full rounded-md"
                      width={1800}
                      height={400}
                      priority={true}
                    />
                  )}
                </Item>
              </div>
            </>
          ) : images.length === 5 ? (
            <>
              <div className="grid my-7 grid-cols-2 gap-4">
                {images.slice(0, 2).map((image, index) => (
                  <div key={index} className="col-span-1">
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1024"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          alt="property-images"
                          src={image}
                          className="h-[420px] object-cover w-full rounded-md"
                          width={1800}
                          height={400}
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>

              <div className="w-full my-8-4 h-[400px]">
                <Item
                  original={images[2]}
                  thumbnail={images[2]}
                  width="1024"
                  height="768"
                >
                  {({ ref, open }) => (
                    <Image
                      ref={ref}
                      onClick={open}
                      alt="property-images"
                      src={images[2]}
                      className="h-[420px] object-cover w-full rounded-md"
                      width={1800}
                      height={400}
                      priority={true}
                    />
                  )}
                </Item>
              </div>

              <div className="grid my-10 grid-cols-2 gap-4">
                {images.slice(3, 5).map((image, index) => (
                  <div key={index} className="col-span-1">
                    <Item
                      original={image}
                      thumbnail={image}
                      width="1024"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <Image
                          ref={ref}
                          onClick={open}
                          alt="property-images"
                          src={image}
                          className="h-[420px] object-cover w-full rounded-md"
                          width={1800}
                          height={400}
                          priority={true}
                        />
                      )}
                    </Item>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {images.map((image, index) => (
                <div key={index} className="col-span-1">
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1024"
                    height="768"
                  >
                    {({ ref, open }) => (
                      <Image
                        ref={ref}
                        onClick={open}
                        alt="property-images"
                        src={image}
                        className="h-[420px] object-cover w-full rounded-md"
                        width={1800}
                        height={400}
                        priority={true}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
};

export default PropertyImages;

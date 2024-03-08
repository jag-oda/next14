import NextImage from "next/image";

/*type ProductCoverImageProps = {
    coverImage: {
        src: string,
        alt: string
    }
}; */

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
        <NextImage
            width={320}
            height={320}
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-center p-4 duration-150 hover:scale-110 md:object-scale-down"
        />
    </div>
    )
};
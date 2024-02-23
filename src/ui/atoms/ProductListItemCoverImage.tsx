type ProductCoverImageProps = {
    coverImage: {
        src: string,
        alt: string
    }
};

export const ProductCoverImage = ({coverImage: {src, alt}}: ProductCoverImageProps) => {
    return (
        <div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
            <img 
                src={src}
                alt={alt} 
                className="w-64 h-64 object-cover rounded-t-xl"
            />
        </div>
    )
};
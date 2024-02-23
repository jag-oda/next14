export type ProductItemType = {
    id: string
    name: string,
    price: number,
    description: string,
    category: string,
    coverImage: {
        src: string,
        alt: string,
    }
}
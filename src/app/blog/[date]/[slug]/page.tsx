import Link from "next/link";

export default await function BlogPage({params}: {params: {date: string, slug: string}}) {
    return (
        <div>
            <h1>blog {params.date}, {params.slug}</h1>
            <Link href="/product/1">Przejdź do produktu 123</Link>

        </div>
    )
};
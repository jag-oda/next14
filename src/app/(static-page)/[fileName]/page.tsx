import { notFound } from "next/dist/client/components/not-found";
import { ComponentType } from "react"

export default async function StaticPages({params} : {params: { fileName: string }}) {
    const PageContent = await import(`./${params.fileName}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);

    return (
        <article className="prose">
            <PageContent />
        </article>
    )

}
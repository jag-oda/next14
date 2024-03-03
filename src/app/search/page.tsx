type SearchProductsPageProps = {
	searchParams: {
		query: string;
	};
};

export default async function SearchProductsPage({ searchParams }: SearchProductsPageProps) {
    return <> tu będzie to co się znajdzie albo się nie znajdzie {searchParams.query} </>
}
type CollectionDetalistDescriptionProps = {
        name: string,
        description: string,
};

export const CollectionDetailsDescription = (params: CollectionDetalistDescriptionProps) => {
    return (
        <div className="max-w-lm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{params.name}</h1>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{params.description}</p>
            </div>
        </div>
    );
}
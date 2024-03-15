import { TypedDocumentString } from "@/gql/graphql";

type ExecuteGraphqlArgs<TResult, TVariables> = {
	query: TypedDocumentString<TResult, TVariables>;
	variables?: TVariables;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
};

export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	cache,
	headers,
	next,
}: ExecuteGraphqlArgs<TResult, TVariables>): Promise<TResult> => {
    
    if(!process.env.GRAPHQL_URL) {
        throw TypeError('Graphql URL is not defined')
    };

    const res = await fetch(process.env.GRAPHQL_URL as string, {
        method: "POST",
        body: JSON.stringify({
           query,
           variables
        }),
        cache,
		next,
        headers: {
            "Content-Type": "application/json"
        }
    });

    type GraphQLResponse<T> = 
        | {data?: undefined, errors: {message: string}[]}
        | {data: T, errors: undefined};
    
    const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

    if(graphqlResponse.errors){
        throw TypeError(`GraphQL Error`, { cause: graphqlResponse.errors });
    };   

    return graphqlResponse.data;
}
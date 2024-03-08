/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetSlug($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItem\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetSlugDocument,
    "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  id\n  products {\n    images {\n      url\n    }\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections(take: 4) {\n    data {\n      ...CollectionListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "fragment DataForPagination on ProductList {\n  meta {\n    count\n    total\n  }\n}": types.DataForPaginationFragmentDoc,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n  }\n  images {\n    url\n    width\n    height\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}": types.ProductsGetListBySearchDocument,
    "query SuggestedProductsGetList {\n  products {\n    data {\n      rating\n      ...ProductListItem\n    }\n  }\n}": types.SuggestedProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetSlug($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItem\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetSlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  id\n  products {\n    images {\n      url\n    }\n  }\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections(take: 4) {\n    data {\n      ...CollectionListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment DataForPagination on ProductList {\n  meta {\n    count\n    total\n  }\n}"): typeof import('./graphql').DataForPaginationFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n  }\n  images {\n    url\n    width\n    height\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsGetByCategorySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsGetList {\n  products {\n    data {\n      rating\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

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
    "mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartChangeQuantityBySingleProduct($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartChangeQuantityBySingleProductDocument,
    "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...CartItem\n  }\n}": types.CartCreateDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}": types.CartFragmentDoc,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}": types.CartItemFragmentDoc,
    "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CollectionGetSlug($slug: String!) {\n  collection(slug: $slug) {\n    ...CollectionListItem\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetSlugDocument,
    "fragment CollectionListItem on Collection {\n  name\n  slug\n  description\n  id\n  products {\n    images {\n      url\n    }\n  }\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList {\n  collections(take: 4) {\n    data {\n      ...CollectionListItem\n    }\n  }\n}": types.CollectionsGetListDocument,
    "fragment DataForPagination on ProductList {\n  meta {\n    count\n    total\n  }\n}": types.DataForPaginationFragmentDoc,
    "mutation ProductAddNewReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}": types.ProductAddNewReviewDocument,
    "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetReviews($productId: ID!) {\n  product(id: $productId) {\n    reviews {\n      author\n      createdAt\n      description\n      id\n      rating\n      title\n      email\n    }\n  }\n}": types.ProductGetReviewsDocument,
    "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n  }\n  images {\n    url\n    width\n    height\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductReview on Review {\n  author\n  createdAt\n  description\n  id\n  rating\n  title\n  email\n}": types.ProductReviewFragmentDoc,
    "query ProductsGetByCategorySlug($slug: String!) {\n  category(slug: $slug) {\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsGetByCategorySlugDocument,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n    ...DataForPagination\n  }\n}": types.ProductsGetListBySearchDocument,
    "query SuggestedProductsGetList {\n  products {\n    data {\n      rating\n      ...ProductListItem\n    }\n  }\n}": types.SuggestedProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeQuantityBySingleProduct($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartChangeQuantityBySingleProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {\n  cartRemoveItem(id: $cartId, productId: $productId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
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
export function graphql(source: "mutation ProductAddNewReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  reviewCreate(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ProductAddNewReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetReviews($productId: ID!) {\n  product(id: $productId) {\n    reviews {\n      author\n      createdAt\n      description\n      id\n      rating\n      title\n      email\n    }\n  }\n}"): typeof import('./graphql').ProductGetReviewsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  name\n  price\n  description\n  id\n  categories {\n    name\n  }\n  images {\n    url\n    width\n    height\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductReview on Review {\n  author\n  createdAt\n  description\n  id\n  rating\n  title\n  email\n}"): typeof import('./graphql').ProductReviewFragmentDoc;
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

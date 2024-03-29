/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartAddProductMutation = { cartAddItem: { id: string } };

export type CartChangeQuantityBySingleProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeQuantityBySingleProductMutation = { cartChangeItemQuantity: { id: string } };

export type CartCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> } };

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> } | null };

export type CartItemFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, description: string, rating?: number | null, images: Array<{ url: string }> } }> };

export type CartRemoveProductMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveProductMutation = { cartRemoveItem: { id: string } };

export type CartSetProductQuantityMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartSetProductQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesGetListQuery = { categories: { data: Array<{ name: string, slug: string }> } };

export type CollectionGetSlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionGetSlugQuery = { collection?: { name: string, slug: string, description: string, id: string, products: Array<{ name: string, price: number, description: string, id: string, rating?: number | null, images: Array<{ url: string, width: number, height: number, alt: string }>, categories: Array<{ name: string }> }> } | null };

export type CollectionListItemFragment = { name: string, slug: string, description: string, id: string, products: Array<{ images: Array<{ url: string }> }> };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ name: string, slug: string, description: string, id: string, products: Array<{ images: Array<{ url: string }> }> }> } };

export type DataForPaginationFragment = { meta: { count: number, total: number } };

export type ProductAddNewReviewMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ProductAddNewReviewMutation = { reviewCreate: { id: string } };

export type ProductGetByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ProductGetByIdQuery = { product?: { name: string, price: number, description: string, id: string, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> } | null };

export type ProductGetReviewsQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductGetReviewsQuery = { product?: { reviews: Array<{ author: string, createdAt: unknown, description: string, id: string, rating: number, title: string, email: string }> } | null };

export type ProductListItemFragment = { name: string, price: number, description: string, id: string, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> };

export type ProductReviewFragment = { author: string, createdAt: unknown, description: string, id: string, rating: number, title: string, email: string };

export type ProductsGetByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsGetByCategorySlugQuery = { category?: { products: Array<{ name: string, price: number, description: string, id: string, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  order?: InputMaybe<SortDirection>;
  orderBy?: InputMaybe<ProductSortBy>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ name: string, price: number, description: string, id: string, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> }>, meta: { count: number, total: number } } };

export type ProductsGetListBySearchQueryVariables = Exact<{
  search: Scalars['String']['input'];
}>;


export type ProductsGetListBySearchQuery = { products: { data: Array<{ name: string, price: number, description: string, id: string, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> }>, meta: { count: number, total: number } } };

export type SuggestedProductsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type SuggestedProductsGetListQuery = { products: { data: Array<{ rating?: number | null, name: string, price: number, description: string, id: string, categories: Array<{ name: string }>, images: Array<{ url: string, width: number, height: number, alt: string }> }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}
    `, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CartItemFragmentDoc = new TypedDocumentString(`
    fragment CartItem on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}
    `, {"fragmentName":"CartItem"}) as unknown as TypedDocumentString<CartItemFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionListItem on Collection {
  name
  slug
  description
  id
  products {
    images {
      url
    }
  }
}
    `, {"fragmentName":"CollectionListItem"}) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const DataForPaginationFragmentDoc = new TypedDocumentString(`
    fragment DataForPagination on ProductList {
  meta {
    count
    total
  }
}
    `, {"fragmentName":"DataForPagination"}) as unknown as TypedDocumentString<DataForPaginationFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductReviewFragmentDoc = new TypedDocumentString(`
    fragment ProductReview on Review {
  author
  createdAt
  description
  id
  rating
  title
  email
}
    `, {"fragmentName":"ProductReview"}) as unknown as TypedDocumentString<ProductReviewFragment, unknown>;
export const CartAddProductDocument = new TypedDocumentString(`
    mutation CartAddProduct($cartId: ID!, $productId: String!, $quantity: Int!) {
  cartAddItem(
    id: $cartId
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddProductMutation, CartAddProductMutationVariables>;
export const CartChangeQuantityBySingleProductDocument = new TypedDocumentString(`
    mutation CartChangeQuantityBySingleProduct($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartChangeQuantityBySingleProductMutation, CartChangeQuantityBySingleProductMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($id: ID) {
  cartFindOrCreate(id: $id, input: {}) {
    ...CartItem
  }
}
    fragment CartItem on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    ...CartItem
  }
}
    fragment CartItem on Cart {
  id
  items {
    product {
      id
      name
      price
      description
      rating
      images {
        url
      }
    }
    quantity
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveProductDocument = new TypedDocumentString(`
    mutation CartRemoveProduct($cartId: ID!, $productId: ID!) {
  cartRemoveItem(id: $cartId, productId: $productId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartRemoveProductMutation, CartRemoveProductMutationVariables>;
export const CartSetProductQuantityDocument = new TypedDocumentString(`
    mutation CartSetProductQuantity($cartId: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $cartId, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartSetProductQuantityMutation, CartSetProductQuantityMutationVariables>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CollectionGetSlugDocument = new TypedDocumentString(`
    query CollectionGetSlug($slug: String!) {
  collection(slug: $slug) {
    ...CollectionListItem
    products {
      ...ProductListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  name
  slug
  description
  id
  products {
    images {
      url
    }
  }
}
fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<CollectionGetSlugQuery, CollectionGetSlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections(take: 4) {
    data {
      ...CollectionListItem
    }
  }
}
    fragment CollectionListItem on Collection {
  name
  slug
  description
  id
  products {
    images {
      url
    }
  }
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductAddNewReviewDocument = new TypedDocumentString(`
    mutation ProductAddNewReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductAddNewReviewMutation, ProductAddNewReviewMutationVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID) {
  product(id: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductGetReviewsDocument = new TypedDocumentString(`
    query ProductGetReviews($productId: ID!) {
  product(id: $productId) {
    reviews {
      author
      createdAt
      description
      id
      rating
      title
      email
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetReviewsQuery, ProductGetReviewsQueryVariables>;
export const ProductsGetByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetByCategorySlug($slug: String!) {
  category(slug: $slug) {
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<ProductsGetByCategorySlugQuery, ProductsGetByCategorySlugQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int!, $skip: Int!, $order: SortDirection, $orderBy: ProductSortBy) {
  products(take: $take, skip: $skip, order: $order, orderBy: $orderBy) {
    data {
      ...ProductListItem
    }
    ...DataForPagination
  }
}
    fragment DataForPagination on ProductList {
  meta {
    count
    total
  }
}
fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListBySearchDocument = new TypedDocumentString(`
    query ProductsGetListBySearch($search: String!) {
  products(search: $search) {
    data {
      ...ProductListItem
    }
    ...DataForPagination
  }
}
    fragment DataForPagination on ProductList {
  meta {
    count
    total
  }
}
fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<ProductsGetListBySearchQuery, ProductsGetListBySearchQueryVariables>;
export const SuggestedProductsGetListDocument = new TypedDocumentString(`
    query SuggestedProductsGetList {
  products {
    data {
      rating
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  name
  price
  description
  id
  rating
  categories {
    name
  }
  images {
    url
    width
    height
    alt
  }
}`) as unknown as TypedDocumentString<SuggestedProductsGetListQuery, SuggestedProductsGetListQueryVariables>;
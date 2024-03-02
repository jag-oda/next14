import { Route } from "next";
import { CollectionListItemFragment } from "@/gql/graphql";
import { ActiveLink } from "../atoms/ActiveLink";
import Link from "next/link";

type CollectionItemProps = {
	collection: CollectionListItemFragment
};

//TODO: ZDJĘCIE DO COLLECTION!!!! 
export const CollectionItem = ({collection} : CollectionItemProps) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{collection.name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{collection.description}</p>
            <Link href={`/collections/${collection.slug}` as Route} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Go to collection
                 <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
        </div>
    </div>
    )
};
"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Route } from 'next';
import useDebounce from '@/utils/debounce';

export const Searchbar = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const queryParamsInString = searchParams.get("query")?.toString();
    const [searchValue, setSearchValue]= useState<string>(queryParamsInString || "");
    const debouncedSearch = useDebounce(searchValue, 500)

    useEffect(() => {
        if (debouncedSearch) {
			    router.push(`/search?query=${debouncedSearch}`);
		    }
    }, [debouncedSearch, router]);

      const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		    setSearchValue(event.target.value);
	    };

    return (
		<div className="max-w-md ml-24">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           <Search size={20} color="#827d7d"/>
        </div>
        <input type="search" 
              className=" bg-gray-50 border border-gray-300 text-slate-500 focus:text-slate-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Search" 
              onChange={onChangeSearchValue}
        />
    </div>
</div>
	)
}

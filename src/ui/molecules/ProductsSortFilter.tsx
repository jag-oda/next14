"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { type Route } from "next";
import useDebounce from '@/utils/debounce';



export const ProductsSortFilter = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryInString = searchParams.get("sort")?.toString();
    const [selectedOption, setSelectedOption] = useState(urlQueryInString || "");
    const debouncedSort = useDebounce(selectedOption, 1500)

    useEffect(() => {
		if (debouncedSort) {
			router.push(`/products?sort=${debouncedSort}`);
		}
	}, [debouncedSort, router, selectedOption]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedOption(event.target.value);
	};

    const createQueryString = useCallback((params: Record<string, string>) => {
		const searchParams = new URLSearchParams();
		Object.entries(params).forEach(([name, value]) => {
			searchParams.append(name, value);
		});
		return searchParams.toString();
	}, []);


    const sortOptions = [
        { value: "rating", label: "Rating (High to Low)", "data-testid": "sort-by-rating" },
        { value: "-rating", label: "Rating (Low to High)", "data-testid": "sort-by-rating" },
        { value: "price", label: "Price (Low to High)", "data-testid": "sort-by-price" },
        { value: "-price", label: "Price (High to Low)", "data-testid": "sort-by-price" }
    ];
    

	return (
		<select
			className="cursor-pointer rounded-md border border-r-8 border-transparent px-2 py-1 text-sm font-light outline outline-2 lg:mt-1"
			value={selectedOption}
			onChange={handleOptionChange}
		>
			{sortOptions.map((option) => (
				<option key={option.value} data-testid={option["data-testid"]} value={option.value}>
					<Link
						href={
							(`/products` +
								"?" +
								createQueryString({
									sort: option.value,
								})) as Route
						}
					>
						{option.label}
					</Link>
				</option>
			))}
		</select>
	);

}
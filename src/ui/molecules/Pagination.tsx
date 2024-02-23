import { type Route } from "next";
import { ActiveLink } from '@/ui/atoms/ActiveLink';
import clsx from 'clsx';

type PaginationPropsType = {
    items: number,
    currentPage: number,
    pageSize: number,
};

export const Pagination = (props: PaginationPropsType) => {
    const pagesCount = Math.ceil(props.items / props.pageSize); 
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div className="w-full border-solid h-10" aria-label="pagination Navigation">
            <ul className="flex justify-between list-none items-center mt-5">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={clsx(`flex justify-center items-center w-2 h-2 border-solid cursor-pointer`
                         &&  (page === props.currentPage) && `underline` )}
                    >
                         <ActiveLink 
								href={("/products/" + page) as Route}
								aria-description={`PAGE ${page}`}
                                exact={true}
							>
								{page}
							</ActiveLink>
                     </li>
                ))}
            </ul>
        </div>
    );
}

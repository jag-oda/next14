import { Route } from 'next';
import { ActiveLink } from '@/ui/atoms/ActiveLink';

type PaginationPropsType = {
    pageCount: number,
};

export const Pagination = (props : PaginationPropsType) => {    
    const { pageCount } = props;

    return (
        <div aria-label="pagination">
            <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
   
     {Array.from(Array(pageCount)).map((_, index) => {
            const pageNumber = index+1
            return ( 
            <li
            key={`productPage-${pageNumber}`}
            className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            
        >
             <ActiveLink 
                    href={("/products/" + pageNumber) as Route}
                    aria-description={`PAGE ${pageNumber}`}
                    exact={true}
                    isPaginationLink
                >
                     {pageNumber}
                </ActiveLink>
         </li>
            )
        })
        } 
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</div>
    )

  /*  return (
        <div className="w-full border-solid h-10" aria-label="pagination Navigation" style={{border: '1px solid blue'}}>
            <ul className="flex justify-between list-none items-center mt-5">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={clsx(`flex justify-center items-center w-2 h-2 border-solid cursor-pointer text-blue-300`
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
    ); */
}

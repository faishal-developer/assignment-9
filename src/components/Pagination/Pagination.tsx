// 'use client'
import ReactPaginate from 'react-paginate';
import style from './pagination.module.scss'

type Iprops={
    page:number;
    total:number;
    handlePageClick:()=>void
}
const CustomPagination = ({page=0,total=0,handlePageClick}:Iprops) => {


    return(
      <>
         <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={page}
          pageCount={total}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName={style.pagination}
        previousLinkClassName={style.pagination_link}
        nextLinkClassName={style.pagination_link}
        disabledClassName={style.pagination_link_disabled}
        activeClassName={style.pagination_link_active}
        />
        
      </>
    )

};

export default CustomPagination;
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

import { setPage, setPagesArray } from '../../store/slices/paginationSlice'
import { setScroll } from '../../store/slices/windowSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch()
  const { page, pagesArray } = useAppSelector(state => state.pagination)
  
  const changePage = (page:number, pageEvent:string) => {
    dispatch(setScroll(window.scrollY))
    dispatch(setPage({ page, pageEvent }))
    dispatch(setPagesArray())
  }
  
  return (
    <div className='max-w-xs mx-auto'>
      <div className='flex justify-around items-center'>
        <MdKeyboardArrowLeft onClick={() => changePage(page, 'decrement')} className='h-8 w-8 cursor-pointer fill-white bg-slate-200 rounded-md hover:bg-slate-400 transition-colors' />
        {pagesArray.map((p) => (
          <button
            key={p}
            onClick={() => changePage(p, 'default')}
            className={`${
              page === p ? 'bg-slate-500' : 'bg-slate-300'
            } px-3 hover:bg-slate-500`}>
            {p}
          </button>
        ))}
        <MdKeyboardArrowRight onClick={() => changePage(page, 'increment')} className='h-8 w-8 cursor-pointer fill-white bg-slate-200 rounded-md hover:bg-slate-400 transition-colors' />
      </div>
    </div>
  )
}

export default Pagination

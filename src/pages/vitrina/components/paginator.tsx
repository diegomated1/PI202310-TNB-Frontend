import { useEffect, useState } from "react";
import Icons from "../../../components/Icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface IPaginatorProps{
    pages: number
    currentPage: number
    changePage: (page:number)=>void
}

export default function Paginator({pages, currentPage, changePage}:IPaginatorProps){

    return (
        <div className="flex items-center justify-between border-t border-gray-200 px-1 py-2 sm:px-1">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                    onClick={()=>{changePage(currentPage-1)}}
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-1 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Previous</span>
                  <Icons.left/>
                </button>
                {[...Array(pages)].map((x,i) => (
    
                  <button
                    key={i}
                    onClick={()=>{changePage(i+1)}}
                    aria-current="page"
                    className= {`
                    ${currentPage==i+1?'bg-red-200':''}
                    w-6 relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-1 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
                  >
                    {i+1}
                  </button> 
    
                ))}
                
                <button
                    onClick={()=>{changePage(currentPage+1)}}
                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-1 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                >
                  <span className="sr-only">Next</span>
                  <Icons.right></Icons.right>
                </button>
              </nav>
            </div>
          </div>
        </div>
    )
          
}


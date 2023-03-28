import { useEffect, useState } from "react";
import ICard from "../interfaces/ICard";
import Icons from "./Icons"

type PagerProps = {
  cardsArray: any[];
  setParcialCards: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Pager({cardsArray, setParcialCards}: PagerProps) {


  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [objectsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=>{
    const totalPages = Math.ceil(cardsArray.length/objectsPerPage);
    const _pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      _pageNumbers.push(i);
    }
    setPageNumbers(_pageNumbers);
  }, [cardsArray]);

  useEffect(()=>{
    const indexOfLastObject = currentPage * objectsPerPage;
    const indexOfFirstObject = indexOfLastObject - objectsPerPage;
    
    const currentObjects = cardsArray.slice(indexOfFirstObject, indexOfLastObject);
    setParcialCards(currentObjects);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-1 py-2 sm:px-1">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <button
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-1 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              disabled={currentPage == 1} onClick={() => setCurrentPage(currentPage=>currentPage - 1)}
            >
              <span className="sr-only">Previous</span>
              <Icons.left/>
            </button>
            {pageNumbers.map((number,i) => (

              <button
                aria-current="page"
                className= {`
                ${currentPage==i+1?'bg-blue-200':''}
                relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-1 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
                onClick={() => setCurrentPage(i+1)} key = {i}
              >
                {number}
              </button> 

            ))}
            
            <button
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-1 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" disabled={currentPage == Math.ceil(cardsArray.length/objectsPerPage)} 
              onClick={() => setCurrentPage(currentPage=>currentPage + 1)}
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


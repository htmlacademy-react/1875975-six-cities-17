import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';

import { SortName } from '../../types/types';
import { SortOption } from '../../const';
import { changeSort } from '../../store/action';

type SortingProps = {
  currentSorting: SortName;
}

function Sorting({currentSorting}: SortingProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sortingRef = useRef<HTMLElement>(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideSortingList = (evt: MouseEvent) => {
      if (evt.target instanceof HTMLElement && sortingRef.current && !sortingRef.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', hideSortingList);

    return () => {
      document.removeEventListener('click', hideSortingList);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        ref={sortingRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleDropdownClick}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {Object.values(SortOption).map((option) => (
            <li
              key={option}
              className={`places__option ${option === currentSorting ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => dispatch(changeSort(option))}
            >
              {option}
            </li>
          ))}
        </ul>)}
    </form>
  );
}

export default Sorting;

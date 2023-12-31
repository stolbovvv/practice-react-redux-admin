import { useDispatch, useSelector } from 'react-redux';
import { changed as changedFilter } from '../../slices/filters';

import './filter-item.css';

function FilterItem({ data: { type, label } }) {
  const filter = useSelector(({ filters }) => filters.current);
  const dispatch = useDispatch();

  return (
    <button
      className={`filter-item filter-item_${type}${type === filter ? ' is-active' : ''}`}
      onClick={() => dispatch(changedFilter(type))}
    >
      {label}
    </button>
  );
}

export { FilterItem };

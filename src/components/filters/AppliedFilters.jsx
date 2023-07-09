import { useSelector, useDispatch } from 'react-redux';
import { clearFilter } from '../../reducers/ProductReducers';

const AppliedFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.product.filter);

  const onClear = () => {
    dispatch(clearFilter());
  };

  return (
    <>
      {filter && (
        <div>
          <strong className="has-text-primary-dark">
            Applied Filters
          </strong>
          <div className="mt-2">

            {/* rate */}
            {filter.rate && (
              <div className="mt-1">
                <span className="tag is-primary is-light">
                  {filter.rate === 4 && <>⭐⭐⭐⭐ & Up</>}
                  {filter.rate === 3 && <>⭐⭐⭐ & Up</>}
                  {filter.rate === 2 && <>⭐⭐ & Up</>}
                  {filter.rate === 1 && <>⭐ & Up</>}
                </span>
              </div>
            )}

            {/* price */}
            {filter.price && (
              <div className="mt-1">
                <span className="tag is-primary is-light">
                  {filter.price === 50 && <>$0 - $50</>}
                  {filter.price === 100 && <>$50 - $100</>}
                  {filter.price === 150 && <>$100 - $150</>}
                  {filter.price === 200 && <>$150 - $200</>}
                </span>
              </div>
            )}
          </div>

          <span
            className="tag is-danger is-light is-small mt-2 is-pointer"
            onClick={() => onClear()}>
            ❌ Clear
          </span>

          <hr />
        </div>
      )}
    </>
  )
}

export default AppliedFilters
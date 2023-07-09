import AppliedFilters from './filters/AppliedFilters'
import RateFilters from './filters/RateFilters'
import PriceFilter from './filters/PriceFilter'

const Filter = () => {
  return (
    <>
      <h2 className="title is-5 mb-5">💈Filters</h2>
      <div className="card">
        <div className="card-content">
          <div className="content">
            <AppliedFilters />
            <RateFilters />
            <PriceFilter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;

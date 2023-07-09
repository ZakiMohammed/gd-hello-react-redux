import { useDispatch } from 'react-redux';
import { setRate } from '../../reducers/ProductReducers';

const RateFilters = () => {
  const dispatch = useDispatch();

  const onRateClick = value => {
    dispatch(setRate(value));
  };

  return (
    <div>
      <strong className="has-text-primary-dark">🌟 Rating</strong>
      <div className="mt-2">
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onRateClick(4)}>
          ⭐⭐⭐⭐ & Up
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onRateClick(3)}>
          ⭐⭐⭐ & Up
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onRateClick(2)}>
          ⭐⭐ & Up
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onRateClick(1)}>
          ⭐ & Up
        </button>
      </div>
      <hr />
    </div>
  )
}

export default RateFilters
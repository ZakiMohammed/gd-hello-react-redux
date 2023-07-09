import { useDispatch } from 'react-redux';
import { setPrice } from '../../reducers/ProductReducers';

const PriceFilter = () => {
  const dispatch = useDispatch();

  const onPriceClick = value => {
    dispatch(setPrice(value));
  };

  return (
    <div>
      <strong className="has-text-primary-dark">🪙 Price</strong>
      <div className="mt-2">
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onPriceClick(50)}>
          $0 - $50
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onPriceClick(100)}>
          $50 - $100
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onPriceClick(150)}>
          $100 - $150
        </button>
        <button
          className="button is-fullwidth is-white is-justify-content-left p-0 mb-1"
          type="button"
          onClick={() => onPriceClick(200)}>
          $150 - $200
        </button>
      </div>
    </div>
  )
}

export default PriceFilter
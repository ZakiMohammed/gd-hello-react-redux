import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <>
      <div className="column is-4">
        <div className="card equal-height">
          <div className="card-image">
            <figure className="image is-square">
              <img src={product.image} alt={product.title} className='is-contain is-product' />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h3 className='title is-5 pb-2'>{product.title}</h3>
              <h4 className='subtitle has-text-grey is-6'>{product.category?.toUpperCase()}</h4>
              <div className='title is-3 mb-1'></div>
            </div>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item"><strong className='has-text-primary'>${product.price}</strong></div>
            <div className="card-footer-item">⭐ {product.rating?.rate}</div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Product

Product.propTypes = {
  product: PropTypes.object,
};
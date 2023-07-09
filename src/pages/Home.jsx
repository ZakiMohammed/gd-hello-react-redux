import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const Home = () => {
  return (
    <>
      <h1 className='title has-text-centered has-text-primary mb-6'>👋 HelloRedux</h1>

      <div className="columns">
        <div className="column is-3">
          <Filter />
        </div>
        <div className="column">
          <ProductList />
        </div>
      </div>
    </>
  )
}

export default Home
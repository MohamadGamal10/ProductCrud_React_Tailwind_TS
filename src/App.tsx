import ProductCard from './components/ProductCard'

function App() {

  return (
    <div>
    <div className=" m-5  grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-items-center p-2 rounded-md">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
    </div>
  )
}

export default App

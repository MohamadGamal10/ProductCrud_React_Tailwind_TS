import { useState } from 'react';
import ProductCard from './components/ProductCard'
import Modal from './components/ui/Modal';
import { formInputsList, productList } from './data'
import Button from './components/ui/Button';
import Input from './components/ui/Input';

function App() {
  // modal 
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  // get data
  const renderProductList = productList.map((product) => <ProductCard key={product.id} product={product} />);
  const renderFormInputList = formInputsList.map((input) => (
    <div className='flex flex-col'>
      <label htmlFor={input.id} className='text-lg mb-[2px] text-sm font-md text-gray-700'>{input.label}</label>
      <Input key={input.id} type='text' name={input.name} id={input.id} />
      {/* <input type={input.type} name={input.name} id={input.id} className="border border-gray-300" /> */}
    </div>
  ));

  return (
    <main className="container">
      <Button onClick={open} className={"bg-green-600"}>ADD A NEW PRODUCT</Button>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} close={close} title={"ADD A NEW PRODUCT"} >
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3 font-bold">
            <Button onClick={close} className={"bg-indigo-500"}>Submit</Button>
            <Button onClick={close} className={"bg-red-500"}>Close</Button>
          </div>
        </form>
      </Modal>
    </main>
  )
}

export default App

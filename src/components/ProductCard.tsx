import { IProduct } from "../interfaces"
import { txtSlicer } from "../utils/function"
import Image from "./Image"
import Button from "./ui/Button"

interface IProps {
   product: IProduct
}

const ProductCard = ({ product }: IProps) => {
    const { title, description, imageURL, price, colors, category } = product;
    return (
        <div className="border p-2 rounded-md flex flex-col max-w-sm md:max-w-lg mx-auto ">
            <Image imageURL={imageURL} alt={"product"} className="w-full rounded-md " />
            {/* <img src="https://images.pexels.com/photos/30230100/pexels-photo-30230100/free-photo-of-stunning-alpine-mountain-peak-with-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" className="w-full" /> */}
            <h3>{title}</h3>
            <p>{txtSlicer(description)}</p>

            <div className="flex items-center my-4 space-x-2">
            {colors.map((color) => (<span style={{ backgroundColor: color }} key={color} className="w-5 h-5 rounded-full cursor-pointer " />))}
                {/* <span className="w-5 h-5 rounded-full cursor-pointer bg-red-600" />
                <span className="w-5 h-5 rounded-full cursor-pointer bg-blue-600" />
                <span className="w-5 h-5 rounded-full cursor-pointer bg-yellow-400" /> */}
            </div>

            <div className="flex justify-between items-center">
                <span>${price}</span>
                <Image imageURL={category.imageURL} alt={"product"} className="w-10 h-10 rounded-full object-center" />
                {/* <img src="https://images.pexels.com/photos/30230100/pexels-photo-30230100/free-photo-of-stunning-alpine-mountain-peak-with-clear-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" className="w-10 h-10 rounded-full" /> */}
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">
                <Button onClick={() => console.log("edit")} className={"bg-blue-600"}>EDIT</Button>
                <Button className={"bg-red-600"}>DELETE</Button>
            </div>
        </div>
    )
}

export default ProductCard
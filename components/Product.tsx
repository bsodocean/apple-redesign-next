import { ShoppingCartIcon } from "@heroicons/react/outline";
import { addToBasket } from "../redux/basketSlice";
import { useDispatch } from "react-redux/";
import { urlFor } from "../sanity";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket(product));

    toast.success(`${product.title} added to basket!`, {
      position: "bottom-center",
    });
  };

  return (
    <div className='flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10'>
      <div className='relative h-64 w-full md:h-72'>
        <Image
          layout='fill'
          objectFit='contain'
          src={urlFor(product.image[0]).url()}
          alt=''
        />
      </div>

      <div className='flex flex-1 items-center justify-between space-x-0'>
        <div className='mt-7 space-y-1 text-base text-white md:text-lg'>
          <p>{product.title}</p>
          <p>{product.price + "€"}</p>
        </div>

        <div className='cart-icon-div' onClick={addItemToBasket}>
          <ShoppingCartIcon className='cart-icon' />
        </div>
      </div>
    </div>
  );
}
export default Product;

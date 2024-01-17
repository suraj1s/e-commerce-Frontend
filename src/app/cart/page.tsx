import { cartData } from '@/components/common/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
<div className="mx-auto max-w-7xl text-gray-900  font-bold ">
          <h1 className="text-3xl border-b py-5 my-5 border-gray-200 ">Cart</h1>
              <div>
                {cartData.map((item, index) => (
                  <li key={index} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={200}
                        height={200}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium">
                          <h3>
                            {item.title}
                          </h3>
                          <p className="ml-4">{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm ">
                          {item.rating}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="  inline-flex space-x-3">
                          Quantity
                          <div className="mx-5">
                            <select name="itemqty" id="itemqty" >
                              {
                                Array.from(Array(15).keys()).map((item, index) => (
                                  <option key={index} value={item + 1}>{item + 1}</option>
                                ))
                              }
                            </select>  
                          </div>
                        </div>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
           

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p> {1000} </p>
            </div>
            <div className="flex justify-between text-base font-medium ">
              <p>Total Items</p>
              <p> {10} items </p>
            </div>
            <p className="mt-0.5 text-sm ">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6">
              <Link
                href="/Checkoutpage"
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm ">
              <p>
                or
                <Link href="/">
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500 px-3"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
  )
}

export default Cart
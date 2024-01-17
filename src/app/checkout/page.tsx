"use client"
import { cartData } from '@/components/common/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm();
  return (
    <div>
        <div className="mx-auto max-w-7xl h-fit px-4 sm:px-6 lg:px-8 mt-8 p-4 space-x-8 ">
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-4 h-fit ">
          <div className="row-span-2  p-10 lg:col-span-2  rounded-3xl  bg-slate-200 dark:bg-slate-900 my-8">
            
            <form
              noValidate
              className="space-y-6"
              onSubmit={handleSubmit((data) => {
               console.log(data)
              })}
            >
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-zinc-800 dark:text-zinc-300">
                    Personal Information
                  </h2>
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("name", {
                            required: "plese select a valid address",
                          })}
                          id="name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          {...register("email", {
                            required: " plese enter a valid email ",
                            pattern: {
                              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                              message: "plese enter a valid email ",
                            },
                          })}
                          type="email"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          {...register("phone", {
                            required: "plese enter a valid phone number",
                          })}
                          type="tel"
                          minLength={10}
                          autoComplete="phone"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          id="country"
                          {...register("country", {
                            required: "plese select a valid address",
                          })}
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-500 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="streetAddress"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        Street address
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("streetAddress", {
                            required: "plese enter a valid phone number",
                          })}
                          id="streetAddress"
                          autoComplete="streetAddress"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 sm:col-start-1">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("city", {
                            required: "plese enter a valid phone number",
                          })}
                          id="city"
                          autoComplete="address-level2"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        State / Province
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("region", {
                            required: "plese enter a valid phone number",
                          })}
                          id="region"
                          autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="postalCode"
                        className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                      >
                        ZIP / Postal Code
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          {...register("postalCode", {
                            required: "plese enter a valid phone number",
                          })}
                          id="postalCode"
                          autoComplete="postalCode"
                          className="block w-full rounded-md border-0 py-1.5 text-zinc-800 dark:text-zinc-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-300"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Add Address
                  </button>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div>
                    <h2 className="text-base font-semibold leading-7 text-zinc-800 dark:text-zinc-300">
                      Address
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-800 dark:text-gray-400">
                      Slect from existence one
                    </p>
                    <ul>
                      {/* {user.addresses.map((address, index) => (
                        <li
                          key={index}
                          className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                        >
                          <div className="flex gap-x-4">
                            <input
                              name="address"
                              type="radio"
                              value={index}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-300">
                                {address.name}
                              </p>
                              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {address.streetAddress}
                              </p>
                              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                {address.postalCode}
                              </p>
                            </div>
                          </div>
                          <div className="hidden sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-zinc-800 dark:text-zinc-300">
                              Phone: {address.phone}
                            </p>
                            <p className="text-sm leading-6 text-gray-500">
                              {address.city}
                            </p>
                          </div>
                        </li>
                      ))} */}
                    </ul>
                  </div>

                  <div className="mt-10 space-y-10">
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-zinc-800 dark:text-zinc-300">
                        Payment Methods{" "}
                      </legend>
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Choose one
                      </p>
                      <div className="mt-6 space-y-6">
                        <div className="flex items-center gap-x-3">
                          <input
                            id="card"
                            name="payment"
                            value={"card"}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-everything"
                            className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                          >
                            Card
                          </label>
                        </div>
                        <div className="flex items-center gap-x-3">
                          <input
                            id="cash"
                            name="payment"
                            value={"cash"}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-email"
                            className="block text-sm font-medium leading-6 text-zinc-800 dark:text-zinc-300"
                          >
                            Cash
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className=" rounded-3xl  bg-slate-200 dark:bg-slate-900 mt-8">
            <div className="mx-auto  px-4 sm:px-6 lg:px-8 my-8 p-4 bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white  ">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300">
                Order Summary
              </h1>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartData.map((item) => (
                      <li key={item.id} className="flex py-6">
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
                            <div className="flex justify-between text-base font-medium text-zinc-800 dark:text-zinc-300">
                              <h3>
                                {item.title}
                              </h3>
                              <p className="ml-4">{item.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {item.rating}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="  inline-flex text-gray-500 space-x-3">
                              Quantity
                              <div className="mx-5">
                                <select
                                  name="itemqty"
                                  id="itemqty"
                                  value={item.quantity}
                                >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
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
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-zinc-800 dark:text-zinc-300">
                  <p>Subtotal</p>
                  <p> {1000} </p>
                </div>
                <div className="flex justify-between text-base font-medium text-zinc-800 dark:text-zinc-300">
                  <p>Total Items</p>
                  <p> {100} items </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">
                  Shipping and taxes calculated at checkout.
                </p>
                <div className="mt-6">
                  <div
                    
                    className="flex items-center justify-center rounded-md border border-transparent  cursor-pointer bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Order Now 
                  </div>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
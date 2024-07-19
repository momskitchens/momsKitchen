import React, { forwardRef } from 'react'
import { useId } from 'react'
export const Input = forwardRef( 
    function Input({
      label,
      type = "text",
      classname ="",
      ...props
    },ref){
        const Id = useId();
  return (
    <>
       <div className='w-full'>
            {label && 
              <label className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block m-1 " htmlFor={Id} > {label} </label>
            }

            <input
            type={type}
            className={` rounded-lg text-black outline-none focus:bg-green-200 duration-200 border-1 border-solid border-black px-5 py-1 bg-gray-100 hover:bg-green-100  w-full${classname}`}
            ref={ref}
            {...props}
            id = {Id}
            >
            </input>
            {/* <p class="mt-1 text-xs text-gray-500 mb-5">*This field is required</p> */}
       </div>
    </>
  )
}
)

export default Input
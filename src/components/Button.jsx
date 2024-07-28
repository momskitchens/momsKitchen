
export const  Button =({children
    ,type ="button",
    bgColor = "bg-green-950",
    textColor = "text-white",
    classname= '',
    ...props
})=>{


    return (
        <button
               className={`inline-bock px-6 py-2 duration-200 rounded-lg ${bgColor} ${textColor} ${classname}`} {...props}
        >{children}</button>
    )

}
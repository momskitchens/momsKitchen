import React, { Children } from 'react'

function MomsTitle({children,classname}) {
  return (
    <>
    <div className={`font-fraunces text-green-950 ${classname}`}>
            {children}
    </div>
    </>
  )
}

export default MomsTitle
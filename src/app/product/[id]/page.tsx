import React from 'react'

const page = ({params} : {params : {id: number}}) => {
  return (
    <div>
      this is product detail page {params.id}
    </div>
  )
}

export default page
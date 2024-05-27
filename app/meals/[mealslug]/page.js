import React from 'react'

function Meal({params}) {
 
  return (
    <>
      <h2>Meal Page</h2>
      <p>{params.mealslug}</p>

    </>
  )
}

export default Meal
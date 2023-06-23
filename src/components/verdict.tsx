import React from 'react'

const Verdict = (
  { clickHandler, action }: any
) => {
  return (
        <>
            <button onClick={clickHandler}> { action } </button>
        </>
  )
}

export default Verdict

import React, { useState } from 'react'

const ButtonCounter = () => {
    const [count, setCount] = useState()
  return (
    <div>
        <button onClick={() => {
          setCount(count + 1)
        }}>InCounr</button>
        <p>{`Button clicked ${count} times`}</p>
    </div>
  )
}

export default ButtonCounter
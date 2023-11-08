import {useRef} from 'react'

const AboutTwo = () => {
  const countRef = useRef(10);

  const decrementCount = () => {
    countRef.current = countRef.current - 1;
  };
  return (
    <div>
      <h3>Count: {countRef.current}</h3>
      <button className='btn btn-warning' onClick={decrementCount}>Decrement Count</button>
    </div>
  )
}

export default AboutTwo

/* eslint-disable react/prop-types */
import { ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className={` min-h-[calc(100vh-116px)]
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color='#23BE0A' />
    </div>
  )
}

export default Loader

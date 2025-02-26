import { Toaster } from "react-hot-toast"
import SliderMain from "../components/Slider/SliderMain"

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Toaster position='top-right' />

      <SliderMain />
    </div>
  )
}

export default Main
import { TwoThumbInputRange } from "react-two-thumb-input-range"

function Twothumbslider() {
    const [value, setValue] = useState([1000, 4333])
  
    const onValueChange = (values) => {
      setValue(values)
    }
  
    return <TwoThumbInputRange onChange={onValueChange} values={value} min={1000} max={10000} />
  }

  export default Twothumbslider
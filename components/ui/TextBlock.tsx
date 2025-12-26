import {Text} from "react-native";

const TextBlock = ({item}:{item:any})=>{
    return <Text style={item.style}>{item.value}</Text>

}
export default TextBlock;

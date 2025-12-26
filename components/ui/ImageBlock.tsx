import { Image } from "react-native";
const ImageBlock = ({item}:{item:any})=>{
    return (
        <Image 
        source={{uri:item.url}}
        style = {{width:300, height:200, marginVertical:10}}
        />
    )

}
export default ImageBlock;
import { proxy } from "valtio";
const state = proxy({
intro:true,
color:'#EFBD48',
isLogoTexture:true,
isFullTexture:false,
logoDecal:"./fire.png",
fullDecal:"./fire.png"
})
export default state;
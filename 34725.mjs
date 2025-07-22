import {requestI2CAccess, TCS34725} from "chirimen";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const tcs34725 = new TCS34725(i2cPort, 0x29);
await tcs34725.init();

setInterval(async ()=>{
  let data = await tcs34725.read();
  console.dir(data);
},1000);


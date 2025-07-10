import {requestI2CAccess, SHT40} from "chirimen";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const sht40 = new SHT40(i2cPort, 0x44);
await sht40.init();

setInterval(async ()=>{
  let data = await sht40.readData();
  console.dir(data);
},1000);


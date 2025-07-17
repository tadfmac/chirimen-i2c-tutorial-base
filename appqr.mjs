import {requestI2CAccess} from "chirimen";
import QR from "./qr.js";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const qr = new QR(i2cPort, 0x21);
await qr.init();
await qr.setTriggerMode(qr.c.AUTO_SCAN_MODE);

setInterval(async ()=>{
  if(qr.getDecodeReadyStatus() == 1){
    let len = await qr.getDecodeLength();
    let data = await qr.getDecodeData();
    console.dir(data);
  }
},100);



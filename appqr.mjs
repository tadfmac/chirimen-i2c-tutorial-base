import {requestI2CAccess} from "chirimen";
import QR from "./qr.js";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const qr = new QR(i2cPort, 0x21);
await qr.init();
await qr.setTriggerMode(qr.c.AUTO_SCAN_MODE);

for(;;){
  if(await qr.getDecodeReadyStatus() == 1){
    let len = await qr.getDecodeLength();
    console.log("scan length="+len);
    let data = await qr.getDecodeData(len);
    console.dir(data);
  }
  await wait(10); // なんかオーバーフローしてそうなので間引く
}

function wait(ms){
  return new Promise((resolve)=>{
  	setTimeout(()=>{
      resolve();
  	},ms);
  })
}

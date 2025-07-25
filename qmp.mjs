/*

qmp6988 test

- DataSeat: https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/unit/enviii/QMP6988%20Datasheet.pdf
- reference : 
 https://github.com/m5stack/M5Unit-ENV/blob/master/src/QMP6988.h
 https://github.com/m5stack/M5Unit-ENV/blob/master/src/QMP6988.cpp

*/

const I2CADDR_QMP6988 = 0x70;

import { requestI2CAccess } from "chirimen";
import QMP6988 from "./qmp6988.js";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const qmp6988 = new QMP6988(i2cPort, I2CADDR_QMP6988);

await qmp6988.init();

setInterval(async () => {
  let data = await qmp6988.read();
  console.dir(data);
}, 1000);




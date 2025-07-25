import { requestI2CAccess, ADT7410 } from "chirimen";

const i2cAccess = await requestI2CAccess();

const i2cPort = i2cAccess.ports.get(1);
const adt7410 = new ADT7410(i2cPort, 0x48);
await adt7410.init();

setInterval(async () => {
	let data = await adt7410.read();
	console.dir(data);
}, 1000);

import os from "node:os";

//OS ARCH
const myPcArch = os.arch();
console.log(myPcArch);

//OS CPUS
const myPcCpus = os.cpus();
console.log(myPcCpus);

//Os Freememory
const myPcmem = os.freemem();
console.log(myPcmem);

//OS Homedir
const myPcPath = os.homedir();
console.log(myPcPath);

//Os Version
const myPcVersion = os.version();
console.log(myPcVersion);

//Os release
const myPcRelease = os.release();
console.log(myPcRelease);

//Os platform
const myPcPlatform = os.platform();
console.log(myPcPlatform);

//Os hostname
const myPcHostname = os.hostname();
console.log(myPcHostname);

//Os Network
const myPcNetwork = os.networkInterfaces();
console.log(myPcNetwork);

//Os Machine
const myPcMachine = os.machine();
console.log(myPcMachine);

//Os Type
const myPcType = os.type();
console.log(myPcType);

//Os Uptime
const myPcUptime = os.uptime();
console.log(myPcUptime);

//Os TotalMemory
const myPcTotalMemory = os.totalmem();
console.log(myPcTotalMemory);

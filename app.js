let divider =
  "|---------------------------------------------//---------------------------------------------|";
console.log(divider);

/*===============
CORE MODULES
===============*/
console.log(`The Core Modules available are:`);
console.log(require("module").builtinModules);
console.log(`See them in the following table as well:`);
console.table(require("module").builtinModules);

console.log(divider);

/*===============
PROCESS
===============*/
console.log(`The memory usage -from the process module- is:`);
console.log(process.memoryUsage());

console.log(divider);

/*===============
OS
===============*/
const os = require("os");

console.log(`Info from the OS module:`);

console.log(`Home Directory: ${os.homedir()}`);
console.log(`Operating System: ${os.type()}`);
console.log(`Last Reboot: ${os.uptime()}`);

console.log(divider);

/*===============
UTIL
===============*/
const util = require("util");

const today = new Date();

console.log(`The date today is: ${today}. --Provided by the util module.`);

console.log(divider);

/*===============
my OWN MODULES
===============*/

const tempFormulas = require("./formulasModule");
let temp1 = 32;
let temp2 = 121;
console.log(`${temp1}°C are ${tempFormulas.celsiusToFahrenheit(temp1)}°F`);
console.log(`${temp2}°F are ${tempFormulas.fahrenheitToCelsius(temp2)}°C`);
console.log(`Provided by mt own module --tempFormulas.`);

console.log(divider);

/*===============
SERVER
===============*/
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Server is running!");
});

server.listen(8080, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

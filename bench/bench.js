const { loadDefaultSync } = require("../");
const { Suite } = require("benchmark");

const p = "%{COMMONAPACHELOG}";
const str = '203.35.135.165 - - [07/Dec/2021:01:02:03 -0800] "GET /path/to HTTP/1.1" 200 12345';

const suite = new Suite();
suite
  .add("some test case", () => {
    const patterns = loadDefaultSync();
    const pattern = patterns.createPattern(p);
    pattern.parseSync(str);
  })
  .on("cycle", event => {
    console.log(String(event.target));
  })
  .run();

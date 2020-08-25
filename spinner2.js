const values = ['|', '/', '-', '\\'];
const cycles = 1;
let index = 0;
for (let delay = 0; delay <= cycles * 8; delay++) {
  setTimeout(() => {
    process.stdout.write('\r' + `${values[index]}   `);
    index === values.length - 1 ? index = 0 : index++;
    if (delay === cycles * 8) {
      console.log("");
    }
  }, 200 * delay + 100);
}
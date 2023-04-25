const readline = require("readline");
let clc = require("cli-color");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

const next = (operation) => {
  setTimeout(() => {
    if (operation == 0) {
      console.log(clc.green("your cold coffee is ready at just rs 80/- "));
      console.table([{ products: "cold cofee", price: "80" }]);
    } else if (operation == 1) {
      console.log(clc.green("your hot coffee is ready at just rs 50/- "));
      console.table([{ products: "hot coffee", price: "50" }]);
    } else if (operation == 2) {
      console.log(clc.green("your tea is ready at just rs 10/- "));
      console.table([{ products: "tea", price: "10" }]);
    }
    rl.close();
  }, 2000);
};

const wait = (operation) => {
  if (operation == 0) {
    console.log(clc.yellow("your cold coffee is preparing..."));
    next(operation);
  } else if (operation == 1) {
    console.log(clc.yellow("your hot coffee is preparing..."));
    next(operation);
  } else if (operation == 2) {
    console.log(clc.yellow("your tea is preparing..."));
    next(operation);
  } else {
    console.log(clc.red("wrong selection"));
    rl.close();
  }
};

const handleUser = () => {
  console.table([
    { products: "cold cofee", price: "80" },
    { products: "hot cofee", price: "50" },
    { products: "tea", price: "10" },
  ]),
    rl.question(
      clc.green(
        ` hello user which cofee would you like to take pleas choose from the index  \n`
      ),
      (operation) => {
        wait(+operation);
      }
    );
};
handleUser();

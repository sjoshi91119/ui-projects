const printNos = (i) => {
  new Promise((resolve, reject) => {
    while (i < "D") {
      setTimeout(() => {
        console.log(i);
        i++;
      }, 1000);
    }
    resolve();
  });
};

printNos("A");

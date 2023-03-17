//your JS code here. If required.
function getRandomDelay() {
    return Math.floor(Math.random() * 3000) + 1000;
  }

  const table = document.querySelector('table');
  const loadingRow = table.rows[1];

  const promise1 = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => resolve(delay / 1000), delay);
  });

  const promise2 = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => resolve(delay / 1000), delay);
  });

  const promise3 = new Promise((resolve) => {
    const delay = getRandomDelay();
    setTimeout(() => resolve(delay / 1000), delay);
  });

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      const [time1, time2, time3] = results;
      const totalTime = results.reduce((total, time) => total + time, 0);

      const newRow1 = table.insertRow();
      newRow1.insertCell().textContent = 'Promise 1';
      newRow1.insertCell().textContent = time1;

      const newRow2 = table.insertRow();
      newRow2.insertCell().textContent = 'Promise 2';
      newRow2.insertCell().textContent = time2;

      const newRow3 = table.insertRow();
      newRow3.insertCell().textContent = 'Promise 3';
      newRow3.insertCell().textContent = time3;

      const totalRow = table.insertRow();
      totalRow.insertCell().textContent = 'Total';
      totalRow.insertCell().textContent = totalTime.toFixed(3);

      loadingRow.remove();
    });

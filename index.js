import fetch from 'node-fetch';

// Does not work, will eventually die with "Premature close"
const url = 'https://api.us-central1.gcp.commercetools.com/purplecom/product-projections';
const token = 'xxx';

// Works fine.
// const url = 'https://httpbin.org/get';
// const token = '';

// Works fine
// const url = 'https://example.com'
// const token = '';

// Works fine
// const url = 'https://commerce-api.purple.com/catalog/10-21-60061/catalog-promo-price';
// const token = '';

async function fetchData(idx) {
  console.log('started #' + idx);

  await fetch(url, {
    method: 'GET',
    headers: {
      ['Content-Type']: 'application/json',
      ['Authorization']: 'Bearer ' + token,
    },

  }).then(async (resp) => {
    if (resp.ok) {
      resp.text()
        .then((data) => {
          console.log('done #' + idx);
        });
    }
    else {
      console.log("error #" + idx + ": " + resp.status);
    }
  })
    .catch(error => {
      console.log(error);
    });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

for (let i = 1; i < 1000; i++) {
  // Fake a 1ms delay.
  await delay(1);
  fetchData(i);
}

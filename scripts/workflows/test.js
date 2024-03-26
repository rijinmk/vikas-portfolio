const axios = require("axios");

const branchName = process.argv[2];
const regex = /(fix|feat|chore|noticket)\/([\w]+)/;
const match = branchName.match(regex);
const cardID = match[2];
console.log("Trello Card ID from NodeJs", cardID);

axios
  .put(
    `https://api.trello.com/1/cards/${cardID}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_AUTH_TOKEN}`,
    {
      idList: process.env.TRELLO_LIST_IN_PR_REVIEW,
    }
  )
  .then((response) => {
    console.log(
      `Moved card to new list. Response: ${response.status} ${response.statusText}`
    );
  })
  .catch((err) => {
    console.error(err);
  });

// axios(
//   `https://api.trello.com/1/card/${cardID}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_AUTH_TOKEN}`,
//   {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   }
// )
//   .then((response) => {
//     return response.data;
//   })
//   .then((data) => console.log(JSON.stringify(data, null, 2)))
//   .catch((err) => console.error(err));

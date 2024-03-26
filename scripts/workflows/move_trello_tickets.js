import axios from 'axios';

const branchName = process.end.BRANCH_NAME;
const isMerged = process.argv[2] === 'merged';
const regex = /(fix|feat|chore|noticket)\/([\w]+)/;
const match = branchName.match(regex);
const cardID = match[2];

axios
  .put(
    `https://api.trello.com/1/cards/${cardID}?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_AUTH_TOKEN}`,
    {
      idList: !isMerged
        ? process.env.TRELLO_LIST_IN_PR_REVIEW
        : process.env.TRELLO_LIST_TEST_ON_PROD,
    }
  )
  .then(response => {
    console.log(
      `Moved card to new list. Response: ${response.status} ${response.statusText}`
    );
  })
  .catch(err => {
    console.error(err);
  });

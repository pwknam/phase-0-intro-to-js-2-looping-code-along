function countDown(number) {
    while (number > 0) {
      console.log(number);
      number--;
    }
    console.log(0);
  }

function writeCards(people, eventName) {
    let totalMessages = [];
    for (let i = 0; i < people.length; i++) {
        let thankYouMessage = `Thank you, ${people[i]}, for the wonderful ${eventName} gift!`;
        totalMessages.push(thankYouMessage);
    };
    return totalMessages;
};

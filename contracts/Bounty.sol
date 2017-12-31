pragma solidity ^0.4.18;


contract Bounty {
  struct Answer {
    address poster;
    string answerText;
  }

  address asker;
  string _question;
  uint _payment;
  Answer[] answers;

  function Bounty(string question, uint payment) public {
    _question = question;
    _payment = payment;
    asker = msg.sender;
  }

  function postAnswer(string answer) public {
    // check to make sure answer is not empty
    require(keccak256(answer) != keccak256(''));
    Answer memory newAnswer = Answer({poster: msg.sender, answerText: answer});
    answers.push(newAnswer);
  }
}

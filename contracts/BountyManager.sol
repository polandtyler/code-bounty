pragma solidity ^0.4.18;
import './Bounty.sol';

//bountymanager is only created/deployed ONCE among all apps

contract BountyManager {
  Bounty[] bounties;

  function BountyManager() public{
  }

  function createBounty(string question, uint payment) public returns(Bounty[]){
    Bounty newBounty = new Bounty(question, payment);
    bounties.push(newBounty);
    return bounties;
  }

  /*function getBounties() public returns(Bounty[]){
    return bounties;
  }*/
}

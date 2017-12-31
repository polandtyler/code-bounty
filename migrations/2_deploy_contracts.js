const BountyManager = artifacts.require('BountyManager');

export const bountyManager = (deployer) => {
  deployer.deploy(BountyManager);
};

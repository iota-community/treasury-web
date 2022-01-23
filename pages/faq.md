# Page 5 FAQ

## Unclaimed tokens

- What are the unclaimed tokens?
   - The pool of IOTA tokens up for a vote in this decision originates from 2 events:
   - 1.) The initial token sale of IOTA in 2015: 
     At the end of the year 2015, early participants had the chance to buy IOTA tokens before the IOTA Mainnet launch in 2016. They had to pay Bitcoin, Next tokens, or Jinn tokens to the founders, and for this, they had the right to claim an amount of IOTA tokens during a 90-day time frame after the Mainnet was launched. Some have missed this 90-day time frame for claiming. Over the following years, the involved parties have tried their best to find the remaining claimers and, by doing this, identified most of the initial purchasers. Despite all those attempts to find all of them, some could never be found again and have never claimed the tokens. The remaining unclaimed funds from this process are now the network's unclaimed token pool, which is up for a vote in this recent decision.
   - 2.) The Kerl / Curl Bug in 2017:
     In 2017 a bug in the IOTA code was discovered, putting some users' funds at risk of being stolen. In a decision to protect the funds on IOTA addresses exposed to this bug, all IOTA Node operators voted to secure those addresses, transfer the funds into the custody of the IOTA Foundation, update the protocol to a bug-free version, and save the holders from losing their tokens. After this network upgrade, the owners who have been affected by this decision had time until 16. June 2021 to reclaim their Funds by providing proof of ownership in a KYC process. Some, again, have failed to reclaim their tokens until this date. The remaining funds from this process are now part of the unclaimed tokens pool, which is up for a vote in this current decision.   
     
- How many tokens are unclaimed?
   - After processing all existing claims, the remaining token amount in the unclaimed treasury pool is more than 50 TI

- Where are the tokens right now?
   - The tokens remain on a specially prepared output (a part of an address) which has been excluded from being accessible to anyone by all node operators that followed the network upgrade from IOTA 1.0 to IOTA 1.5 (current chrysalis mainnet)

- What about the still unmigrated tokens from the Chrysalis upgrade 2021?
   - These tokens are not part of the decision and can still be migrated to the new IOTA mainnet without any restrictions. This vote is only about tokens that have been unclaimed since the early days of the IOTA project.

## Possible outcomes

- What will happen after the vote has been decided?
   - If the community votes "Burn":
   The node operators will initiate a network update that removes the tokens from the ledger forever without any possibility of adding them again. This will reduce the total token supply of IOTA by around 2%.

   - If the community votes "Build":
   The community will develop a system that can guarantee decentralized governance over the tokens.

   No spending from the unclaimed token pool output happens until the community decides so.

   The node operators will only accept and agree to unlock the tokens in the chrysalis network and move them to a new address if the following requirements are met:
   - There is a system of decentralized governance and ownership in place.
   - The system is owned by the IOTA community and secured and managed using IOTA Smart Contracts (ISC).
   - A system of decentralized decision-making about the spending of those tokens has been implemented.

   The community can use the Treasury website and voting system to propose the future governance structure and vote on those proposals.

   A team of community developers will build this system for the community.

   The system will need to be tested and fully audited before the node operators can move the tokens into the control of this system.

   Once the system is built, activating the system will require a final vote by the community.

   If this vote shows that the community is satisfied with the system, node operators will migrate the treasury tokens into an address controlled by the system.

   From this point on, the community can use the system to spend funds from the treasury after successful votes on spending proposals.

- What if the vote is a tie?
   - If the vote turns out to be undecided (same amount of "build" as "burn" votes), the community will schedule a second vote.

- Is there a quorum rule?
   - The community has decided not to require a minimum quorum.

- What if there is a bug in the voting system?
   - in the very unlikely case that a bug occurs, the community has agreed to mark the first vote as invalid, fix the bug, do another security audit and schedule a new vote.

## Voting weight

- How many votes do I have?
   - Voting weight is a metric that reflects your potential maximum achievable votes (total voting weight) or your already achieved and counted votes (current voting weight) in the decision. 
   - The total voting weight is calculated from the total token balance in a Firefly Wallet. As 1000 IOTA tokens can generate one vote on every milestone of the counting period, it is calculated as (Profile balance in IOTA / 1000) * number of milestones defined as counting period.
   - The current voting weight displays your already counted and confirmed votes in the decision registered in the nodes based on the number of tokens you chose to use in the decision and the already passed milestones of the holding period.

- What is the pre-vote period?
   - The pre-vote period is a seven-day time frame which should guarantee that every voter has enough time to cast a vote before the time-based counting of votes starts. In these seven days, you are free to cast a vote, change a vote, change the number of tokens used in the vote whenever you like. The nodes will consider your last taken decision in the upcoming counting period.

- What is the counting period?
   In these ten days, the nodes will count the vote you have cast during the pre-vote or the counting period. Every milestone (10 seconds) in this counting period will add votes according to your used token balance to the total vote count. Counted votes are not reversible or changeable in this period. So every change that you make on your current applied vote will only affect the upcoming milestones and the vote count during these future milestones.

- Can I move my tokens during the counting period?
   - Yes, you can always move your tokens. The votes that have been counted until you decide to move your tokens will stay valid and are part of the total global count.

- Is there some voting weight limit, or can someone with a huge wallet outnumber many smaller ones?
   - The community has decided not to introduce any limitations. Limitations would not be adequate: everyone can split large wallets into smaller ones. Therefore it will not be possible to find out which wallets belong together and enforce limitations.

- Does the whole seed have to vote the same way at any given time? Is it possible to vote for Build with some tokens and Burn with other tokens?  
   - If you wish to do this, you need to create two separate wallets inside your Firefly profile and allocate the IOTAs that should vote for Build in one wallet and the IOTAs that should vote for Burn in the second wallet. After that, initiate the voting process for the first wallet, complete it and then do it again for the second wallet for the other opinion.


## Counting and results

- Who will count the votes, and how will we know the correct result?
   - All hornet node operators can count the votes with the implemented "participation plugin" in the node software. They produce a file with the exact counting results of their node. Those files can be compared and verified by the community. Also, nodes can open a so-called "API endpoint" where everyone who knows this endpoint can see the current counting of this node.

- Can I see how other wallets voted?
   - You can see how different addresses voted, but you cannot know which addresses belong together in a wallet or belong to a person.

- Where can I see the current results?
   - You will have access to the current count of the Iota Foundation and some community nodes [here](link to "results")
     Also, the Firefly Wallet will display you the current count by the IOTA Foundation nodes directly in your Governance Dashboard.

- What if my tokens are still "stuck" on an exchange, and I can't move them to Firefly?
   - In that case, you will not be able to vote

- Does the Treasury website have access to my tokens?
   - No, never. The website will never access your tokens or your seed or passwords. 


## General / others 

- If my tokens are on exchange, can I vote? If not, will I know if exchanges vote with their tokens?
   - If the tokens are on an exchange, you are technically not the owner of the tokens, as you do not have a private key. So you cannot vote with tokens on exchanges.
We assume that exchanges will not take part in the vote. Most major exchanges state this as part of their policy: they will usually not use the tokens they hold to participate in any governance activities of projects.

- How does the vote work? Does it keep my vote secret? Or is it a transaction that anyone can see?
   - Yes, your vote is public, like all transactions and messages in the Tangle. The vote is a value transaction with attached metadata in the indexation payload. As long as no one knows that the address you use belongs to you, the vote is private.

- Will the exchanges facilitate voting for those whose coins are in these exchanges? Or does everybody have to withdraw their coins to Firefly to vote?
   - Exchanges will not include any voting options on their platforms for this vote. Everyone who wants to participate in the vote will need to withdraw the tokens from exchanges.

- Does voting cost me anything?
   - No.


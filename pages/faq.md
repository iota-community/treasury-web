# Page 5 FAQ

## Unclaimed tokens

- What are the unclaimed tokens?
   - The pool of IOTA tokens up for a vote in this decision originates from 2 events:
   - 1.) The initial token sale of IOTA in 2015: 
     Early initial investors had the chance to buy IOTA tokens before the start of the IOTA Mainnet in 2015. They had to deposit Bitcoin, Next, or Jinn tokens to the founders, and for this, they had the right to claim IOTA tokens in a 90-day time frame after the Mainnet was launched. Some have missed this 90-day time frame for claiming. Over the following years, the involved parties have tried their best to find the remaining claimers and, by doing this, identified most of the initial purchasers. Despite all those attempts, some have never shown up again. The remaining funds from this process are now part of the unclaimed tokens pool, which is up for a vote in this recent decision.
   - 2.) The Kerl / Curl Bug in 2017:
     In 2017 a bug in the IOTA code was discovered, putting some users' funds at risk of being stolen. In a decision to protect the funds on IOTA addresses exposed to this bug, all IOTA Node operators voted to secure those addresses, transfer the funds into the custody of the IOTA Foundation, update the protocol to a bug-free version, and save the holders from losing their tokens. After this network upgrade, the owners who have been affected by this decision had time until 16. June 2021 to reclaim their Funds by providing proof of ownership in a KYC process. Some, again, have failed to reclaim their tokens until this date. The remaining funds from this process are now part of the unclaimed tokens pool, which is up for a vote in this current decision.   
     
- How many tokens are unclaimed?
   - After processing all existing claims, the remaining token amount in the unclaimed treasury pool is xx TI

- Where are the tokens right now?
   - The tokens remain on a specially prepared output (a part of an address) which has been excluded from being accessible by all node operators that followed the network upgrade from IOTA 1.0 to IOTA 1.5 (current chrysalis mainnet)

- What about the still unmigrated tokens from the Chrysalis upgrade 2021?
   - These tokens are not part of the decision and can still be migrated to the new mainnet without any restrictions. This vote is only about tokens that have been unclaimed since the early days of the IOTA project.

## Possible outcomes

- What will happen after the vote has been decided?
   - If the community votes "Burn":
   The node operators will initiate a network update that removes the tokens from the ledger forever without any possibility of adding them again. This will reduce the total token supply of IOTA.

   - If the community votes "Build":
   The community will need to develop a system that can guarantee decentralized governance over the tokens.

   No spending from the unclaimed token pool output can happen until the community has created this system.

   The node operators will only accept and agree to unlock the tokens in the chrysalis network and move them on a new address if following requirements are met:
   - There is a system of decentralized governance and ownership in place.
   - The system is distributed.
   - It is owned by the IOTA community and secured and managed using IOTA Smart Contracts (ISC).
   - A system of decentralized decision making about spending of those tokens has been implemented.

   The community can use the Treasury website and voting system to propose the future governance structure and vote on those proposals.

   A team of community developers will need to build this system for the community.

   The system will need to be tested and fully audited before the tokens can be moved into the control of this system.

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

- How is the voting weight calculated?
   - Voting weight is a metric that reflects your potential maximum achievable votes (total voting weight) or your already achieved and counted votes (current voting weight) in the decision. 
   - The total voting weight is calculated from the total token balance in a Firefly profile. As 1000 IOTA tokens can generate one vote on every milestone of the vote holding period, it is calculated as (Profile balance in IOTA / 1000) * number of milestones holding period.
   - The current voting weight displays your already counted and confirmed votes in the decision registered in the nodes based on the number of tokens you chose to use in the decision and the already passed milestones of the holding period.

- What is the commencing period?
   - The commencing period is a seven-day time frame which should guarantee that every voter has enough time to cast a vote before the time-based counting of voting weight starts. In these seven days, you are free to cast a vote, change a vote, change the number of tokens used in the vote whenever you like. Only your last decision will be used to count during the upcoming holding period.

- What is the commencing period?
   In these ten days, the nodes will count the vote you cast during the commencing period. Every milestone (10 seconds) in this holding period will add votes according to your used token balance to the total vote count. Counted votes are not reversible or changeable at this time. So every change that you make on your current set vote will only affect the upcoming milestones and vote count during these milestones.

- Can I move my tokens during the holding period?
   - Yes, you can always move your tokens. The votes that have been counted until you decide to move your tokens will stay valid and are part of the total results.

- Is there some voting weight limit, or can someone with a huge wallet outnumber many smaller ones?
   - The community has decided not to introduce any limitations. Limitations would not be adequate: everyone can split large wallets into smaller ones. Therefore it will not be possible to find out which wallets belong together and enforce limitations.

- Does the whole seed have to vote the same way at any given time? Is it possible to vote for Build with some tokens and Burn with other tokens?  
   - If you wish to do this, we recommend creating two wallets inside your Firefly profile and allocating the IOTAs that should vote for Build in one wallet and the IOTAs that should vote for Burn in the second wallet. After that, initiate the voting process for the first wallet, complete it and then do it again for the second wallet for the other opinion.


## Counting and results

- Who will count the votes, and how will we know the correct result?
   - All hornet node operators can count the votes with the implemented "participation plugin" in the node software. They produce files with the exact counting of their node. Those files can be compared and verified by the community. Also, nodes can open a so-called "API Endpoint" where everyone can see the current counting of this node.

- Can I see how other wallets voted?
   - You can see how different addresses voted, but you cannot know which addresses belong together or belong to a person.

- Where can I see the current results?
   - You will have access to the current count of the Iota Foundation and some community nodes [here](link to "results")
     Also, the Firefly Wallet will display you the current count of the proposal in the detail view of the governance tab.

- What if my tokens are still "stuck" on an exchange, and I can't move them to Firefly?
   - In that case, you will not be able to vote

- Does the Treasury website have access to my tokens?
   - No, never. The website will never access your tokens or your seed or passwords. 


## General / others 

- If my tokens are on exchange, can I vote? If not, will I know if exchanges vote with their tokens?
   - If the tokens are on an exchange, you are technically not the owner of the tokens, as you do not have a private key. So you cannot vote with tokens on exchanges.
We assume that exchanges will not take part in the vote. All major exchanges state this as part of their policy: they will usually not use the tokens they hold to participate in any governance activities of projects.

- How does the vote work? Does it keep my vote secret? Or is it a transaction that anyone can see?
   - Yes, your vote is public, like all transactions and messages in the Tangle. The vote is a value transaction with attached metadata in the indexation payload. As long as no one knows that the address you use belongs to you, the vote is private.

- Will the exchanges facilitate voting for those whose coins are in these exchanges? Or does everybody have to withdraw their coins to Firefly to vote?
   - Exchanges will not include any voting options on their platforms for this vote. Everyone who wants to participate in the vote will need to withdraw the tokens from exchanges.

- Does voting cost me anything?
   - No.

## TL;DR

- In this first-ever IOTA vote, you are asked to decide what should happen to a pool of tokens that have been unclaimed since the initial IOTA token sale in 2015.

- The amount of tokens in this pool is XX Ti - this is  XX.000.000 MIOTA

- These tokens were intentionally excluded from the Chrysalis migration process by the node operators and are currently not accessible by anyone.

- Voters have two options to choose from:

- Build: The unclaimed tokens will be used to support and fund projects and initiatives that are important to the IOTA community ecosystem via future votes.

- Burn: The unclaimed tokens will be removed from the IOTA ledger, and the total supply will be reduced by the number of tokens held in the unclaimed treasury pool.

Since June 2021, a large group of community members publicly met every two weeks to define and develop the voting system, which is now used in this vote.

- A group of community developers built the voting system together with the IOTA Foundation

- To participate in the vote, you need your IOTA tokens in the Firefly wallet.

- 1000 IOTA Tokens (1 Ki) equals one vote for a milestone that passes during the vote holding period.

- You can participate in this vote [here](link to cast your vote) on the website or directly in your Firefly Wallet.

- A vote is a transaction including tokens sent to the same address where they reside.

- This transaction includes the voting data (ballot ID, opinion that you voted for) and the number of tokens you chose to represent your vote.

- Both standard Firefly and Ledger Nano Firefly users can participate in the vote

- You can change your vote until xx.xx.21 xx:xx UTC without any consequences - this is called the "commencing period."

- After the commencing period, your vote will start to be counted and gain voting weight for ten days in the "holding period."

- If you want to reach your maximum voting weight, you must hold your tokens in the voting address for this entire ten days.

- Participating in the vote after xx.xx.21 xx:xx UTC is also possible, but you won't be able to gain your total potential voting weight anymore as you have missed some time of the ten required holding days already.

- Voting is feeless. No transaction fees or any other costs are involved.

- Your IOTA tokens are always accessible to you. But if you send them away from the voting address, your vote will stop gaining voting weight.

- The participating community node operators with their Hornet nodes and the IOTA Foundation nodes will count all votes.

- The Hornet nodes will produce the vote results as a file with an immutable hash.

- The community will view and access this voting data on the treasury website [here](link to the results page).
 

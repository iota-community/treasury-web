title: How voting works


---

# How voting works

## Frame 1
### How voting works

## Frame 2
### The 3 phases of the vote

Preparation phase
  - Upon publishing the vote proposal to the GitHub Repository and implementing and displaying it to the Treasury website, the Hornet node operators can activate the vote proposal in their nodes to be prepared to count any votes that are being casted. 

Commencing phase (seven days)
  -  The commencing phase starts on a predefined milestone in the IOTA network. After this milestone, users are free to cast their votes, change their opinions, and revoke or redo the vote as often as they want, using the Firefly wallet's voting functionality. Changes of opinion during this time frame will not influence the final vote count of the voters. 

Holding phase (10 days)
  - This period follows directly at the end of the commencing phase: the user's declared vote now starts to gain weight with increasing holding time. The declared vote will gain weight with every passing milestone (one milestone is issued every 10 seconds) in the network. If the user manages to hold the vote for the predefined number of milestones, the vote will reach the maximum voting weight related to the amount of tokens associated with a vote. If users change their vote in between, the changed opinion starts gaining weight from the point where it was changed. Although the opinion changed, the previous opinion is not dismissed.


## Frame 3
### Aquiring votes and voting weight

Any IOTA token holder can participate
- The number of votes is related to the balance of tokens held by the user. 1000 IOTA = 1 vote per milestone that passes during the defined holding period.
- You can only participate if you hold IOTA tokens in the Firefly wallet.

Hold IOTA tokens in the Firefly wallet to be able to cast a vote
  - IOTA holders will receive an updated version of the Firefly wallet with integrated voting functionality.
  - You can only participate if you hold IOTA tokens in the Firefly wallet.

Increase your voting weight by holding tokens during the vote
  - The amount of voting weight your tokens gain is directly related to the time you hold the tokens on the address during the holding period. Nodes register and count votes per address for every passed milestone.
   - Only votes kept from the beginning until the end of the holding period can reach their total voting weight.


## Frame 4
### Cast a valid vote - 2 options

A) Initiate your vote directly here on the website
  - This website includes a voting application. In this application you are able to prepare your initial decision between Build or Burn.
  - Once this decision is taken, your vote will be forwarded to your Firefly wallet where furter selection and confirmation steps are required from you.
Start voting here

B) Initiate a vote directly within the Firefly Wallet
- You will prepare and execute your vote in the Firefly Wallet, which will receive an upgrade to include the Voting functionality. There you can state your opinion of which option you choose on the proposal.
- Furtheron you decide which wallet and token balance should participate in the vote. You can select/unselect all wallets in a profile. If you only want to use a part of your tokens, it is recommended to collect them in a separate wallet in your profile. You will now only need to confirm the pre-prepared voting transaction with your Stronghold password or Nano Ledger. 

Execution of the vote

  - The voting mechanism makes use of IOTA’s capability to issue value transactions with attached metadata. In a vote, the tokens residing on an address (and specifically the unspent transaction outputs (UTXO) on the Tangle) will be sent in a transaction in which the sender and receiver address of the transaction is identical (you are sending the tokens to yourself). During this transaction, the metadata (vote event ID, voter opinion ID: build or burn) will be attached, and therefore immutably written onto the UTXOs of this address in the IOTA Tangle. So after the voting transaction, the tokens will still reside on the same address as before, but now with attached information that represents the opinion of the voter. 
  - This functionality will be fully audited by an external security audit provider.

## Frame 5
### Counting of votes

Votes get counted in the Hornet nodes
  - A plugin/extension of the Hornet node software can be activated in every Hornet node. Nodes that do not delete (prune) messages during the entire voting period (commencing and holding) will be able to produce the results because they will observe all addresses during the whole period.
  - This plugin has gonne through a community test and will be fully audited by an external security audit provider.
  - As every node in the IOTA network knows the status of every UTXO in the Tangle, they are able to observe and register changes to these UTXOs. As soon as a vote transaction is issued and confirmed, the UTXO now has attached metadata information. Hornet nodes that have the new voting plugin activated will observe the ledger for UTXOs that hold this specific metadata (the vote event ID) attached. They will log all UTXOs with this metadata for every new milestone that appears in the Tangle and create a log file in a database of the node. In this logfile the following information will be stored for every milestone: 
    - Every UTXO ID that contains the event ID of the vote 
    - voter opinion ID written to this UTXO  
    - number of tokens residing on the UTXO
- The plugin keeps track of all those UTXOs and adds new ones as soon as they appear in the ledger or stop counting them as soon as they disappear.
- Counting happens from the defined “start holding – milestone” till the defined “end holding – milestone.”
- As a new milestone is issued every 10 seconds it gives a highly precise counting as every change in opinions or balances will be recognized in a 10-second time frame.
- After the defined “holding end – milestone”, the plugin produces an output with all observed UTXOs, balances, indexation payloads per milestone, and the final result as an accumulation of that milestone data. Those informations will also be availeable live during the vote happens via an API Endpoint in every node.
- These live results will be visible [here on the website]

## Frame 6
### Time based gain of voting weight

- The result will be produced and verified in a decentralized fashion, through every node that participates in the counting.From the start of the holding period (the milestone in the Tangle that has been defined as the starting point) for every milestone where tokens are recognized on a UTXO with attached voting metadata, the respective number of nodes will be accounted for. 
- So a vote of 10 Mi for “build” will be counted like this:
10 Mi votes for build on milestone x + 10 Mi votes for build on milestone y, + 10 Mi votes for build on milestone y,...and produce for a total holding period of 1000 milestones a result of: 
    - 1000 milestones x 10 Mi = 10.000 Mi votes for opinion build.
- All nodes will count all UTXO with attached voting metadata they observe during the “holding period” of the vote and add up the votes for every milestone until the voting phase ends (marked by a predefined ending milestone).
- This also means that the factor “vote holding time” for tokens will have a large influence. Votes gain “weight” in relation to how long they are kept on an address. This is a crucial security feature of the voting mechanism that will reward token holders and punish voting “speculators” or “vote buyers” by forcing them to lock capital over a long time period. 

## Frame 7
### Voting weight examples

Let's look at a few examples of the possible voting weight based on different variables:
- If the holding phase is 10 days and a user has a balance of 100 Miota (Mi) in their Firefly wallet, which is used to vote:
- Holding the tokens for the full 10 days of the required holding period will give the voter 100% of the possible voting weight.
- Holding the tokens for only seven consecutive days of 10 total days would reach only 70% of the maximum possible voting weight.
- Executing a vote after the holding period has already started (for example, on day two of 10 days total) and not changing the vote by not moving the tokens until the end of the voting period, the voter would gain 80% of the possible voting weight for the 100 Mi.
- Starting the vote at the beginning of the voting period with "Burn," holding this opinion for three days but then changing to "Build", and holding it for the remaining seven days would  result in the following outcome:

100 Mi vote for "Burn" for three days: 30% of the tokens voting weight vote for "Burn"
100 Mi vote for "Build" for seven days: 70% of the tokens voting weight vote for "Build"

Graphics explaining this!



## Frame 8
### Validation and possible vote outcomes

Results are validated by the community
  - Once the defined time window of the vote has passed (7days commencing + 10 days holding period) the Hornet node operators which participated in the counting of the vote can submit their vote result and the checksum of the produced voting file to a public Github Repository. Here everyone will be able to look into the produced results and can verify that all participating nodes have produced the same result. Community node operators will check and validate submitted vote results to make sure that no differences in the results exist.

Community defined voting rules
- 100% of all valid IOTA votes has been defined as the total amount of IOTA tokens successfully migrated into the Chrysalis network at milestone 'holding period end'.
- A minimum total participation is not required to create a legitimate and binding vote outcome. Only the amount of valid votes cast during the defined total voting period will be used to determine the result.
- The winner will be the option that receives the simple majority of 50% plus one of all valid counted votes.
- Should an error in the code of wither the voting mechanism in Firefly or the counting mechanism in Hornet be discovered during or after a vote, or the voting system has been proven to have been compromised or exploited by malicious actors, the vote will be deemed invalid.
- In this case, the vote will need to be repeated. This new vote can only occur once the bug or vulnerability has been eliminated and a security audit completed.
- Should the outcome of the vote be a draw, the community will set up a second vote with the same conditions as the first one.




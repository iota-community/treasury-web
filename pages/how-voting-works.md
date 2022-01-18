title: How voting works


---

# How voting works

## Frame 1
### How voting works

## Frame 2
### The 3 phases of the vote

Preparation phase
  - Upon publishing the vote proposal to the GitHub Repository and implementing and displaying it to the Treasury website, the Hornet node operators can activate the vote proposal in their nodes to be prepared to count any votes issued. 

Commencing phase (seven days)
  -  The commencing phase starts on a predefined milestone in the IOTA network. After this milestone, users are free to cast their votes, change their opinions, and revoke or redo the vote as often as they want, using the Firefly wallet's voting functionality. Changes in voters' opinions during this time frame will not influence the final vote count of the voters. 

Holding phase (10 days)
  - This period follows directly at the end of the commencing phase: the user's declared vote now starts to gain weight with increasing holding time. The declared vote will gain weight with every passing milestone (one milestone is issued every 10 seconds) in the network. Suppose the user manages to vote for the predefined number of milestones. In that case, the vote will reach the maximum voting weight related to the number of tokens associated with a vote. If users change their vote in between, the changed opinion starts gaining weight from the point where it was changed. Although the opinion changed, the previous opinion is not dismissed.
![image](https://user-images.githubusercontent.com/77154511/147462450-35668104-9922-474b-85d4-71f232af1830.png)


## Frame 3
### Aquiring votes and voting weight

Any IOTA token holder can participate.
- The number of votes is related to the balance of tokens held by the user. 1000 IOTA = 1 vote per milestone that passes during the defined holding period.
- You can only participate if you hold IOTA tokens in the Firefly wallet.

Hold IOTA tokens in the Firefly wallet to be able to cast a vote
  - IOTA holders will receive an updated version of the Firefly wallet with integrated voting functionality.
  - You can only participate if you hold IOTA tokens in the Firefly wallet.

Increase your voting weight by holding tokens during the vote
  - The amount of voting weight your tokens gain is directly related to the time you hold the tokens on the address during the holding period. Nodes register and count votes per address for every passed milestone.
   - Only votes kept from the beginning until the end of the holding period can reach their total voting weight.
![image](https://user-images.githubusercontent.com/77154511/147462519-a70a0a04-110e-49d4-884d-dff04754531b.png)


## Frame 4
### Cast a valid vote - 2 options

A) Initiate your vote directly here on the website
  - This website includes a voting application. In this application, you can prepare your initial decision between Build or Burn.
  - Once this decision is taken, your vote will be forwarded to your Firefly wallet, where further selection and confirmation steps are required from you.
Start voting here

B) Initiate a vote directly within the Firefly Wallet
- You will prepare and execute your vote in the Firefly Wallet. Every user can install the latest update of the Firefly sodtware, which will implement the new voting functionality. You can state your opinion of which option you choose on the proposal.
- Further, you decide which wallet and token balance should participate in the vote. You can individually vote with all wallets in a profile. If you only want to use a part of your tokens, it is recommended to collect them in a separate wallet in your profile. You will now only need to confirm the pre-prepared voting transaction with your Stronghold password or Nano Ledger. 

Execution of the vote

  - The voting mechanism uses IOTA’s capability to issue value transactions with attached metadata. In a vote, a transaction will send the tokens residing on an address (and specifically, the unspent transaction outputs (UTXO) on the Tangle). In this transaction, the sender and receiver address is identical (you are sending the tokens to yourself). During this transaction, the metadata (vote event ID, voter opinion ID: build or burn) will be attached, and therefore immutably written onto the UTXOs of this address in the IOTA Tangle. So after the voting transaction, the tokens will still reside on the same address as before, but now with attached information that represents the voter's opinion. 
  - An external security audit provider will thoroughly audit this functionality.
![image](https://user-images.githubusercontent.com/77154511/147462568-4d18ab74-ac9a-443e-a968-117fde12712e.png)


## Frame 5
### Counting of votes

Votes get counted in the Hornet nodes.
  - A plugin/extension of the Hornet node software can be activated in every Hornet node. Nodes that initiate this plugin before the commencing period can produce the results because they will observe all addresses during the whole period.
  - This plugin has gone through a community test and will be fully audited by an external security audit provider.
  - As every node in the IOTA network knows the status of every UTXO in the Tangle, they can observe and register changes to these UTXOs. As soon as a vote transaction is issued and confirmed, the UTXO has attached metadata information. Hornet nodes that have the new voting plugin activated will observe the ledger for UTXOs that hold this specific metadata (the vote event ID) attached. They will log all UTXOs with this metadata for every new milestone that appears in the Tangle and create a log file in the node's database. In this log file, the following information will be stored for every milestone: 
    - Every UTXO ID that contains the event ID of the vote 
    - voter opinion ID is written to this UTXO  
    - number of tokens residing on the UTXO
- The plugin keeps track of all those UTXOs and adds new ones as soon as they appear in the ledger or stops counting them as soon as they disappear.
- Counting happens from the defined “start holding – milestone” till the defined “end holding – milestone.”
- As a new milestone is issued every 10 seconds, it gives an exact counting as every change in opinions or balances will be recognized in a 10-second time frame.
- After the defined “holding end – milestone”, the plugin produces an output with all observed UTXOs, balances, indexation payloads per milestone, and the final result as an accumulation of that milestone data. That information will also be available live during the vote via an API Endpoint in every node.
- These live results will be visible [here on the website]
![image](https://user-images.githubusercontent.com/77154511/147462603-d9fea39d-bf8c-4687-8429-5a985293315d.png)


## Frame 6
### Time based gain of voting weight

- The result will be produced and verified in a decentralized fashion through every node participating in the counting. With begin of the holding period (the milestone in the Tangle that is the starting point of counting), the respective number of votes are counted for every milestone in which tokens containing attached voting metadata reside on a UTXO. 
The community has decided that 1000 IOTA (1 Ki) generate 1 vote for every milestone during the holding period of the vote.
- So a vote of 1 Mi for “build” will be counted like this:
1000 votes for build on milestone x + 1000 votes for build on milestone y, + 1000 votes for build on milestone y,...and produce for a total holding period of 1000 milestones a result of: 
    - 1000 milestones x 1000 votes per milestone = 1 million votes for opinion build.
    
![image](https://user-images.githubusercontent.com/77154511/147019444-74cdd099-25f1-4584-88d9-788a8c299cbe.png)

- All nodes will count all UTXO with attached voting metadata they observe during the “holding period” of the vote and add up the votes for every milestone until the voting phase ends (marked by a predefined ending milestone).
- This also means that the factor “vote holding time” for tokens will significantly influence. Votes gain “weight” in relation to how long they are kept on an address. This is a crucial security feature of the voting mechanism that will reward token holders and punish voting “speculators” or “vote buyers” by forcing them to lock capital over a long time. 

## Frame 7
### Voting weight examples

Let's look at a few examples of the possible voting weight based on different variables:
- If the holding phase is ten days and a user has a balance of 100 Miota (Mi) in their Firefly wallet, which is used to vote:
- Holding the tokens for the entire ten days of the required holding period will give the voter 100% of the possible voting weight.
- Holding the tokens for only seven consecutive days of 10 full days would reach only 70% of the maximum possible voting weight.
- Executing a vote after the holding period has already started (for example, on day two of 10 days total) and not changing the vote by not moving the tokens until the end of the voting period, the voter would gain 80% of the possible voting weight for the 100 Mi.
- Starting the vote at the beginning of the voting period with "Burn," holding this opinion for three days but then changing to "Build," and holding it for the remaining seven days would result in the following outcome:

100 Mi vote for "Burn" for three days: 30% of the tokens voting weight vote for "Burn"
100 Mi vote for "Build" for seven days: 70% of the tokens voting weight vote for "Build"

![image](https://user-images.githubusercontent.com/77154511/147019569-ab448f15-33f4-4c15-bcca-3645a2d86cdb.png)


## Frame 8
### Validation and possible vote outcomes

The community validates the results.
  Once the defined time window of the vote has passed (7days commencing + 10 days holding period), the Hornet node operators who participated in the counting of the ballot can submit their vote result and the checksum of the produced voting file to a public Github Repository. Here everyone will be able to look into the delivered results and verify that all participating nodes have produced the same result. Community node operators will check and validate submitted vote results to ensure that no differences in the results exist.

Community-defined voting rules.
- 100% of all valid IOTA votes has been defined as the total amount of IOTA tokens successfully migrated into the Chrysalis network at the milestone 'holding period end'.
- A minimum total participation is not required to create a legitimate and binding vote outcome. Only the number of valid votes cast during the defined entire voting period will determine the result.
- The winner will be the option that receives the simple majority of 50% plus one of all valid counted votes.
- Should an error in the code of the voting mechanism in Firefly or the counting mechanism in Hornet be discovered, or the voting system was proven to have been compromised, the vote will be deemed invalid.
- In this case, the vote will need to be repeated. This new vote can only occur once the bug or vulnerability has been eliminated and a security audit completed.
- Should the outcome of the vote be a draw, the community will set up a second vote with the same conditions as the first one.




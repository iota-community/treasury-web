title: How voting works


---

# How voting works

## Frame 1
### How voting works

## Frame 2
### The 3 phases of the vote

*Proposal announcement:*
  - Upon publishing the vote proposal to the GitHub Repository and implementing and displaying it to the Treasury website, the Hornet node operators can implement the vote proposal now as an event in their nodes. The participating nodes are now observing the Tangle and are ready to count votes for this proposal. 

*Pre-vote (seven days):*
  -  The pre-vote phase starts at a predefined point in time (a milestone) in the IOTA network. Users can now vote using the Firefly wallets voting functionality. Changes in voters' opinions during this time frame can be done without influencing the final vote count of the voter. 
Voters are required to initiate the vote during these seven days to gain their maximum possible votes counted.

*Counting (10 days)*
  - This period follows the pre-vote phase: the declared vote of a user is now counted. The number of counted votes will increase with every passing milestone (one milestone is issued every 10 seconds) in the network. If a voter did issue the vote during the pre-vote phase,  the vote would reach the maximum possible counted votes related to the number of tokens used by the voter. 
If a voter attempts changing the selected vote option in this timeframe, the counting for the new option starts with the confirmation of the change in Firefly. Although the option has changed and new votes are now counted for a different option,  the previously counted votes for the first option are not dismissed and count as valid votes.
![image](https://user-images.githubusercontent.com/77154511/147462450-35668104-9922-474b-85d4-71f232af1830.png)


## Frame 3
### Achieving your maximum vote count.

Any IOTA token holder that holds IOTA tokens in the Firefly Wallet can participate in the vote.
- The number of your votes is directly related to the number of tokens you commit during the counting time frame of ten days. Every 1000 IOTA tokens (0,01 Miota) used to vote will create 1 vote every 10 seconds. The sum of all those votes counted over ten days will be your total votes in this decision.

Hold IOTA tokens in the Firefly wallet to cast a vote.
  - IOTA holders can download an updated version of the Firefly wallet with integrated voting functionality once this version is ready.
- The Iota Foundation will inform you in the known social media channels once the update is available.
  - You can only participate if you hold IOTA tokens in the Firefly wallet.

Increase your counted votes by holding tokens during the counting period.
  - The number of votes counted for your tokens is directly related to the time you hold the tokens in the vote during the counting period. Nodes register and add votes per address every 10 seconds to the count.
   - Only votes kept from the beginning until the end of the counting period can reach their maximum potential counted votes.
![image](https://user-images.githubusercontent.com/77154511/147462519-a70a0a04-110e-49d4-884d-dff04754531b.png)


## Frame 4
### Cast a valid vote - 2 options

A) Initiate a vote directly within the Firefly Wallet:
- You can execute your vote in the Firefly Wallet. Once published, every user can install the latest update of the Firefly software, which will contain the new voting functionality. 
- You decide which option you want to vote for and which wallet and token balance should participate in the vote. You can individually vote with all wallets in a profile. If you only want to use a part of your tokens to vote, moving this amount into a separate wallet in your profile is necessary. You will confirm the prepared voting transaction with your Stronghold password or Ledger Nano hardware wallet. 

B) Initiate a vote directly here on the website:
  - This website includes a voting application. In this application, you can prepare your vote by deciding between the Build or Burn options.
  - Once you have decided here on the website, your vote will be forwarded to your Firefly wallet, where further selection and confirmation steps are required from you.
Start voting here

Technical details of the vote:

  - The voting mechanism uses IOTA's capability to issue value transactions with attached metadata. In a vote, a transaction is issued that moves the tokens residing on your address (and specifically, the unspent transaction outputs (UTXO) of this address). In this transaction, the sender and receiver address is identical (you are sending the tokens to yourself). 

During this transaction, the vote metadata (vote event ID, voter opinion ID: build or burn) will be attached and immutably written onto the UTXOs of your address in the IOTA Tangle. After the vote, the tokens will still reside on the same address as before, but now with attached information in the metadata that represents your opinion in the vote. 
  - An external security audit provider has audited this functionality.
![image](https://user-images.githubusercontent.com/77154511/147462568-4d18ab74-ac9a-443e-a968-117fde12712e.png)


## Frame 5
### Counting of votes

Votes get counted in the Hornet nodes.
  - Node operators can activate the participation plugin in the Hornet node software in every Hornet node. Nodes that initiate this plugin during the proposal announcement phase can produce the results because they will observe all IOTA addresses during the whole period and count all votes that happen.
  - This plugin has gone through a community test and is fully audited by an external security audit provider.
  - As every node in the IOTA network knows the status of every UTXO in the Tangle, they can observe and register changes to these UTXOs. As soon as a vote transaction is issued and confirmed, the UTXO contains attached metadata information. Hornet nodes that have the participation plugin activated will observe the ledger for UTXOs that hold this specific metadata (the vote event ID). They will log all UTXOs with this metadata for every new milestone in the Tangle and create a database of the counted votes. This node database will store the following information for every milestone: 
    - UTXO's that contain the event ID of the vote. 
    - Voter opinion ID written to this UTXO.  
    - Number of tokens residing on the UTXO.
- The plugin keeps track of all those UTXOs and adds new ones as soon as they appear in the ledger or stops further counting them as soon as they disappear. This [Github repo](hornet/participation.go at develop · gohornet/hornet (github.com)) contains the exact structure of the counting mechanism.
- Counting happens from the defined "start holding – milestone" till the defined "end holding – milestone." as defined in the [specification](treasury/hornet-participation-plugin.md at main · iota-community/treasury (github.com))
- As a new milestone is issued every 10 seconds, it produces an exact counting as every change in opinions or balances will be recognized in a 10-second time frame.
- After the defined "holding end – milestone," the plugin produces an output with all observed UTXOs, balances, indexation payloads per milestone, and the final result as an accumulation of that milestone data. That information will also be available live during the vote via an API endpoint in every node.
- The result will be produced and verified in a decentralized fashion through every node participating in the counting. At the beginning of the counting period, the respective number of votes is counted for every milestone in which tokens containing attached voting metadata reside on a UTXO. 
- These live results will be visible [here on the website]
![image](https://user-images.githubusercontent.com/77154511/147462603-d9fea39d-bf8c-4687-8429-5a985293315d.png)


## Frame 6
### Time based counting of votes


The community has decided that 1000 IOTA (0,01 Mi) generate 1 vote every 10 seconds (with every new appearing milestone) in the counting period.
- So a vote of 1 Mi for "build" will be counted like this:
1000 votes counted for build on milestone x + 1000 votes counted for build on milestone y, + 1000 votes counted for build on milestone y... 
This method would produce during a counting period of 1500 milestones the following vote count:
    - 1500 milestones x 1000 votes per milestone = 1,5 million votes counted for opinion build.
    
![image](https://user-images.githubusercontent.com/77154511/147019444-74cdd099-25f1-4584-88d9-788a8c299cbe.png)

- All nodes will count all UTXO with attached voting metadata they observe during the "counting period" of the vote and add up the votes for every milestone until the counting phase ends (marked by a predefined ending milestone).
This counting mechanism also leads to the fact that the "vote holding time" for tokens will greatly influence the result. Votes gain "weight" in relation to how long they are kept on an address. This is a crucial security feature of the voting mechanism that will reward long term token holders and punish voting "speculators" or "vote buyers" by forcing them to lock capital over a longer time period and making an attempt to "buy votes" a speculative risk due to the potential IOTA price volatility in the ten days counting period. 


## Frame 7
### Voting count examples

Let's look at a few examples of the possible vote count based on different variables:
- If the counting phase of a vote is ten days and a user has a balance of 100 Miota (Mi) in their Firefly wallet, which is used to vote:
- Holding the tokens for the entire ten days of the required counting period will give the voter 100% of the possible vote counts.
- Holding the tokens for only seven consecutive days of 10 full days would reach only 70% of the maximum possible vote counts.
Executing a vote after the counting period has already started (for example, on day two of 10 days total) and not changing the vote until the end of the counting period, the voter would gain 80% of the possible vote count of the 100 Mi.
- Starting the vote at the beginning of the counting period with "Burn," keeping this opinion for three days and then changing to "Build," holding it for the remaining seven days would result in the following outcome:

100 Mi vote three days for "Burn": 30% of the user's maximum achievable votes are counted for "Burn."
Now, changing the vote,  for the remaining seven days, 100 Mi vote for "Build": the remaining 70% of the user's available votes are counted for "Build"


![image](https://user-images.githubusercontent.com/77154511/147019569-ab448f15-33f4-4c15-bcca-3645a2d86cdb.png)


## Frame 8
### Validation and possible vote outcomes

The community validates the results of this voting process.
Once the defined time window of the vote has passed (7days pre-vote + 10 days counting period), all Hornet node operators who participated in the counting of the proposal can publish their counting result in a public Github repository. The result will be published as a hash checksum of the counting database file for easy comparing. Everyone is invited to check and validate the submitted count results to ensure no differences exist.

Community-defined voting rules.
- It has been defined that 100% of all valid IOTA votes are the total amount of IOTA tokens successfully migrated into the Chrysalis network at the milestone "holding period end."
- A minimum total participation is not required to create a legitimate and binding vote outcome. Only the number of valid votes issued and counted during the defined entire voting period will determine the result.
- The winner will be the option that receives the simple majority of 50% plus one of all valid counted votes.
- Should an error in the code of the voting mechanism in Firefly or the counting mechanism in Hornet be discovered, or the voting system was proven to have been compromised, the result will be deemed invalid.
- In this case, the vote will need to be repeated. This new vote can only occur once the bug or vulnerability has been eliminated and a new security audit is completed.
- Should the outcome of the vote be a draw, the community will set up a second vote with the same conditions as the first one.



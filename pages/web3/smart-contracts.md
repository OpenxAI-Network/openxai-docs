# Smart Contracts

| Contract                     | Address                                    | Chain |
| ---------------------------- | ------------------------------------------ | ----- |
| OpenxAI (ERC20)              | TBD                                        | Base  |
| OpenxAI Claimer              | TBD                                        | Base  |
| Tokenized Server V1 (ERC721) | 0x5d3a48B6f16Ba9a830b19B452d8DAA0409e0FE05 | Base  |
| GPU Credit Deposit           | 0x0DA956C8865633AC2E7f02d935EBa495Aae63598 | Base  |
| OpenxAI Token Vault          | TBD                                        | Base  |
| OpenxAI Opportunity Fund     | TBD                                        | Base  |
| OpenxAI Vesting (1 year)     | TBD                                        | Base  |
| OpenxAI Vesting (2 year)     | TBD                                        | Base  |
| OpenxAI Vesting (3 year)     | TBD                                        | Base  |
| OpenxAI Vesting (4 year)     | TBD                                        | Base  |
| OpenxAI Vesting (5 year)     | TBD                                        | Base  |
| OpenxAI Vesting (6 year)     | TBD                                        | Base  |
| OpenxAI Vesting (7 year)     | TBD                                        | Base  |
| OpenxAI Vesting (8 year)     | TBD                                        | Base  |

## [OpenxAI (ERC20)](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAI.sol)

The project token.

## [OpenxAI Claimer](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAIClaimer.sol)

Contract that distributes OpenxAI tokens based on off-chain conditions.

## [Tokenized Server V1 (ERC721)](https://github.com/OpenxAI-Network/tokenized-server/blob/main/src/OpenxAITokenizedServerV1.sol)

NFT that represents tokenized server ownership.

## [GPU Credit Deposit](https://github.com/OpenxAI-Network/tokenized-server/blob/main/src/OpenxAICreditDeposit.sol)

Contract that allows users to buy GPU credits.

## [OpenxAI Token Vault](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVault.sol)

Contract that will hold all unvested but non-circulating (undistributed) OpenxAI tokens.

## [OpenxAI Opportunity Fund](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVault.sol)

Tokens set aside for opportunities that aren't known or present at time of launch.

## [OpenxAI Vesting](https://github.com/OpenxAI-Network/openxai-token/blob/main/src/OpenxAINonCirculatingSupplyVesting.sol)

Contract that will release OpenxAI tokens according to the vesting schedule. These tokens are released into the OpenxAI Token Vault.

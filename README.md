# Paseo Local Network with Asset Hub

Spin up a local Paseo relay chain with Asset Hub parachain using Zombienet. Downloads pre-built binaries, generates chain specs with `chain-spec-builder`, spawns the network, and verifies block production and dev accounts on both chains.

## Prerequisites

- [Node.js](https://nodejs.org/) 22+
- [Zombienet](https://github.com/paritytech/zombienet) installed and available in PATH
- [Rust toolchain](https://rustup.rs/) (only needed on macOS for `chain-spec-builder`)

## Running Tests

```bash
npm ci
npm test
```

## What This Tests

1. Downloads Polkadot, polkadot-parachain, and chain-spec-builder binaries
2. Downloads Paseo and Asset Hub runtime WASMs
3. Generates local chain specs using `chain-spec-builder`
4. Validates the Zombienet network configuration
5. Spawns a 2-validator relay chain + 1-collator Asset Hub parachain
6. Verifies block production on both relay chain and parachain
7. Verifies dev accounts (Alice, Bob) exist on both chains

## Network Topology

| Node | Role | RPC Port |
|------|------|----------|
| Alice | Relay validator | 9944 |
| Bob | Relay validator | 9945 |
| Collator-01 | Asset Hub collator | 9988 |

## License

MIT OR Apache-2.0

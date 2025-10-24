## ENS Offchain Subnames + Openfort Starter Kit

A Next.js starter kit demonstrating ENS Offchain Subnames with [Openfort](https://openfort.io) Embedded Wallets. It ships production-ready UX for: embedded wallet auth, subname creation, identity resolution, and avatar uploads.

### Features

- Openfort Embedded Wallets with Wagmi and React Query
- Automatic recovery via Shield session endpoint
- Offchain subname creation via secure API routes
- Preferred identity resolution (subname → ENS → truncated address)
- Account modal with username creation and avatar upload

## Get started

```bash
npx create-next-app@latest my-project -e https://github.com/thenamespace/ens-subnames-openfort-template
cd my-project
pnpm install
```

### Prerequisites

- Node.js v18+
- An ENS name you control (e.g. `namespace.eth`)
- Namespace API key from Dev Portal ([https://dev.namespace.ninja](https://dev.namespace.ninja))
- Openfort account with API keys and Shield keys ([https://dashboard.openfort.io](https://dashboard.openfort.io))
- WalletConnect Project ID ([https://dashboard.reown.com](https://dashboard.reown.com))

### Environment variables

Create a `.env.local` in the project root with the following values:

```env
# Openfort (public; required)
NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY=your_openfort_publishable_key
NEXT_PUBLIC_SHIELD_PUBLISHABLE_KEY=your_openfort_shield_publishable_key

# Openfort Recovery (server; required for automatic recovery)
OPENFORT_SECRET_KEY=your_openfort_secret_key
SHIELD_SECRET_KEY=your_openfort_shield_secret_key
SHIELD_ENCRYPTION_SHARE=your_openfort_shield_encryption_share

# Client recovery endpoint (public; required if using automatic recovery)
# Example points to Next.js API route in this repo
NEXT_PUBLIC_CREATE_ENCRYPTED_SESSION_ENDPOINT=/api/shield-session

# WalletConnect (public; required if using WalletConnect)
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_walletconnect_project_id

# ENS name (public; required)
NEXT_PUBLIC_ENS_NAME=namespace.eth

# Namespace API key (server; required)
NAMESPACE_API_KEY=your_namespace_api_key

# Avatar service + SIWE (public; optional)
NEXT_PUBLIC_AVATAR_SERVICE_URL=https://metadata.namespace.ninja
NEXT_PUBLIC_SIWE_DOMAIN=localhost:3000
NEXT_PUBLIC_SIWE_URI=http://localhost:3000
NEXT_PUBLIC_SIWE_CHAIN_ID=1
```

Notes:

- Do not expose server-only secrets in client code. `OPENFORT_SECRET_KEY`, `SHIELD_SECRET_KEY`, `SHIELD_ENCRYPTION_SHARE`, and `NAMESPACE_API_KEY` are server-only.
- The recovery endpoint returns a Shield encryption session used for automatic wallet recovery.

### Configure your ENS name

1. Visit the Namespace Dev Portal ([https://dev.namespace.ninja](https://dev.namespace.ninja))
2. Point your ENS name’s resolver to Namespace’s resolver
3. Generate your Namespace API key
4. Add the API key to `.env.local`

### Openfort setup

- Follow the Openfort React Quickstart to obtain keys and configure providers: [Openfort React Quickstart](https://www.openfort.io/docs/products/embedded-wallet/react)
- Get your Openfort API keys and Shield keys from [https://dashboard.openfort.io](https://dashboard.openfort.io)
- Get a WalletConnect Project ID from [https://dashboard.reown.com](https://dashboard.reown.com)

This repo wires providers in `src/app/providers.tsx` using `getDefaultConfig` and `OpenfortProvider`.

### Run the app

```bash
pnpm dev
```

Open `http://localhost:3000` to see the app.

### Architecture

- `src/app/providers.tsx`: Openfort + Wagmi + React Query providers
- `src/lib/namespace.ts`: Server-side Namespace client, configured with `NAMESPACE_API_KEY`
- `src/lib/namespace-client.ts`: Client-side read-only Namespace client (no API key)
- `src/app/api/shield-session/route.ts`: Returns Shield encryption session for automatic recovery
- `src/app/api/subname/create/route.ts`: Secure subname creation API (server)
- `src/app/api/subname/avatar/route.ts`: Update subname avatar text record API (server)
- `src/hooks/use-subnames.ts`: Fetch subnames and build preferred identity
- `src/hooks/use-identity.ts`: Combine ENS with preferred identity
- `src/hooks/use-upload-avatar.ts`: SIWE + upload avatar to the avatar service; updates text record
- `src/hooks/use-update-ens-avatar.ts`: Helper to update avatar via server API
- `src/components/ui/account-modal.tsx`: Account modal (create username, upload avatar)
- `src/components/ui/profile-button.tsx`: Connect flow + opens account modal

### Quick Links

- [Openfort React docs](https://www.openfort.io/docs/products/embedded-wallet/react)
- [GitHub repository](https://github.com/thenamespace/ens-subnames-openfort-template)
- [Openfort Dashboard](https://dashboard.openfort.io)
- [WalletConnect (Reown) Dashboard](https://dashboard.reown.com)
- [Namespace](https://docs.namespace.ninja/)

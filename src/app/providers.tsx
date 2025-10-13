"use client";
import React from "react";
import {
  OpenfortProvider,
  getDefaultConfig,
  AccountTypeEnum,
} from "@openfort/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig } from "wagmi";
import { baseSepolia } from "viem/chains";
 
const config = createConfig(
  getDefaultConfig({
    appName: "Openfort demo",
    chains: [baseSepolia],
    ssr: true,
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!,
  })
);
 
const queryClient = new QueryClient();
 
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <OpenfortProvider
          // Set the publishable key of your Openfort account. This field is required.
          publishableKey={process.env.NEXT_PUBLIC_OPENFORT_PUBLISHABLE_KEY!}

          // Set the wallet configuration.
          walletConfig={{
            shieldPublishableKey: process.env.NEXT_PUBLIC_SHIELD_PUBLISHABLE_KEY!,
            // If you want to use AUTOMATIC embedded wallet recovery, an encryption session is required.
            // Set this to your recovery endpoint URL from step "3. Set up the recovery endpoint" (e.g., "https://your-domain.com/api/shield-session").
            createEncryptedSessionEndpoint: process.env.NEXT_PUBLIC_CREATE_ENCRYPTED_SESSION_ENDPOINT!,
            // accountType: AccountTypeEnum.EOA,
          }}
        >
          {children}
        </OpenfortProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
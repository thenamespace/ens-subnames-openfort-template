"use client"

import { useEffect, useRef, useState } from 'react'
import { useAccount, useBalance, useConnect } from 'wagmi'
import { useIdentity } from '@/hooks/use-identity'
import { Button } from '@/components/ui/button'
import { AccountModal } from './account-modal'

export function ProfileButton() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { 
    name, 
    avatarSrc, 
    fallbackEmoji, 
    fallbackColor,
    isLoading,
    hasSubnames,
    subname,
    refetch 
  } = useIdentity(address)

  const { data: balance } = useBalance({
    address: address as `0x${string}`,
  })

  // Onboarding: open modal after login when no subname, once per session per address
  const openedForAddressRef = useRef<string | null>(null)

  useEffect(() => {
    if (!isConnected) {
      openedForAddressRef.current = null
      return
    }
    if (!address) return
    if (isLoading) return
    if (hasSubnames) return

    const normalized = address.toLowerCase()
    if (openedForAddressRef.current !== normalized) {
      setIsModalOpen(true)
      openedForAddressRef.current = normalized
    }
  }, [isConnected, address, isLoading, hasSubnames])

  // Disconnected state
  if (!isConnected) {
    return (
      <Button
        onClick={() => connect({ connector: connectors[0] })}
        className="rounded-full px-6"
      >
        Connect Wallet
      </Button>
    )
  }

  // Connected state - account chip
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-2.5 py-1 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors shadow-sm"
      >
        {/* Avatar */}
        <div className="relative w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
          {avatarSrc ? (
            <img 
              src={avatarSrc} 
              alt={name || 'Avatar'} 
              width={32}
              height={32}
              className="object-cover"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center text-base"
              style={{ backgroundColor: fallbackColor }}
            >
              {fallbackEmoji}
            </div>
          )}
        </div>

        {/* Name and optional balance */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium text-gray-900">
            {isLoading ? '...' : name}
          </span>
          {balance && (
            <span className="text-xs text-gray-500">
             {parseFloat(balance.formatted).toFixed(3)} {balance.symbol}
            </span>
          )}
        </div>
      </button>

      {/* Account Modal */}
      <AccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        address={address}
        name={name}
        avatarSrc={avatarSrc}
        fallbackEmoji={fallbackEmoji}
        fallbackColor={fallbackColor}
        balance={balance}
        hasSubnames={hasSubnames}
        subname={subname}
        refetchIdentity={refetch}
      />
    </>
  )
}


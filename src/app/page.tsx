"use client";
import Image from "next/image";
import Link from "next/link";
import { ProfileButton } from "@/components/ui/profile-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-slate-50">
      {/* Header */}
      <header className="w-full border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Namespace" width={32} height={32} />
          </div>
          <ProfileButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Hero Section */}
        <section className="text-center mb-12 lg:mb-16">
          <div className="max-w-4xl mx-auto">
            <Badge variant="default" className="mb-4 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              🚀 Ready-to-use Starter Kit
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Build with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> ENS Subnames</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Complete Next.js starter kit with Openfort embedded wallets for creating and managing Offchain ENS subnames using the Namespace SDK.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link href="https://docs.namespace.ninja" target="_blank" className="group">
                <div className="bg-white ring-1 ring-slate-200 rounded-lg p-6 h-full flex flex-col justify-between hover:ring-slate-300 transition-colors shadow-sm">
                  <h3 className="font-semibold mb-2 group-hover:text-slate-900">Namespace Docs</h3>
                  <p className="text-sm text-slate-600">Learn how to use the Namespace SDK</p>
                </div>
              </Link>
              
              <Link href="https://dev.namespace.ninja" target="_blank" className="group">
                <div className="bg-white ring-1 ring-slate-200 rounded-lg p-6 h-full flex flex-col justify-between hover:ring-slate-300 transition-colors shadow-sm">
                  <h3 className="font-semibold mb-2 group-hover:text-slate-900">Dev Portal</h3>
                  <p className="text-sm text-slate-600">Get your API key and manage domains</p>
                </div>
              </Link>
              
              <Link href="https://github.com/thenamespace/ens-subnames-openfort-template" target="_blank" className="group">
                <div className="bg-white ring-1 ring-slate-200 rounded-lg p-6 h-full flex flex-col justify-between hover:ring-slate-300 transition-colors shadow-sm">
                  <h3 className="font-semibold mb-2 group-hover:text-slate-900">GitHub Repo</h3>
                  <p className="text-sm text-slate-600">View source code and contribute</p>
                </div>
              </Link>
              
              <Link href="https://www.openfort.io/docs/products/embedded-wallet/react" target="_blank" className="group">
                <div className="bg-white ring-1 ring-slate-200 rounded-lg p-6 h-full flex flex-col justify-between hover:ring-slate-300 transition-colors shadow-sm">
                  <h3 className="font-semibold mb-2 group-hover:text-slate-900">Openfort React Docs</h3>
                  <p className="text-sm text-slate-600">Embedded wallets and recovery</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12 lg:mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-blue-600">🔗</span>
                  Wallet Integration
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Openfort connect via ProfileButton</li>
                  <li>• Account modal with username & avatar</li>
                  <li>• Preferred ENS/subname identity</li>
                  <li>• Mobile-responsive design</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-green-600">🪝</span>
                  React Hooks
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• useSubnames / usePreferredIdentity</li>
                  <li>• useUploadAvatar / useUpdateEnsAvatar</li>
                  <li>• Built-in loading and error states</li>
                  <li>• TypeScript support included</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-purple-600">🛡️</span>
                  Secure Architecture
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Server-side API key protection</li>
                  <li>• Client-side read-only operations</li>
                  <li>• Input validation and error handling</li>
                  <li>• Production-ready configuration</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 ring-1 ring-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-orange-600">⚡</span>
                  Modern Stack
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Next.js App Router</li>
                  <li>• Tailwind CSS + shadcn/ui</li>
                  <li>• TypeScript throughout</li>
                  <li>• ESLint configured</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Get API Key CTA */}
        <section className="text-center mb-12">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold mb-4">Need an API Key?</h2>
            <p className="text-slate-600 mb-6">
              Get your free Namespace API key to start creating subnames for your ENS domain
            </p>
            <Link href="https://dev.namespace.ninja" target="_blank" className="inline-block">
              <Button size="lg">Get Free API Key</Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>Made with ❤️ by Namespace • Open source under MIT</div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="https://docs.namespace.ninja" target="_blank" className="hover:text-foreground">
              Docs
            </Link>
            <Link href="https://github.com/thenamespace/ens-subnames-openfort-template" target="_blank" className="hover:text-foreground">
              GitHub
            </Link>
            <Link href="https://t.me/+5FAwyiKOTeswNTIy" target="_blank" className="hover:text-foreground">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
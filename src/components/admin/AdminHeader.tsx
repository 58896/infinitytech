'use client'

import { useTransition } from 'react'
import { logoutAction } from '@/lib/actions/auth'

export default function AdminHeader({ email, locale }: { email: string; locale: string }) {
  const [pending, startTransition] = useTransition()

  function handleLogout() {
    startTransition(() => logoutAction(locale))
  }

  return (
    <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 sticky top-0 z-10" style={{ background: '#0f172a' }}>
      <div className="text-[0.85rem] text-white/40">
        Welcome back, <span className="text-white/70">{email || 'Admin'}</span>
      </div>
      <button
        onClick={handleLogout}
        disabled={pending}
        className="flex items-center gap-2 text-[0.83rem] text-white/50 hover:text-white/80 transition-colors disabled:opacity-40"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        {pending ? 'Signing out…' : 'Sign out'}
      </button>
    </header>
  )
}

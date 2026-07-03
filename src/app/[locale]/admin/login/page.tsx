'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { usePathname } from 'next/navigation'
import { loginAction } from '@/lib/actions/auth'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-opacity disabled:opacity-60"
      style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)' }}
    >
      {pending ? 'Signing in…' : 'Sign in'}
    </button>
  )
}

export default function LoginPage() {
  const pathname = usePathname()
  const locale = pathname.startsWith('/en') ? 'en' : 'ar'

  const [state, action] = useFormState(loginAction, null)

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e2736 100%)' }}>
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-10">
          <span className="text-3xl font-extrabold tracking-tight" style={{ background: 'linear-gradient(90deg,#00c6ff,#0072ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            InfinityTech
          </span>
          <p className="text-white/40 text-sm mt-1">Admin Panel</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl p-8" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.06)' }}>
          <h1 className="text-xl font-bold text-white mb-6">Sign in</h1>

          {state?.error && (
            <div className="mb-4 px-4 py-3 rounded-lg text-sm text-red-300" style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
              {state.error}
            </div>
          )}

          <form action={action} className="space-y-4">
            <input type="hidden" name="locale" value={locale} />

            <div>
              <label className="block text-sm text-white/50 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-2 focus:ring-[#0072ff]/50"
                style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}
                placeholder="admin@infinitytechsa.com"
              />
            </div>

            <div>
              <label className="block text-sm text-white/50 mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:ring-2 focus:ring-[#0072ff]/50"
                style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.08)' }}
                placeholder="••••••••"
              />
            </div>

            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  )
}

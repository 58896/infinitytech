import createMiddleware from 'next-intl/middleware'
import { type NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'
import { createServerClient } from '@supabase/ssr'

const intlMiddleware = createMiddleware(routing)

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Protect /[locale]/admin routes
  if (pathname.match(/^\/(ar|en)\/admin/)) {
    let response = NextResponse.next({ request })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            )
            response = NextResponse.next({ request })
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            )
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      const locale = pathname.startsWith('/en') ? 'en' : 'ar'
      return NextResponse.redirect(
        new URL(`/${locale}/admin/login`, request.url)
      )
    }

    return response
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
    '/api/:path*',
  ],
}

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

export default function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const isRTL = locale === 'ar'

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'ar' ? 'en' : 'ar' })
  }

  const navLinks = [
    { href: '/#home',            label: t('home') },
    { href: '/#services',        label: t('driveThru') },
    { href: '/#digital-signage', label: t('digitalSignage') },
    { href: '/#kiosk',           label: t('kiosk') },
    { href: '/#projects',        label: t('projects') },
    { href: '/#articles',        label: t('articles') },
  ]

  return (
    <>
      {/* Lang toggle — fixed, mirrors original position */}
      <button
        onClick={switchLocale}
        className={`
          fixed top-4 z-[9999] px-5 py-2.5 rounded-lg font-bold text-sm
          bg-primary text-[#111] transition-all hover:bg-secondary hover:text-white
          ${isRTL ? 'left-4' : 'right-4'}
        `}
      >
        {locale === 'ar' ? 'EN' : 'AR'}
      </button>

      <header
        className={`
          fixed top-0 left-0 right-0 z-[1000] py-3.5 transition-all duration-300
          ${scrolled
            ? 'bg-[rgba(10,15,24,0.98)] backdrop-blur-xl'
            : 'bg-[rgba(17,24,39,0.95)] backdrop-blur-xl'
          }
        `}
      >
        <nav className="max-w-nav mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 no-underline">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #00c6ff, #7b2ff7)' }}
            >
              <Image
                src="/images/Logo.png"
                alt="InfinityTech"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="text-2xl font-extrabold"
              style={{
                background: 'linear-gradient(90deg, #00c6ff, #ff4da6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              InfinityTech
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[26px] h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 flex-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/85 px-2.5 py-2 rounded-lg text-[0.9rem] font-medium transition-all hover:text-primary hover:bg-primary/10 whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                className="px-5 py-2 rounded-[10px] text-[0.9rem] font-bold whitespace-nowrap text-[#111]"
                style={{ background: 'linear-gradient(90deg, #00c6ff, #0072ff)' }}
              >
                {t('contact')}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(17,24,39,0.98)] border-t border-white/15 p-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-white/85 px-3 py-2.5 rounded-lg text-[0.9rem] font-medium hover:text-primary hover:bg-primary/10 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/#contact"
                  className="block px-3 py-2.5 rounded-lg text-[0.9rem] font-bold text-[#111] mt-1"
                  style={{ background: 'linear-gradient(90deg, #00c6ff, #0072ff)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  )
}

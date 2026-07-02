import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-[#0a0f18] border-t border-white/15 pt-12 pb-6">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #00c6ff, #7b2ff7)' }}
              >
                <Image src="/images/Logo.png" alt="InfinityTech" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <span
                className="text-2xl font-extrabold"
                style={{ background: 'linear-gradient(90deg, #00c6ff, #ff4da6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                InfinityTech
              </span>
            </div>
            <p className="text-white/50 text-sm leading-[1.7] mb-6">{t('tagline')}</p>
            <div className="flex gap-3">
              {[
                { label: 'YouTube', icon: '▶' },
                { label: 'TikTok',  icon: '+' },
                { label: 'Twitter', icon: '𝕏' },
                { label: 'LinkedIn',icon: 'in' },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[38px] h-[38px] bg-white/5 border border-white/15 rounded-[10px] flex items-center justify-center text-[0.9rem] transition-all hover:bg-primary hover:border-primary hover:text-[#111]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-[1.5px] text-white/50 mb-5">{t('services')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '/#digital-signage', label: t('links.digitalSignage') },
                { href: '/#kiosk',           label: t('links.kiosk') },
                { href: '/#services',        label: t('links.drivethru') },
                { href: '/#services',        label: t('links.contentManagement') },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/60 text-[0.9rem] transition-colors hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-[1.5px] text-white/50 mb-5">{t('company')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '/#about',    label: t('links.about') },
                { href: '/#projects', label: t('links.projects') },
                { href: '/#articles', label: t('links.articles') },
                { href: '#',          label: t('links.careers') },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/60 text-[0.9rem] transition-colors hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[0.9rem] font-bold uppercase tracking-[1.5px] text-white/50 mb-5">{t('support')}</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { href: '/#contact', label: t('links.contactUs') },
                { href: '#',         label: t('links.techSupport') },
                { href: '#',         label: t('links.privacy') },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-white/60 text-[0.9rem] transition-colors hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6 flex flex-wrap items-center justify-between gap-2 text-white/40 text-[0.83rem]">
          <span>{t('copyright')}</span>
          <span>{t('madeIn')}</span>
        </div>
      </div>
    </footer>
  )
}

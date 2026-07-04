'use client'

import { useState, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { submitJobApplication } from '@/lib/actions/jobs'

type Props = {
  jobId: string
  jobTitle: string
  onClose: () => void
}

type FieldErrors = Partial<Record<string, string[]>>

export default function ApplicationModal({ jobId, jobTitle, onClose }: Props) {
  const t = useTranslations('careers')
  const tCommon = useTranslations('common')
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate_limited'>('idle')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [fileError, setFileError] = useState('')
  const [fileName, setFileName] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')
    if (!file) { setFileName(''); return }
    if (file.size > 5 * 1024 * 1024) {
      setFileError(t('modal.fileTooLarge'))
      e.target.value = ''
      setFileName('')
      return
    }
    setFileName(file.name)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setFieldErrors({})
    setFileError('')

    const fd = new FormData(e.currentTarget)
    fd.set('job_listing_id', jobId)

    const result = await submitJobApplication(fd)

    if (result.success) {
      setStatus('success')
    } else if (result.fieldErrors) {
      setFieldErrors(result.fieldErrors)
      setStatus('idle')
    } else if (result.error === 'rate_limited') {
      setStatus('rate_limited')
    } else if (result.error === 'file_too_large') {
      setFileError(t('modal.fileTooLarge'))
      setStatus('idle')
    } else if (result.error === 'invalid_file_type') {
      setFileError(t('modal.invalidFileType'))
      setStatus('idle')
    } else {
      setStatus('error')
    }
  }

  const fieldErr = (name: string) => (fieldErrors as Record<string, string[] | undefined>)[name]?.[0]

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="w-full max-w-lg rounded-[20px] p-8 relative max-h-[90vh] overflow-y-auto"
        style={{ background: 'var(--dark2)', border: '1px solid var(--border)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 end-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
        >
          ✕
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold mb-2">{t('modal.successTitle')}</h3>
            <p className="text-white/65">{t('modal.successBody')}</p>
            <button
              onClick={onClose}
              className="mt-6 px-6 py-2.5 rounded-xl font-bold text-[#111]"
              style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
            >
              {t('modal.close')}
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-1">{t('modal.title')}</h2>
            <p className="text-white/55 text-[0.88rem] mb-6">{jobTitle}</p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="job_listing_id" value={jobId} />

              <div className="mb-4">
                <input required name="applicant_name" placeholder={t('modal.name')}
                  className={`modal-input${fieldErr('applicant_name') ? ' border-accent2' : ''}`} />
                {fieldErr('applicant_name') && <p className="text-accent2 text-[0.75rem] mt-1">{fieldErr('applicant_name')}</p>}
              </div>
              <div className="mb-4">
                <input required type="email" name="email" placeholder={t('modal.email')}
                  className={`modal-input${fieldErr('email') ? ' border-accent2' : ''}`} />
                {fieldErr('email') && <p className="text-accent2 text-[0.75rem] mt-1">{fieldErr('email')}</p>}
              </div>
              <div className="mb-4">
                <input name="phone" placeholder={t('modal.phone')} className="modal-input" />
              </div>
              <div className="mb-4">
                <textarea name="cover_letter" placeholder={t('modal.coverLetter')}
                  rows={4} className="modal-input resize-none" />
              </div>
              <div className="mb-6">
                <label
                  className="flex items-center gap-3 cursor-pointer p-3 rounded-xl transition-colors hover:bg-white/5"
                  style={{ border: '1px dashed rgba(255,255,255,0.25)' }}
                >
                  <span className="text-2xl">📎</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[0.88rem] font-medium">{fileName || t('modal.resume')}</p>
                    <p className="text-white/45 text-[0.75rem]">{t('modal.resumeHint')}</p>
                  </div>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx"
                    className="hidden" onChange={handleFileChange} />
                </label>
                {fileError && <p className="text-accent2 text-[0.75rem] mt-1">{fileError}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full font-bold py-3.5 rounded-xl text-[0.95rem] text-[#111] transition-all hover:opacity-90 disabled:opacity-70"
                style={{ background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }}
              >
                {status === 'loading' ? tCommon('loading') : t('modal.submit')}
              </button>

              {status === 'error' && (
                <p className="text-center mt-3 text-accent2 text-[0.88rem]">{t('modal.error')}</p>
              )}
              {status === 'rate_limited' && (
                <p className="text-center mt-3 text-accent2 text-[0.88rem]">{t('modal.rateLimited')}</p>
              )}
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .modal-input {
          width: 100%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          padding: 0.8rem 1rem;
          color: #fff;
          font-family: inherit;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .modal-input:focus { border-color: var(--primary); }
        .modal-input::placeholder { color: rgba(255,255,255,0.4); }
        .border-accent2 { border-color: var(--accent2) !important; }
      `}</style>
    </div>
  )
}

'use client'

import { useState, useTransition, useEffect } from 'react'
import Image from 'next/image'
import { getProjects, type ProjectItem } from '@/lib/db/projects'
import { createProject, updateProject, deleteProject } from '@/lib/actions/projects'

type ProjectRow = ProjectItem & { id?: string }

const EMPTY: Partial<ProjectRow> = {
  title_ar: '', title_en: '', desc_ar: '', desc_en: '',
  badge_ar: '', badge_en: '', badgeColor: 'rgba(123,47,247,0.9)', images: [],
}

function Modal({
  project,
  onClose,
  onSave,
}: {
  project: Partial<ProjectRow> | null
  onClose: () => void
  onSave: (fd: FormData, id?: string) => void
}) {
  if (!project) return null
  const isEdit = !!project.id

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSave(new FormData(e.currentTarget), project!.id)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)' }}>
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 space-y-5" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">{isEdit ? 'Edit Project' : 'New Project'}</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white/70">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="is_published" value="true" />
          <input type="hidden" name="sort_order" value="0" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Title (EN) *</label>
              <input name="title_en" required defaultValue={project.title_en} className="admin-input w-full" placeholder="Client – Service Type" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Title (AR) *</label>
              <input name="title_ar" required defaultValue={project.title_ar} dir="rtl" className="admin-input w-full" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Description (EN) *</label>
              <textarea name="description_en" required defaultValue={project.desc_en} rows={3} className="admin-input w-full resize-none" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Description (AR) *</label>
              <textarea name="description_ar" required defaultValue={project.desc_ar} rows={3} dir="rtl" className="admin-input w-full resize-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-1.5">Client Name</label>
            <input name="client_name" defaultValue={(project as ProjectRow & { client_name?: string }).client_name} className="admin-input w-full" />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Badge (EN)</label>
              <input name="badge_en" defaultValue={project.badge_en} className="admin-input w-full" placeholder="Drive-Thru" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Badge (AR)</label>
              <input name="badge_ar" defaultValue={project.badge_ar} dir="rtl" className="admin-input w-full" />
            </div>
            <div>
              <label className="block text-xs text-white/40 mb-1.5">Badge Color</label>
              <input name="badge_color" defaultValue={project.badgeColor} className="admin-input w-full" placeholder="rgba(123,47,247,0.9)" />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 mb-1.5">Image Paths (one per line)</label>
            <textarea
              name="images"
              defaultValue={project.images?.join('\n')}
              rows={4}
              className="admin-input w-full resize-none font-mono text-xs"
              placeholder="/images/project-image-1.jpeg&#10;/images/project-image-2.jpeg"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)' }}
            >
              {isEdit ? 'Update' : 'Create'}
            </button>
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl text-sm text-white/50 hover:text-white/70 transition-colors" style={{ background: 'rgba(255,255,255,0.05)' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<ProjectRow[]>([])
  const [modal, setModal] = useState<Partial<ProjectRow> | null>(null)
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState('')

  useEffect(() => { getProjects().then(setProjects) }, [])

  function flash(msg: string) {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  function handleSave(fd: FormData, id?: string) {
    startTransition(async () => {
      const res = id ? await updateProject(id, fd) : await createProject(fd)
      if (res.error) { flash(`Error: ${res.error}`); return }
      flash(id ? 'Project updated!' : 'Project created!')
      setModal(null)
      getProjects().then(setProjects)
    })
  }

  function handleDelete(id: string) {
    if (!confirm('Delete this project?')) return
    startTransition(async () => {
      const res = await deleteProject(id)
      if (res.error) { flash(`Error: ${res.error}`); return }
      flash('Project deleted.')
      getProjects().then(setProjects)
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-white/40 text-sm mt-1">{projects.length} portfolio projects</p>
        </div>
        <button
          onClick={() => setModal(EMPTY)}
          className="px-4 py-2 rounded-xl text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(90deg,#0072ff,#00c6ff)' }}
        >
          + New Project
        </button>
      </div>

      {message && (
        <div className="px-4 py-3 rounded-xl text-sm text-white/80" style={{ background: 'rgba(0,114,255,0.1)', border: '1px solid rgba(0,114,255,0.2)' }}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <div key={(p as ProjectRow & { id?: string }).id ?? i} className="rounded-2xl overflow-hidden" style={{ background: '#1e2736', border: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Image preview */}
            <div className="relative h-[160px] bg-black/20">
              {p.images?.[0] ? (
                <Image src={p.images[0]} alt={p.title_en} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl">🖼️</div>
              )}
              <span className="absolute top-3 end-3 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ background: p.badgeColor }}>
                {p.badge_en}
              </span>
            </div>

            <div className="p-4">
              <div className="font-semibold text-white text-sm leading-snug">{p.title_en}</div>
              <div className="text-white/40 text-xs mt-0.5 line-clamp-2 leading-relaxed">{p.desc_en}</div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setModal({ ...p, id: (p as ProjectRow & { id?: string }).id })}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white/70 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete((p as ProjectRow & { id?: string }).id ?? '')}
                  disabled={isPending}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-400/70 hover:text-red-400 transition-colors"
                  style={{ background: 'rgba(239,68,68,0.06)' }}
                >
                  Delete
                </button>
                <span className="ml-auto text-xs text-white/20">{p.images?.length ?? 0} img{(p.images?.length ?? 0) !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal project={modal} onClose={() => setModal(null)} onSave={handleSave} />
    </div>
  )
}

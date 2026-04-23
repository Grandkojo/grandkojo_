'use client'

import { useState } from 'react'

interface CaseStudyPhotoGalleryProps {
  title: string
  photos: string[]
}

export default function CaseStudyPhotoGallery({ title, photos }: CaseStudyPhotoGalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null)

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '12px',
        }}
      >
        {photos.map((photoUrl, index) => (
          <figure
            key={`${photoUrl}-${index + 1}`}
            style={{
              margin: 0,
              border: '1px solid var(--parchment)',
              borderRadius: '6px',
              overflow: 'hidden',
              background: '#fff',
              position: 'relative',
            }}
          >
            <img
              src={photoUrl}
              alt={`${title} project photo ${index + 1}`}
              style={{ width: '100%', height: '240px', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
            <button
              type="button"
              onClick={() => setActivePhotoIndex(index)}
              style={{
                position: 'absolute',
                right: '10px',
                bottom: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                border: '1px solid rgba(245, 240, 232, 0.7)',
                background: 'rgba(26, 20, 16, 0.75)',
                color: 'var(--cream)',
                padding: '5px 8px',
                borderRadius: '2px',
                cursor: 'pointer',
              }}
            >
              Expand
            </button>
          </figure>
        ))}
      </div>

      {activePhotoIndex !== null ? (
        <div
          onClick={() => setActivePhotoIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            background: 'rgba(10, 10, 10, 0.78)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{ position: 'relative', maxWidth: 'min(1100px, 96vw)', maxHeight: '90vh' }}
          >
            <button
              type="button"
              onClick={() => setActivePhotoIndex(null)}
              aria-label="Close image preview"
              style={{
                position: 'absolute',
                top: '-38px',
                right: '0',
                border: '1px solid rgba(245, 240, 232, 0.45)',
                background: 'rgba(26, 20, 16, 0.88)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '6px 10px',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
            >
              Close
            </button>
            <img
              src={photos[activePhotoIndex]}
              alt={`${title} enlarged photo ${activePhotoIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                display: 'block',
                borderRadius: '6px',
                border: '1px solid rgba(245, 240, 232, 0.45)',
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: 'linear-gradient(135deg, #F5F0E8, #EFE7D7)',
          color: '#1A1410',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: 20,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: '1px solid #D4C9A8',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: 60,
            width: 420,
            height: 420,
            borderRadius: 9999,
            border: '1px solid #D4C9A8',
            opacity: 0.85,
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 210,
            top: 78,
            width: 260,
            height: 380,
            borderRadius: 16,
            border: '1px solid rgba(212, 201, 168, 0.8)',
            background: 'rgba(245,240,232,0.35)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 0 0 120px',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: 122,
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: -2,
              fontFamily: 'Georgia, Times New Roman, serif',
            }}
          >
            grandkojo
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 36,
              color: '#C4622D',
              letterSpacing: 7,
              textTransform: 'uppercase',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
          >
            Software & Services
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

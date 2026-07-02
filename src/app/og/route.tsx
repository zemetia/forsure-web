import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#111',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(202,164,82,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Gold dot */}
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#C9A852',
            marginBottom: '24px',
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontSize: '16px',
            color: '#C9A852',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            fontFamily: 'system-ui',
            fontWeight: 600,
          }}
        >
          Agency Digital Premium · Indonesia
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontSize: '72px',
            color: '#d4d4d4',
            fontWeight: 300,
            lineHeight: 1.1,
            textAlign: 'center',
            margin: '0 0 12px',
            fontStyle: 'italic',
          }}
        >
          Your Brand
        </h1>
        <h1
          style={{
            fontSize: '72px',
            color: '#C9A852',
            fontWeight: 300,
            lineHeight: 1.1,
            textAlign: 'center',
            margin: '0 0 12px',
            fontStyle: 'italic',
          }}
        >
          Deserves to Be Seen.
        </h1>

        {/* Brand name */}
        <p
          style={{
            marginTop: '32px',
            fontSize: '18px',
            color: '#555',
            fontFamily: 'system-ui',
            letterSpacing: '0.05em',
          }}
        >
          Forsure Digitalindo
        </p>

        {/* Bottom border line */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            width: '80px',
            height: '1px',
            background: '#C9A852',
            opacity: 0.5,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}

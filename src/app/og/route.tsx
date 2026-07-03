import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET() {
  const logoPath = path.join(process.cwd(), 'public', 'logo.png');
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            background:
              'radial-gradient(ellipse, rgba(202,164,82,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Forsure Digitalindo"
          width={180}
          height={180}
          style={{ objectFit: 'contain', marginBottom: '32px' }}
        />

        {/* Brand name */}
        <p
          style={{
            fontSize: '36px',
            color: '#d4d4d4',
            fontFamily: 'system-ui',
            fontWeight: 300,
            letterSpacing: '0.08em',
            margin: '0 0 12px',
          }}
        >
          Forsure Digitalindo
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: '16px',
            color: '#C9A852',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: 'system-ui',
            fontWeight: 500,
            margin: 0,
          }}
        >
          Agency Digital Premium · Indonesia
        </p>

        {/* Bottom accent line */}
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

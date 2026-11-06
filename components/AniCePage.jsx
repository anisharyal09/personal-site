import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bell, Clipboard, Files, MessageSquare, Monitor, Music2, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const REPOSITORY = 'https://github.com/anisharyal09/aniCe';
const PAGE_TITLE = 'aniCe — Mac and Android, connected';
const DESCRIPTION = 'aniCe connects macOS and Android for file sharing, device control, playback, clipboard, SMS and Find Device over encrypted local connections.';
const PAGE_URL = 'https://anisharyal09.com.np/anice';
const FEATURES = [
  'Two-way file sharing',
  'Control Mac from Android',
  'Control Android from Mac',
  'Now Playing controls',
  'Clipboard and Quick Paste Tray',
  'Android SMS on Mac',
  'Find Device',
  'QR pairing with P-256 ECDH, a 256-bit PSK and SHA-256 fingerprint commitment',
  'Six-digit OPAQUE PIN pairing with Argon2id',
  'RFC 9528 EDHOC session handshake',
  'ChaCha20-Poly1305 handshake protection and AES-256-GCM application records',
  'SwiftUI macOS app and Kotlin Android app',
  'Rust OPAQUE PAKE bridge for six-digit PIN pairing',
  'Objective-C adapter for Mac Classic Bluetooth HID control',
];

const implementation = [
  ['macOS', 'SwiftUI · AppKit'],
  ['Android', 'Kotlin · Jetpack Compose'],
  ['PIN pairing', 'Rust · OPAQUE PAKE bridge'],
  ['Mac keyboard & trackpad', 'Objective-C · Classic Bluetooth HID'],
];

const featureGroups = [
  {
    title: 'Control',
    features: [
      { icon: <Smartphone size={16} />, title: 'Control Mac', text: 'Type with your Android keyboard and use the phone’s screen as a trackpad to move, click and scroll on Mac.' },
      { icon: <Monitor size={16} />, title: 'Control Android', text: 'Use the Mac keyboard and trackpad with a paired Android phone.' },
      { icon: <Music2 size={16} />, title: 'Now Playing', text: 'Control supported Mac playback from Android.' },
    ],
  },
  {
    title: 'Share',
    features: [
      { icon: <Files size={16} />, title: 'File transfer', text: 'Send files seamlessly between Mac and Android in either direction.' },
      { icon: <Clipboard size={16} />, title: 'Clipboard and Quick Paste', text: 'Share text and links, with optional local history and a searchable Mac tray.' },
    ],
  },
  {
    title: 'Messages and devices',
    features: [
      { icon: <MessageSquare size={16} />, title: 'SMS on Mac', text: 'Get Android message notifications and reply from Mac.' },
      { icon: <Bell size={16} />, title: 'Find Device', text: 'Send a local alert to a paired device. No location access.' },
    ],
  },
];

const privacyDetails = [
  ['QR pairing', 'Ephemeral P-256 ECDH, a 256-bit PSK and a SHA-256 fingerprint commitment. Both devices approve the link.'],
  ['PIN pairing', 'Six-digit OPAQUE PAKE with Argon2id.'],
  ['Device identity', 'Paired P-256 identities are pinned and verified during session setup.'],
  ['Session handshake', 'RFC 9528 EDHOC, method 0 / suite 5, authenticates each session.'],
  ['Encryption', 'EDHOC suite 5 uses ChaCha20-Poly1305; application records use directional AES-256-GCM.'],
  ['Transport & privacy', 'Bluetooth LE or optional direct LAN. No cloud accounts, external relays or telemetry.'],
];

function AniCeMetadata() {
  useEffect(() => {
    const oldTitle = document.title;
    const meta = [
      ['meta[name="description"]', 'name', 'description', DESCRIPTION],
      ['meta[property="og:type"]', 'property', 'og:type', 'website'],
      ['meta[property="og:url"]', 'property', 'og:url', PAGE_URL],
      ['meta[property="og:title"]', 'property', 'og:title', PAGE_TITLE],
      ['meta[property="og:description"]', 'property', 'og:description', DESCRIPTION],
      ['meta[property="og:image"]', 'property', 'og:image', 'https://anisharyal09.com.np/anice-og.svg'],
      ['meta[property="og:image:alt"]', 'property', 'og:image:alt', 'aniCe connects Mac and Android'],
      ['meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image'],
      ['meta[name="twitter:title"]', 'name', 'twitter:title', PAGE_TITLE],
      ['meta[name="twitter:description"]', 'name', 'twitter:description', DESCRIPTION],
      ['meta[name="twitter:image"]', 'name', 'twitter:image', 'https://anisharyal09.com.np/anice-og.svg'],
    ];
    const previousMeta = meta.map(([selector]) => {
      const element = document.querySelector(selector);
      return { element, content: element?.getAttribute('content') ?? null };
    });
    const canonical = document.querySelector('link[rel="canonical"]');
    const oldCanonical = canonical?.getAttribute('href');
    const schema = document.getElementById('anice-jsonld');
    const oldSchema = schema?.textContent;
    let createdSchema = null;

    document.title = PAGE_TITLE;
    meta.forEach(([selector, attribute, key, content]) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });
    canonical?.setAttribute('href', PAGE_URL);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'aniCe',
      description: DESCRIPTION,
      url: PAGE_URL,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS, Android',
      featureList: FEATURES,
      codeRepository: REPOSITORY,
      license: 'https://www.gnu.org/licenses/gpl-3.0.html',
      creator: { '@type': 'Person', name: 'Anish Aryal' },
    };
    const activeSchema = schema || (createdSchema = document.createElement('script'));
    activeSchema.id = 'anice-jsonld';
    activeSchema.type = 'application/ld+json';
    activeSchema.textContent = JSON.stringify(jsonLd);
    if (createdSchema) document.head.appendChild(createdSchema);

    return () => {
      document.title = oldTitle;
      meta.forEach(([selector], index) => {
        const { element, content } = previousMeta[index];
        if (!element) document.querySelector(selector)?.remove();
        else if (content === null) element.removeAttribute('content');
        else element.setAttribute('content', content);
      });
      if (canonical && oldCanonical) canonical.setAttribute('href', oldCanonical);
      if (createdSchema) createdSchema.remove();
      else if (schema && oldSchema !== undefined) schema.textContent = oldSchema;
    };
  }, []);

  return null;
}

export default function AniCePage() {
  return (
    <div className="relative z-10 w-full">
      <AniCeMetadata />
      <div className="max-w-6xl mx-auto px-3 sm:px-6 pt-28 sm:pt-36 pb-14 sm:pb-20">
        <section className="glass-panel rounded-2xl p-6 sm:p-10" aria-labelledby="anice-title">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-electric transition-colors">
            <ArrowLeft size={14} /> Portfolio
          </Link>

          <div className="mt-9 sm:mt-12 max-w-3xl">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xl font-semibold tracking-tight text-white">ani<span className="text-electric">Ce</span></span>
              <span className="font-mono text-xs text-gray-400">macOS <span className="text-electric">↔</span> Android</span>
            </div>
            <h1 id="anice-title" className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mac and Android, connected.
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-300">
              aniCe brings file sharing, device control, playback, clipboard, SMS and device alerts to one paired connection.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={REPOSITORY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-electric px-4 py-2.5 text-xs font-mono font-semibold text-black transition-colors hover:bg-electric/90">
                Source on GitHub <ArrowUpRight size={14} />
              </a>
              <a href="#anice-features" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-200 transition-colors hover:border-electric/40 hover:text-electric">
                Explore features <ArrowRight size={14} />
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck size={14} className="text-electric" />
              Local connections · encrypted sessions · no cloud relay
            </p>
          </div>
        </section>

        <section id="anice-features" className="scroll-mt-28 pt-12 sm:pt-16" aria-labelledby="anice-features-title">
          <div className="mb-6 border-b border-white/10 pb-4">
            <h2 id="anice-features-title" className="text-2xl font-bold tracking-tight text-white">Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featureGroups.map((group) => (
              <section key={group.title} className="glass-panel rounded-2xl p-5 sm:p-6" aria-label={group.title}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-electric">{group.title}</h3>
                <div className="mt-3 divide-y divide-white/10">
                  {group.features.map((feature) => (
                    <article key={feature.title} className="py-4 first:pt-2 last:pb-1">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                        <span className="text-electric" aria-hidden="true">{feature.icon}</span>
                        {feature.title}
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{feature.text}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10 glass-panel rounded-2xl p-5 sm:p-7" aria-labelledby="anice-privacy-title">
          <h2 id="anice-privacy-title" className="text-lg font-bold text-white">Pairing, cryptography and privacy</h2>
          <dl className="mt-4 divide-y divide-white/10">
            {privacyDetails.map(([term, detail]) => (
              <div key={term} className="grid grid-cols-1 sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-3 first:pt-0 last:pb-0">
                <dt className="text-xs font-mono text-gray-300">{term}</dt>
                <dd className="m-0 text-xs leading-relaxed text-gray-400">{detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/10 pt-5 sm:grid-cols-4" aria-label="Implementation stack">
          {implementation.map(([platform, tools]) => (
            <div key={platform}>
              <h2 className="text-[10px] font-mono text-gray-500">{platform}</h2>
              <p className="mt-1 text-xs leading-relaxed text-gray-300">{tools}</p>
            </div>
          ))}
        </section>

        <footer className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10 pt-5 text-xs text-gray-500">
          <span>macOS · SwiftUI <span className="px-1 text-electric">/</span> Android · Kotlin</span>
          <a href={REPOSITORY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-gray-400 hover:text-electric transition-colors">
            GitHub <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
    </div>
  );
}

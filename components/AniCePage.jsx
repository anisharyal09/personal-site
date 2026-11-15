import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bell, Clipboard, Download, Files, Gauge, Keyboard, MessageSquare, Monitor, Moon, Music2, ShieldCheck, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ANICE, ANICE_FEATURE_GROUPS, ANICE_SCHEMA_FEATURES } from '../src/data/anice.js';

const PAGE_TITLE = 'aniCe — Mac and Android, connected';
const DESCRIPTION = ANICE.metadataDescription;
const PAGE_URL = 'https://anisharyal09.com.np/anice';

const implementation = [
  ['macOS', 'Swift 6 · SwiftUI · AppKit'],
  ['Android', 'Kotlin · Jetpack Compose · Material 3'],
  ['PIN pairing', 'Rust · OPAQUE PAKE bridge'],
  ['Mac keyboard & trackpad', 'Objective-C · Classic Bluetooth HID'],
];

const FEATURE_ICONS = {
  files: Files,
  clipboard: Clipboard,
  monitor: Monitor,
  smartphone: Smartphone,
  keyboard: Keyboard,
  gauge: Gauge,
  bell: Bell,
  messages: MessageSquare,
  music: Music2,
  moon: Moon,
};

const privacyDetails = [
  ['QR pairing', 'Ephemeral P-256 ECDH, a 256-bit PSK and a SHA-256 fingerprint commitment. Both devices approve the link.'],
  ['PIN pairing', 'Six-digit OPAQUE PAKE with Argon2id.'],
  ['Device identity', 'Paired P-256 identities are pinned and verified during session setup.'],
  ['Session handshake', 'RFC 9528 EDHOC, method 0 / suite 5, authenticates each session.'],
  ['Encryption', 'EDHOC suite 5 uses ChaCha20-Poly1305; application records use directional AES-256-GCM.'],
  ['Transport & privacy', 'Bluetooth LE or direct LAN; Mac-to-Android input uses system Bluetooth HID. No accounts, cloud relays, analytics or telemetry. Update checks contact GitHub Releases directly.'],
  ['Key storage', 'Android Keystore and the macOS Login Keychain store device identities. Current Mac builds do not claim Secure Enclave isolation.'],
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
      url: ANICE.website,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS, Android',
      softwareVersion: ANICE.version,
      isAccessibleForFree: true,
      downloadUrl: ANICE.releases,
      featureList: ANICE_SCHEMA_FEATURES,
      codeRepository: ANICE.repository,
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
              <span className="rounded-full border border-electric/30 bg-electric/5 px-2.5 py-1 text-[10px] font-mono text-electric">{ANICE.status}</span>
            </div>
            <h1 id="anice-title" className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mac and Android, connected.
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-300">
              {ANICE.description} Free and open source.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={ANICE.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-electric px-4 py-2.5 text-xs font-mono font-semibold text-black transition-colors hover:bg-electric/90">
                Visit aniCe website <ArrowUpRight size={14} />
              </a>
              <a href={ANICE.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-200 transition-colors hover:border-electric/40 hover:text-electric">
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
            {ANICE_FEATURE_GROUPS.map((group) => (
              <section key={group.title} className="glass-panel rounded-2xl p-5 sm:p-6" aria-label={group.title}>
                <h3 className="font-mono text-xs uppercase tracking-wider text-electric">{group.title}</h3>
                <div className="mt-3 divide-y divide-white/10">
                  {group.features.map((feature) => {
                    const Icon = FEATURE_ICONS[feature.icon];
                    return (
                      <article key={feature.name} className="py-4 first:pt-2 last:pb-1">
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-white">
                          <Icon size={16} className="flex-shrink-0 text-electric" aria-hidden="true" />
                          {feature.name}
                        </h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{feature.desc}</p>
                      </article>
                    );
                  })}
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

        <section className="mt-10 glass-panel rounded-2xl p-5 sm:p-7" aria-labelledby="anice-download-title">
          <h2 id="anice-download-title" className="text-lg font-bold text-white">Get aniCe</h2>
          <p className="mt-3 text-xs font-mono text-electric">{ANICE.status} · v{ANICE.version}</p>
          <p className="mt-2 text-sm leading-relaxed text-gray-400">{ANICE.releaseNote}</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <a href={ANICE.downloads.android} aria-describedby="anice-android-requirements" className="flex items-center justify-between gap-3 rounded-xl bg-electric px-4 py-3 text-xs font-mono font-semibold text-black transition-colors hover:bg-electric/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric">
                <span className="inline-flex items-center gap-2">
                  <Smartphone size={16} aria-hidden="true" /> Download Android APK
                </span>
                <Download size={16} aria-hidden="true" />
              </a>
              <p id="anice-android-requirements" className="mt-2 text-xs leading-relaxed text-gray-400">{ANICE.requirements.android}</p>
            </div>
            <div>
              <a href={ANICE.downloads.mac} aria-describedby="anice-mac-requirements" className="flex items-center justify-between gap-3 rounded-xl bg-electric px-4 py-3 text-xs font-mono font-semibold text-black transition-colors hover:bg-electric/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric">
                <span className="inline-flex items-center gap-2">
                  <Monitor size={16} aria-hidden="true" /> Download Mac ZIP
                </span>
                <Download size={16} aria-hidden="true" />
              </a>
              <p id="anice-mac-requirements" className="mt-2 text-xs leading-relaxed text-gray-400">{ANICE.requirements.mac}</p>
            </div>
          </div>
          <p className="mt-5 text-xs text-gray-400">Install on Mac with Homebrew:</p>
          <code className="mt-2 block break-all rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-gray-200">
            brew install anisharyal09/tap/anice
          </code>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={ANICE.installGuide} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-200 transition-colors hover:border-electric/40 hover:text-electric">
              First installation guide <ArrowUpRight size={14} />
            </a>
            <a href={ANICE.releases} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-electric/30 px-4 py-2.5 text-xs font-mono text-electric transition-colors hover:border-electric hover:text-white">
              View release on GitHub <ArrowUpRight size={14} />
            </a>
            <a href={ANICE.preview} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-mono text-gray-200 transition-colors hover:border-electric/40 hover:text-electric">
              Browser preview <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">The browser preview uses sample data. Native file sharing and device controls require the installed apps.</p>
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
          <div className="flex flex-wrap gap-4">
            <Link to={ANICE.support} className="inline-flex items-center gap-1.5 font-mono text-gray-400 hover:text-electric transition-colors">
              Support aniCe <ArrowRight size={13} />
            </Link>
            <a href={ANICE.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-gray-400 hover:text-electric transition-colors">
              aniCe website <ArrowUpRight size={13} />
            </a>
            <a href={ANICE.repository} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-gray-400 hover:text-electric transition-colors">
              GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Monitor, Smartphone, Cpu, Puzzle, Download, ArrowRight, X } from 'lucide-react';
import feedFreeIcon from '../src/assets/icon.webp';
import aniAuthIcon from '../src/assets/aniauth-icon.webp';

const ChromeLogo = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.21 0 4.89 2.19 3.23 5.42l4.03 6.98C7.62 10.45 9.61 9 12 9c2.72 0 5 1.73 5.8 4.15l4.89-8.47C20.44 1.83 16.5 0 12 0zM2.06 6.91C.74 9.17 0 11.75 0 14.5c0 5.48 3.72 10.09 8.75 11.41l4.03-6.98C10.38 18.55 8.39 17.1 7.6 14.68l-5.54-7.77zM16.4 12.58C16.4 15.02 15.09 17.06 13.06 18H20.7c2.09-2.3 3.3-5.26 3.3-8.5 0-3.32-.93-6.42-2.54-9.06l-5.06 8.14zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const FirefoxLogo = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-.12 3.012c-1.397.05-3.08.775-4.226 2.05-2.28 2.534-1.954 6.845-1.954 6.845a7.35 7.35 0 0 1 1.054-2.85c.677-1.127 1.868-2.072 3.498-2.483.585-.148 1.403-.213 1.258.468-.13.61-.83 1.156-1.298 1.703-1.077 1.258-1.523 2.825-1.523 4.49 0 3.327 2.456 5.862 5.617 5.862 3.12 0 5.617-2.617 5.617-5.862 0-3.21-2.29-6.467-5.01-7.76-.796-.379-1.558-.577-2.062-.647.534-.233 1.282-.361 2.076-.361 3.535 0 7.42 2.617 7.42 7.76 0 4.148-3.045 7.76-7.42 7.76-4.375 0-7.42-3.612-7.42-7.76 0-3.418 2.05-7.76 6.87-8.19v-.03z" />
  </svg>
);

const creationCategories = [
  {
    category: 'Mobile & Wearables',
    icon: <Smartphone className="text-electric" size={20} />,
    items: [
      {
        name: 'aniAuth',
        badge: 'Android & Wear OS',
        icon: aniAuthIcon,
        desc: 'A minimalist, local-first TOTP authenticator for Android smartphones and Wear OS smartwatches with wrist code syncing.',
        tech: ['Kotlin 2.0', 'Jetpack Compose', 'Android KeyStore', 'Wear OS'],
        github: 'https://github.com/anishcreations/aniAuth',
        download: 'https://github.com/anishcreations/aniAuth/releases',
        details: {
          tagline: 'Minimalist, privacy-focused 2FA authenticator combining aesthetic Material 3 design with hardware-backed encryption.',
          features: [
            { name: 'Hardware-Backed KeyStore Encryption', desc: 'Master 256-bit AES encryption keys remain isolated inside hardware TEE/SE enclave via Android KeyStore. Raw shared secrets are encrypted using AES/GCM/NoPadding cipher.' },
            { name: 'Wear OS Bluetooth Syncing', desc: 'Wirelessly transfer 2FA accounts to Wear OS smartwatches over Bluetooth, protected by phone biometric verification.' },
            { name: 'Duress PIN Protection', desc: 'Configure max attempt limits (3, 6, 9) on watch; automatically wipes all watch accounts if PIN attempts are exceeded.' },
            { name: '100% Offline & Private', desc: 'Requests zero network permissions. Operates completely sandbox-isolated on-device.' },
            { name: 'Bitwarden & Universal Importer', desc: 'Parses Bitwarden JSON exports (login.totp) and standard otpauth:// URIs with dynamic key re-encryption.' },
            { name: 'Dynamic Fast-Scroll & Search', desc: 'Fast-scroll right sidebar with elastic letter magnification, unified search bar, and instant one-tap TOTP copying.' }
          ]
        }
      }
    ]
  },
  {
    category: 'Browser Extensions',
    icon: <Puzzle className="text-electric" size={20} />,
    items: [
      {
        name: 'Feed Free',
        badge: 'Browser Extension',
        icon: feedFreeIcon,
        desc: 'Take control of YouTube & Instagram. Block algorithmic recommendations, Shorts, Reels, suggested content, and comments.',
        tech: ['React 19', 'TypeScript 5', 'Zustand 5', 'Tailwind v4', 'Vite 6 / CRXJS'],
        github: 'https://github.com/anishcreations/feed-free-ext',
        chrome: 'https://chromewebstore.google.com/detail/feed-free-unbiased-feed-f/fmmfdjmmjmkedafmhhdmoafbioakeefp',
        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/feed-free-uf/',
        details: {
          tagline: 'Unbiased social media feed blocker for YouTube & Instagram (Chrome MV3 & Firefox MV3).',
          features: [
            { name: 'YouTube Feed Control', desc: 'Removes home video grid, Shorts shelves (homepage, sidebar, & search results), recommended video sidebars, and comments.' },
            { name: 'Instagram Distraction Blocking', desc: 'Auto-redirects to Following timeline instead of algorithmic feed, hides Reels, Explore, Stories, and comments/likes count.' },
            { name: 'Dynamic Audio Only Mode', desc: 'Black out video player (keep audio playing) with draggable floating toggle button and keyboard shortcut (\'A\').' },
            { name: 'Document Start Anti-Flicker', desc: 'Synchronous document_start anti-flicker style injection prevents layout flickering before page renders.' },
            { name: 'DOMPatron Observer', desc: 'URL polling and MutationObserver instantly detect Single-Page Application (SPA) navigations without requiring page reloads.' }
          ]
        }
      },
      {
        name: 'Opacify',
        badge: 'Browser Extension',
        desc: 'Dim bright screens, tutorials, PDFs, and videos with a per-tab opacity overlay, brightness boost, or smart color invert filter.',
        tech: ['JavaScript', 'CSS3', 'WebExtensions API'],
        github: 'https://github.com/anishcreations/opacify',
        details: {
          tagline: 'Dim bright screens, tutorials, PDFs, and videos with a per-tab opacity overlay or smart invert filter.',
          features: [
            { name: 'Per-Tab Dimmer Mode', desc: 'Translucent overlay dimmer (0–100% opacity) with selective Smart Whites mode (mix-blend-mode: multiply) to dim bright backgrounds while keeping dark text crisp.' },
            { name: 'Brightness Boost Mode', desc: 'Lifts screen luminance up to +100% (2.0x brighter) with selective Smart Blacks mode (mix-blend-mode: lighten) to brighten dark shadow areas.' },
            { name: 'Smart Invert Filter', desc: 'Inverts page colors with a 180° hue rotation to preserve natural image and video tones.' },
            { name: 'Scope Control', desc: 'Full Page vs Player Only (targets YouTube video player container, leaving page UI unaffected for watching tutorials).' },
            { name: 'Per-Origin Memory & File Support', desc: 'Remembers settings per site and supports local file:// pages and PDFs (Chrome/Brave/Edge).' }
          ]
        }
      }
    ]
  },
  {
    category: 'macOS Native Apps',
    icon: <Monitor className="text-electric" size={20} />,
    items: [
      {
        name: 'YT Audio Air',
        badge: 'macOS Menu Bar',
        desc: 'Native macOS menu bar app for resource-efficient background YouTube audio streaming with minimal RAM footprint.',
        tech: ['Swift 5', 'AppKit', 'WKWebView'],
        github: 'https://github.com/anishcreations/yt-audio-air',
        download: 'https://github.com/anishcreations/yt-audio-air/releases',
        details: {
          tagline: 'Native macOS menu bar app for background YouTube audio streaming (Swift + system WKWebView).',
          features: [
            { name: 'Persistent Background Playback', desc: 'Runs in status bar via NSPanel; closing window parks it offscreen (-20000, -20000) so audio never stops.' },
            { name: 'Instant Ad Skipping', desc: 'Detects ads via .ad-showing class → mutes → 16x speed → seeks to end → clicks skip in <250ms.' },
            { name: 'Resource Layout Deflation', desc: 'Deflates video element to 1x1px, forces 144p quality, and bypasses heavy browser GPU rendering.' },
            { name: 'Visibility API Spoofing', desc: 'Overrides document.hidden = false so YouTube treats the background player as active.' },
            { name: 'Homebrew Tap', desc: 'Installable via Homebrew (brew install anisharyal09/tap/yaa) with automatic Gatekeeper quarantine bypass.' }
          ]
        }
      },
      {
        name: 'YT Video Air',
        badge: 'macOS Utility',
        desc: 'Native macOS menu bar app wrapping YouTube Mobile into a lightweight, distraction-free popover video player.',
        tech: ['Swift 5.9', 'SwiftUI', 'WKWebView'],
        github: 'https://github.com/anishcreations/yt-video-air',
        download: 'https://github.com/anishcreations/yt-video-air/releases',
        details: {
          tagline: 'Native macOS menu bar app wrapping YouTube Mobile into a lightweight popover player.',
          features: [
            { name: 'Feed Free Mode Toggles', desc: 'Granular toggles to hide home browse feed, Shorts, subscriptions, video recommendations, and comments.' },
            { name: 'Audio-Only & Grayscale Modes', desc: 'Suspend video rendering to save CPU/RAM or apply native WebKit composited grayscale filter.' },
            { name: 'Ad Skip Overlay & Promotion Blocker', desc: 'Fast-forwards ads in <500ms under a black overlay displaying "Skipping ad...", suppressing paid promotion cards.' }
          ]
        }
      }
    ]
  },
  {
    category: 'Machine Learning & OCR',
    icon: <Cpu className="text-electric" size={20} />,
    items: [
      {
        name: 'Lipi-Snap',
        badge: 'OCR Model',
        desc: 'Deep learning OCR system for the Ranjana script combining CharCNN and CRNN+CTC architectures for transcription, transliteration, and translation.',
        tech: ['Python 3', 'PyTorch', 'OpenCV', 'Streamlit'],
        github: 'https://github.com/anisharyal09/Lipi-Snap',
        demo: 'https://huggingface.co/spaces/anisharyal09/Lipi-Snap',
        details: {
          tagline: 'Deep learning OCR pipeline designed to recognize and decode full words in Ranjana script.',
          features: [
            { name: 'Phase 2: CRNN + CTC Model', desc: 'Sequence network with 3x3 conv backbone (2.02M parameters), Bidirectional LSTM, and CTC greedy decoding for word-level recognition. 98.14% word test accuracy on 6,468 unseen synthetic words.' },
            { name: 'Phase 1: CharCNN Model', desc: 'Character-level recognition CNN (Bati & Dawadi architecture) for 62 Ranjana character classes. 99.70% test accuracy.' },
            { name: 'Multi-Stage Pipeline', desc: 'Ranjana transcription, Devanagari conversion, Roman IAST transliteration with indica numerals (०१२ → 012), and English translation.' },
            { name: 'Neo-Minimal Streamlit UI', desc: 'Responsive dark interface with OpenCV visual preprocessing preview, CTC greedy decoding path visualization, and character confidence breakdown.' }
          ]
        }
      }
    ]
  }
];

export default function Creations() {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

  return (
    <div className="pt-32 sm:pt-36 pb-20 min-h-screen relative scroll-mt-28">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <div className="mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
            Build Library
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            Native applications, browser extensions, and experimental software tools — built to stay useful, focused, and fast.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {creationCategories.map((cat) => (
            <div key={cat.category} className="creation-category">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {cat.category}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {item.icon && (
                            <img src={item.icon} className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" alt={item.name} width="40" height="40" loading="lazy" decoding="async" />
                          )}
                          <div>
                            <span className="font-mono text-xs text-electric uppercase tracking-wider block mb-0.5">
                              {item.badge}
                            </span>
                            <h3 className="text-lg font-bold text-white mb-1">
                              {item.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                              title="GitHub Repository"
                            >
                              <Github size={16} />
                            </a>
                          )}
                          {item.download && (
                            <a
                              href={item.download}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                              title="Releases / Downloads"
                            >
                              <Download size={16} />
                            </a>
                          )}
                          {item.chrome && (
                            <a
                              href={item.chrome}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                              title="Chrome Web Store"
                            >
                              <ChromeLogo />
                            </a>
                          )}
                          {item.firefox && (
                            <a
                              href={item.firefox}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                              title="Firefox Add-on"
                            >
                              <FirefoxLogo />
                            </a>
                          )}
                          {item.demo && (
                            <a
                              href={item.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-400 font-light text-xs leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tech.map((t) => (
                          <span key={t} className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-white/5 text-gray-300 border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <button
                          onClick={() => setSelectedItem(item)}
                          className="flex items-center gap-2 text-xs font-mono text-electric hover:text-white border border-electric/30 hover:border-electric px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer"
                        >
                          Details & Features
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <CreationModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function CreationModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-panel rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col z-10 scrollbar-thin"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-3">
          {item.icon && (
            <img src={item.icon} className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" alt={item.name} width="40" height="40" decoding="async" />
          )}
          <div>
            <span className="font-mono text-xs text-electric uppercase tracking-wider block mb-0.5">
              {item.badge}
            </span>
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
          </div>
        </div>

        <p className="text-gray-300 text-sm font-light leading-relaxed mb-5">
          {item.details?.tagline || item.desc}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {item.download && (
            <a
              href={item.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Download size={14} /> Releases / Downloads
            </a>
          )}
          {item.chrome && (
            <a
              href={item.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <ChromeLogo /> Chrome Web Store
            </a>
          )}
          {item.firefox && (
            <a
              href={item.firefox}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <FirefoxLogo /> Firefox Add-on
            </a>
          )}
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Github size={14} /> Repository
            </a>
          )}
          {item.demo && (
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <ExternalLink size={14} /> Hugging Face Space
            </a>
          )}
        </div>

        {item.details?.features && (
          <div className="space-y-3 pt-4 border-t border-white/10">
            <h5 className="font-mono text-xs text-electric uppercase tracking-wider mb-2">
              Key Technical Features & Architecture
            </h5>
            <div className="space-y-3">
              {item.details.features.map((f) => (
                <div key={f.name} className="text-xs text-gray-300 font-light leading-relaxed">
                  <strong className="text-white font-medium block mb-0.5">{f.name}</strong>
                  <span className="text-gray-400">{f.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

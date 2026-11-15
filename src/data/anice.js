export const ANICE = {
  name: 'aniCe',
  tagline: 'Seamless continuity between Android and Mac.',
  description: 'A native, local-first Mac + Android companion for Edge Drop file sharing, clipboard sync, device control, notifications, SMS and playback — over encrypted Bluetooth and LAN.',
  metadataDescription: 'aniCe connects Android and Mac for files, clipboard, device control, notifications and SMS over encrypted Bluetooth and LAN. Free, native and open source.',
  website: 'https://anisharyal09.github.io/web-anice/',
  repository: 'https://github.com/anisharyal09/aniCe',
  releases: 'https://github.com/anisharyal09/aniCe/releases',
  installGuide: 'https://anisharyal09.github.io/web-anice/guides/first-installation-permissions.html',
  preview: 'https://anisharyal09.github.io/web-anice/simulator/',
  page: '/anice',
  support: '/support?from=anice',
  status: 'Public beta',
  version: '0.9.0-beta.3',
  releaseNote: 'Beta builds are available for Mac and Android. aniCe is still being tested ahead of a general release.',
  tech: ['Swift 6 / SwiftUI', 'Kotlin / Compose', 'Rust', 'Objective-C', 'BLE + LAN'],
  requirements: {
    mac: 'Apple silicon · macOS 14 Sonoma or newer',
    android: 'Android 10+; Android 12+ for background continuity features',
  },
};

export const ANICE_FEATURE_GROUPS = [
  {
    title: 'Share',
    features: [
      { icon: 'files', name: 'File sharing & Edge Drop', desc: 'Send files both ways over LAN or Bluetooth. Drag Finder files to the screen edge or use Android’s Share → Send to Mac. Interrupted transfers can resume verified progress for up to 15 minutes.' },
      { icon: 'clipboard', name: 'Clipboard & Quick Paste Tray', desc: 'Share text and links, open shared web links on Mac, and search optional local clipboard history with ⌥⌘V. Android automatic sharing requires input focus; images and rich text are unsupported.' },
      { icon: 'monitor', name: 'Menu bar companion', desc: 'Check phone battery and connection state, control playback, track transfers, and quickly send files or clipboard text without opening the main Mac window.' },
    ],
  },
  {
    title: 'Control',
    features: [
      { icon: 'smartphone', name: 'Control Mac from Android', desc: 'Use your phone as a keyboard and trackpad to type, click, drag and scroll over an authenticated Bluetooth session. Mac input permission is required.' },
      { icon: 'keyboard', name: 'Control Android from Mac', desc: 'Use the Mac keyboard and pointer through system Bluetooth HID, including Home, Back and Recents. ⌥⌘K toggles Floating Key; native Bluetooth pairing and an explicit device link are required.' },
      { icon: 'gauge', name: 'Mac Desk Deck', desc: 'See Mac CPU, memory, thermal and power status on your phone. Lock the Mac, adjust volume and audio output, or launch approved apps. Screenshot controls keep captures on Mac; permissions and hardware determine available controls.' },
    ],
  },
  {
    title: 'Everyday continuity',
    features: [
      { icon: 'bell', name: 'Notifications & incoming calls', desc: 'Mirror selected Android notifications to native Mac alerts, with supported inline replies, app actions and cross-device dismissal. Answer or decline supported incoming-call alerts; call audio stays on the phone.' },
      { icon: 'messages', name: 'SMS on Mac', desc: 'Browse and search Android SMS conversations, receive alerts and reply from your Mac, with SIM selection where available. RCS and MMS sending are unsupported.' },
      { icon: 'music', name: 'Now Playing', desc: 'Control supported Mac players from Android with track details, artwork, play/pause, skip, seek and volume controls. Artwork uses LAN; audio keeps playing on Mac.' },
      { icon: 'moon', name: 'DND sync', desc: 'Relay Android Do Not Disturb changes to configured Mac Shortcuts.' },
      { icon: 'smartphone', name: 'Find Device', desc: 'Ring a connected phone or alert a connected Mac over an existing trusted connection. No location access or cloud tracking.' },
    ],
  },
];

export const ANICE_DETAILS = {
  tagline: ANICE.tagline,
  features: [
    ...ANICE_FEATURE_GROUPS.flatMap((group) => group.features),
    { name: 'Native, local-first & encrypted', desc: 'Swift 6 / SwiftUI on Mac and Kotlin / Jetpack Compose on Android, with a Rust OPAQUE pairing bridge and Objective-C Bluetooth HID adapter. Authenticated, encrypted BLE and direct LAN connections need no account or cloud relay. No analytics or telemetry; update checks contact GitHub Releases directly.' },
    { name: 'Platforms & beta builds', desc: `${ANICE.requirements.mac}. ${ANICE.requirements.android}. ${ANICE.releaseNote}` },
  ],
};

export const ANICE_SCHEMA_FEATURES = [
  ...ANICE_FEATURE_GROUPS.flatMap((group) => group.features.map((feature) => feature.name)),
  'QR pairing with P-256 ECDH, a 256-bit PSK and SHA-256 fingerprint commitment',
  'Six-digit OPAQUE PIN pairing with Argon2id',
  'RFC 9528 EDHOC session handshake',
  'ChaCha20-Poly1305 handshake protection and AES-256-GCM application records',
  'Swift 6 / SwiftUI macOS app and Kotlin / Jetpack Compose Android app',
  'Rust OPAQUE PAKE bridge for six-digit PIN pairing',
  'Objective-C adapter for Mac Classic Bluetooth HID control',
];

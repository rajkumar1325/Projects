import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Music, BatteryCharging, Mic, Radio, Sliders } from 'lucide-react';

export default function Specs() {
  const [activeTab, setActiveTab] = useState(0);

  const specCategories = [
    {
      id: 'acoustic',
      label: 'Acoustics',
      icon: Music,
      specs: [
        { name: 'Driver Unit', value: '40mm dome type (CCAW Voice Coil)' },
        { name: 'Diaphragm', value: 'Liquid Crystal Polymer (LCP) with carbon coating' },
        { name: 'Frequency Range', value: '4 Hz - 45,000 Hz (Hi-Res Audio)' },
        { name: 'Impedance', value: '48 ohm (when connected via headphone cable)' },
        { name: 'Sensitivity', value: '102 dB / mW' }
      ]
    },
    {
      id: 'anc',
      label: 'Processor',
      icon: Cpu,
      specs: [
        { name: 'Processor Chipset', value: 'Dual-Engine: Sony V3 + QN2 HD chips' },
        { name: 'Noise Sensing', value: 'Real-time environment feedback (12,000 times/sec)' },
        { name: 'Ambient Sound', value: '20-level fine adjustments with automatic wind-reduction' },
        { name: 'Isolation Level', value: '99.8% active acoustic isolation' },
        { name: 'Atmospheric Pressure', value: 'Barometric pressure optimizer for high-altitude use' }
      ]
    },
    {
      id: 'power',
      label: 'Power',
      icon: BatteryCharging,
      specs: [
        { name: 'Battery Life (ANC On)', value: 'Up to 38 hours playback' },
        { name: 'Battery Life (ANC Off)', value: 'Up to 48 hours playback' },
        { name: 'Fast Charge Speed', value: '3 minutes charge = up to 5 hours playback' },
        { name: 'Charge Connector', value: 'USB Type-C (PD Fast-Charge support)' },
        { name: 'Full Charge Time', value: 'Approx. 2.5 hours' }
      ]
    },
    {
      id: 'mics',
      label: 'Microphones',
      icon: Mic,
      specs: [
        { name: 'Total Array', value: '10-microphone beamforming structure' },
        { name: 'ANC Sensors', value: '8 external ambient noise microphones' },
        { name: 'Voice Capture', value: '2 dedicated voice feedback microphones' },
        { name: 'Wind Protection', value: 'Internal mesh structure to minimize wind turbulences' },
        { name: 'Voice Pickup', value: 'AI-assisted deep learning algorithm filters background noise' }
      ]
    },
    {
      id: 'wireless',
      label: 'Connectivity',
      icon: Radio,
      specs: [
        { name: 'Bluetooth Version', value: 'Bluetooth® 5.4 (LE Audio ready)' },
        { name: 'Audio Codecs', value: 'SBC, AAC, LDAC (High-Resolution Wireless)' },
        { name: 'Multipoint Connection', value: 'Dual-device simultaneous pairing and auto-switch' },
        { name: 'Supported Profiles', value: 'A2DP, AVRCP, HFP, HSP' },
        { name: 'Fast Pairing', value: 'Google Fast Pair & Microsoft Swift Pair' }
      ]
    }
  ];

  const highlights = [
    { icon: Music, title: 'Studio Drivers', desc: 'Liquid Crystal Polymer carbon-coated dome reproduces ultra-high frequencies up to 45kHz.' },
    { icon: Cpu, title: 'Dual V3 & QN2', desc: 'Unprecedented processing speeds block mid-to-high frequency human voices with ease.' },
    { icon: BatteryCharging, title: 'USB-PD Charging', desc: 'Supports power delivery for rapid charge. Back online before your boarding gate opens.' },
    { icon: Mic, title: 'Beamforming Mics', desc: 'Precision voice pickup technology ensures your voice is isolated even in busy subway stations.' },
  ];

  return (
    <section 
      id="specs-section"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '120px 6vw',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span 
            style={{
              color: 'var(--accent-cyan)',
              fontSize: '0.9rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              display: 'block',
              marginBottom: '15px'
            }}
          >
            Engineering Reference
          </span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', marginBottom: '20px' }} className="gradient-text">
            Technical Specifications.
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Built for audiophiles, calibrated for absolute quiet. Explore the technology inside the WH-1000XM6.
          </p>
        </div>

        {/* Highlights Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            marginBottom: '90px'
          }}
        >
          {highlights.map((hl, idx) => {
            const Icon = hl.icon;
            return (
              <div 
                key={idx} 
                className="glass-card"
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start'
                }}
              >
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 80, 255, 0.1)',
                    borderRadius: '12px',
                    padding: '12px',
                    marginBottom: '20px',
                    border: '1px solid rgba(0, 80, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '10px' }}>
                  {hl.title}
                </h3>
                <p style={{ fontSize: '0.95rem', margin: 0, color: 'var(--text-secondary)' }}>
                  {hl.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tabbed Specs Dashboard */}
        <div 
          className="glass-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          {/* Tabs header */}
          <div 
            style={{
              display: 'flex',
              overflowX: 'auto',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(5, 5, 5, 0.4)',
              scrollbarWidth: 'none'
            }}
          >
            {specCategories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '20px 25px',
                    background: 'none',
                    border: 'none',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'color 0.3s ease',
                    whiteSpace: 'nowrap',
                    flex: 1,
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={16} style={{ color: isActive ? 'var(--accent-cyan)' : 'inherit' }} />
                  {cat.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
                        boxShadow: '0 0 10px var(--accent-cyan)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <div style={{ padding: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {specCategories[activeTab].specs.map((spec, sIdx) => (
                <div 
                  key={sIdx}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: '30px',
                    borderBottom: sIdx === specCategories[activeTab].specs.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.03)',
                    paddingBottom: '20px'
                  }}
                >
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '1rem' }}>
                    {spec.name}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.5 }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

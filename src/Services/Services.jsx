// src/Services/Services.jsx  — OMAYA THEME (Beige/Gold — Light Background)
import React, { useState } from "react";
import {
  BedDouble,
  Users,
  Maximize2,
  CheckCircle2,
  ArrowUpRight,
  Star,
  Crown,
  Building2,
  Sparkles,
  CreditCard,
} from "lucide-react";

/* ─── Suite Data ─────────────────────────────────────────────────── */
const SUITES = [
  {
    id: "royal",
    badge: "Most Exclusive",
    Icon: Crown,
    label: "Royal Suite",
    tagline: "Unmatched Privacy. Extraordinary Luxury.",
    description:
      "The Royal Suite is designed for guests who desire an extraordinary stay, blending elegance, privacy, and complete indulgence. Every corner elevates the sense of luxury — the private in-room swimming pool makes it perfect for VIP guests, romantic getaways, and high-profile corporate stays.",
    size: "900 sq. ft.",
    bed: "Luxury King-Size Bed",
    occupancy: "2 Guests",
    accentFrom: "#B58D56",
    accentTo: "#8F613B",
    isDark: true,
    facilities: [
      "Private In-Room Swimming Pool",
      "Separate Dining Area",
      "Private Balcony",
      "Individual Climate-Control AC",
      "LED TV",
      "Tea / Coffee Maker",
      "Safety Locker",
      "Toiletry Kit",
      "Hair Dryer",
      "Dental & Shaving Kit",
      "Cotton Slippers",
      "Weighing Scale",
      "Iron & Iron Board (on request)",
      "Wake-Up Call Service",
    ],
    paid: [
      "In-Room Dining",
      "Laundry & Dry Cleaning",
      "Photocopy / Printouts",
      "Direct Dialing Facility",
    ],
  },
  {
    id: "deluxe",
    badge: "Spa Experience",
    Icon: Star,
    label: "Deluxe Suite",
    tagline: "Refined Comfort. Spa-Inspired Indulgence.",
    description:
      "The Deluxe Suite offers a warm and stylish setting, ideal for leisure travellers and corporate professionals who prefer comfort with elegance. The private in-room Jacuzzi adds a luxurious spa-like touch — perfect for rejuvenation after a long day.",
    size: "800 sq. ft.",
    bed: "Luxury King-Size Bed",
    occupancy: "2 Guests",
    accentFrom: "#C9A45C",
    accentTo: "#8F613B",
    isDark: true,
    facilities: [
      "Private In-Room Jacuzzi",
      "Separate Dining Area",
      "Individual Climate-Control AC",
      "LED TV",
      "Tea / Coffee Maker",
      "Safety Locker",
      "Toiletry Kit",
      "Hair Dryer",
      "Dental & Shaving Kit",
      "Cotton Slippers",
      "Weighing Scale",
      "Wake-Up Call Service",
      "Iron & Iron Board (on request)",
    ],
    paid: [
      "In-Room Dining",
      "Laundry & Dry Cleaning",
      "Photocopy / Printouts",
      "Direct Dialing Facility",
    ],
  },
  {
    id: "executive",
    badge: "Corporate Choice",
    Icon: Building2,
    label: "Executive Suite",
    tagline: "Productivity Meets Premium Comfort.",
    description:
      "The Executive Suite is designed for corporate travellers, business professionals, and long-stay guests, offering the perfect balance of comfort and productivity. A smart layout, dedicated dining space, and private balcony create an environment ideal for focused work and restful evenings.",
    size: "750 sq. ft.",
    bed: "Luxury King-Size Bed",
    occupancy: "2 Guests",
    accentFrom: "#A87952",
    accentTo: "#7A5535",
    isDark: true,
    facilities: [
      "Separate Dining Area",
      "Private Balcony",
      "Individual Climate-Control AC",
      "LED TV",
      "Tea / Coffee Maker",
      "Safety Locker",
      "Toiletry Kit",
      "Hair Dryer",
      "Dental & Shaving Kit",
      "Cotton Slippers",
      "Weighing Scale",
      "Iron & Iron Board (on request)",
      "Wake-Up Call Service",
    ],
    paid: [
      "In-Room Dining",
      "Laundry Services",
      "Photocopy / Printouts",
      "Direct Dialing Facility",
    ],
  },
];

/* ─── Suite Card ─────────────────────────────────────────────────── */
function SuiteCard({ suite }) {
  const {
    Icon, label, badge, tagline, description,
    size, bed, occupancy, accentFrom, accentTo,
    isDark, facilities, paid,
  } = suite;

  // Color tokens
  const leftBg = isDark ? "#111A24" : "#ffffff";
  const rightBg = isDark ? "#1C2A3A" : "#FAFAF7";
  const nameCl = isDark ? "#ffffff" : "#111A24";
  const taglineCl = isDark ? "rgba(255,255,255,0.42)" : "#888";
  const descCl = isDark ? "rgba(255,255,255,0.58)" : "#555";
  const lblCl = isDark ? "rgba(255,255,255,0.38)" : "#aaa";
  const valCl = isDark ? "#ffffff" : "#111A24";
  const pillBg = isDark ? "rgba(255,255,255,0.05)" : "#ffffff";
  const pillBdr = isDark ? "rgba(255,255,255,0.10)" : `${accentFrom}35`;
  const pillTxt = isDark ? "rgba(255,255,255,0.84)" : "#2d2d2d";
  const paidBg = isDark ? "rgba(255,255,255,0.06)" : "#f0ece2";
  const paidBdr = isDark ? "rgba(255,255,255,0.09)" : "#e0d5c0";
  const paidTxt = isDark ? "rgba(255,255,255,0.62)" : "#5a4a35";
  const paidHdCl = isDark ? "rgba(255,255,255,0.38)" : "#a0876a";
  const panelBdr = isDark ? "rgba(255,255,255,0.08)" : "#e8e2d6";
  const cardBdr = isDark ? "rgba(255,255,255,0.09)" : `${accentFrom}28`;

  return (
    <div className="sc-wrap">
      <div className="sc-card" style={{ borderColor: cardBdr }}>

        {/* ── Left panel ── */}
        <div
          className="sc-left"
          style={{
            background: leftBg,
            borderRightColor: isDark ? "rgba(255,255,255,0.06)" : `${accentFrom}20`,
          }}
        >
          {/* Identity */}
          <div className="sc-identity">
            <div
              className="sc-icon"
              style={{ borderColor: `${accentFrom}55`, background: `${accentFrom}18` }}
            >
              <Icon size={24} strokeWidth={1.6} style={{ color: accentFrom }} />
            </div>
            <div>
              <span
                className="sc-badge"
                style={{ color: accentFrom, borderColor: `${accentFrom}48`, background: `${accentFrom}14` }}
              >
                {badge}
              </span>
              <h3 className="sc-name" style={{ color: nameCl }}>{label}</h3>
              <p className="sc-tagline" style={{ color: taglineCl }}>{tagline}</p>
            </div>
          </div>

          {/* Accent divider */}
          <div
            className="sc-divider"
            style={{ background: `linear-gradient(90deg, ${accentFrom}70, transparent)` }}
          />

          {/* Stats */}
          <div className="sc-stats">
            {[
              { Icon: Maximize2, label: "Room Size", value: size },
              { Icon: BedDouble, label: "Bed Type", value: bed },
              { Icon: Users, label: "Occupancy", value: occupancy },
            ].map(({ Icon: StatIcon, label: sl, value }) => (
              <div key={sl} className="sc-stat">
                <StatIcon size={13} strokeWidth={1.8} style={{ color: accentFrom }} />
                <div>
                  <div className="sc-stat-lbl" style={{ color: lblCl }}>{sl}</div>
                  <div className="sc-stat-val" style={{ color: valCl }}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="sc-divider"
            style={{ background: `linear-gradient(90deg, ${accentFrom}70, transparent)` }}
          />

          {/* Description */}
          <p className="sc-desc" style={{ color: descCl }}>{description}</p>

          {/* CTA */}
          <a
            href="#contact"
            className="sc-cta"
            style={{ background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})` }}
          >
            Book This Suite <ArrowUpRight size={14} />
          </a>
        </div>

        {/* ── Right panel ── */}
        <div className="sc-right" style={{ background: rightBg }}>

          {/* Facilities */}
          <div className="sc-panel-block">
            <div className="sc-panel-hd">
              <Sparkles size={13} strokeWidth={2} style={{ color: accentFrom }} />
              <span style={{ color: accentFrom }}>Room Facilities</span>
            </div>
            <div className="sc-pills-grid">
              {facilities.map((f) => (
                <div
                  key={f}
                  className="sc-pill"
                  style={{ background: pillBg, borderColor: pillBdr }}
                >
                  <CheckCircle2 size={12} strokeWidth={2.2} style={{ color: accentFrom, flexShrink: 0 }} />
                  <span style={{ color: pillTxt }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paid Services */}
          <div className="sc-panel-block sc-panel-block--paid" style={{ borderTopColor: panelBdr }}>
            <div className="sc-panel-hd">
              <CreditCard size={13} strokeWidth={2} style={{ color: paidHdCl }} />
              <span style={{ color: paidHdCl }}>Paid Services</span>
            </div>
            <div className="sc-paid-row">
              {paid.map((p) => (
                <div
                  key={p}
                  className="sc-paid-item"
                  style={{ background: paidBg, borderColor: paidBdr, color: paidTxt }}
                >
                  <span className="sc-paid-dot" style={{ background: accentFrom }} />
                  {p}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */
export default function Services() {
  const [activeId, setActiveId] = useState("royal");

  return (
    <section id="services" className="svc-root">

      <div className="svc-inner">

        {/* ── Heading ── */}
        <div className="svc-top">
          <div className="svc-eyebrow">
            <span className="svc-ey-line" />
            <span className="svc-ey-text">Suites &amp; Amenities</span>
            <span className="svc-ey-line" />
          </div>

          <h2 className="svc-h2">Three Distinct Suites</h2>
          <h2 className="svc-h2 svc-h2--gold">One Standard of Excellence</h2>

          <p className="svc-subtitle">
            Each suite at Omaya is thoughtfully crafted for a unique guest experience —
            from the grandeur of the Royal Suite to the productivity-first Executive Suite.
          </p>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="svc-tabs" role="tablist">
          {SUITES.map((s) => {
            const active = s.id === activeId;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(s.id)}
                className={`svc-tab ${active ? "svc-tab--on" : ""}`}
                style={
                  active
                    ? {
                      background: `linear-gradient(135deg, ${s.accentFrom}, ${s.accentTo})`,
                      borderColor: s.accentFrom,
                      color: "#fff",
                      boxShadow: `0 4px 18px ${s.accentFrom}55`,
                    }
                    : {}
                }
              >
                <s.Icon size={15} strokeWidth={1.8} />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* ── Suite Card ── */}
        {SUITES.map((s) =>
          s.id === activeId ? <SuiteCard key={s.id} suite={s} /> : null
        )}

        {/* ── Suite Mix Strip ── */}
        <div className="svc-mix">
          <span className="svc-mix-lbl">Total 23 Keys</span>
          <div className="svc-mix-pills">
            <span className="svc-mp svc-mp--r">👑 Royal — 4 Suites</span>
            <span className="svc-mp svc-mp--d">⭐ Deluxe — 3 Suites</span>
            <span className="svc-mp svc-mp--e">🏢 Executive — 16 Suites</span>
          </div>
        </div>

      </div>

      {/* ── Styles ── */}
      <style>{`

        /* ─── Root — LIGHT background ─── */
       
.svc-root {
  background: #F4F1E9;
  padding: 120px 0 96px;
}

        .svc-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ─── Heading ─── */
        .svc-top { text-align: center; margin-bottom: 48px; }

        .svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .svc-ey-line {
          display: block;
          width: 44px; height: 1px;
          background: #A87952;
        }
        .svc-ey-text {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #A87952;
        }
        .svc-h2 {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.022em;
          color: #111A24;
          margin: 0;
        }
        .svc-h2--gold {
          background: linear-gradient(135deg, #C9A45C, #8F613B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-top: 4px;
        }
        .svc-subtitle {
          max-width: 580px;
          margin: 18px auto 0;
          font-size: 15px;
          line-height: 1.8;
          color: #6a6055;
        }

        /* ─── Tabs ─── */
        .svc-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .svc-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 50px;
          border: 1.5px solid #d4c4a8;
          background: #fff;
          color: #7a6a55;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: all 0.28s ease;
        }
        .svc-tab:hover:not(.svc-tab--on) {
          border-color: #A87952;
          color: #A87952;
          background: #fdf8f2;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(168,121,82,0.14);
        }
        .svc-tab--on {
          transform: translateY(-2px);
        }

        /* ─── Card ─── */
        .sc-wrap {
          animation: scFadeUp 0.38s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes scFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sc-card {
          display: grid;
          grid-template-columns: 340px 1fr;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid;
          box-shadow: 0 8px 48px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05);
        }
        @media (max-width: 860px) {
          .sc-card { grid-template-columns: 1fr; }
        }

        /* ─── Left Panel ─── */
        .sc-left {
          padding: 34px 30px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid;
        }
        @media (max-width: 860px) {
          .sc-left { border-right: none; border-bottom: 1px solid #e8e2d6; }
        }

        .sc-identity {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 22px;
        }
        .sc-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          border: 1.5px solid;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }
        .sc-badge {
          display: inline-block;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 3px 11px;
          border-radius: 50px;
          border: 1px solid;
          margin-bottom: 7px;
        }
        .sc-name {
          font-size: clamp(20px, 2.6vw, 25px);
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0 0 4px;
          line-height: 1.2;
        }
        .sc-tagline {
          font-size: 13px;
          margin: 0;
          font-style: italic;
        }

        .sc-divider {
          height: 1px;
          border-radius: 1px;
          margin: 18px 0;
        }

        .sc-stats {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }
        .sc-stat {
          display: flex;
          align-items: center;
          gap: 11px;
        }
        .sc-stat-lbl {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 2px;
        }
        .sc-stat-val {
          font-size: 13px;
          font-weight: 700;
        }

        .sc-desc {
          font-size: 13.5px;
          line-height: 1.85;
          margin: 0;
        }

        .sc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          padding: 11px 24px;
          border-radius: 11px;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          text-decoration: none;
          align-self: flex-start;
          box-shadow: 0 5px 20px rgba(0,0,0,0.22);
          transition: opacity 0.2s, transform 0.2s;
        }
        .sc-cta:hover {
          opacity: 0.88;
          transform: translateY(-2px);
        }

        /* ─── Right Panel ─── */
        .sc-right {
          padding: 34px 30px;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 860px) {
          .sc-right { padding: 28px 24px; }
          .sc-left  { padding: 28px 24px; }
        }

        .sc-panel-block { flex: 1; }
        .sc-panel-block--paid {
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid;
        }

        .sc-panel-hd {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        /* Facility Pills */
        .sc-pills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        @media (max-width: 540px) {
          .sc-pills-grid { grid-template-columns: 1fr; }
        }
        .sc-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 9px;
          border: 1px solid;
          font-size: 12.5px;
          font-weight: 500;
          transition: opacity 0.15s;
        }
        .sc-pill:hover { opacity: 0.8; }

        /* Paid */
        .sc-paid-row {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }
        .sc-paid-item {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          border-radius: 50px;
          border: 1px solid;
          font-size: 12.5px;
          font-weight: 600;
        }
        .sc-paid-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ─── Suite Mix Strip ─── */
        .svc-mix {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 24px;
          padding: 15px 26px;
          border-radius: 14px;
          background: #111A24;
        }
        .svc-mix-lbl {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
        }
        .svc-mix-pills { display: flex; gap: 9px; flex-wrap: wrap; }
        .svc-mp {
          padding: 5px 14px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 700;
        }
        .svc-mp--r { background: rgba(201,164,92,0.14); color: #C9A45C; border: 1px solid rgba(201,164,92,0.28); }
        .svc-mp--d { background: rgba(185,142,86,0.14); color: #C9A45C; border: 1px solid rgba(185,142,86,0.28); }
        .svc-mp--e { background: rgba(168,121,82,0.14); color: #C9A45C; border: 1px solid rgba(168,121,82,0.28); }

      `}</style>
    </section>
  );
}
import {
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    Wifi,
    Sparkles,
    ShieldCheck,
    Car,
    Check,
} from "lucide-react";

import omaya1 from "../Images/omaya 1.mp4";
import omaya2 from "../Images/omaya 2.mp4";
import omaya3 from "../Images/omaya 3.mp4";

/**
 * Ultra Premium Zig‑Zag (Light)
 * - Video left/right alternating (zig‑zag)
 * - Center bold hero heading
 * - Content hierarchy improved (eyebrow + title + short desc + bullets)
 * - Even cards slight offset for premium rhythm
 * - Stronger CTA row + consistent spacing
 */

const INCLUDED = [
    { icon: Wifi, label: "High‑speed Wi‑Fi" },
    { icon: Sparkles, label: "Housekeeping" },
    { icon: ShieldCheck, label: "Secure access" },
    { icon: Car, label: "Parking support" },
];

function Pill({ children, variant = "accent" }) {
    const styles = {
        accent:
            "border-[#E07B39]/25 bg-[#E07B39]/10 text-[#6B2C10] shadow-[0_18px_55px_-44px_rgba(43,27,20,0.35)]",
        soft: "border-[#2B1B14]/10 bg-white/70 text-[#3A241C]",
        subtle: "border-[#2B1B14]/10 bg-white/55 text-[#6B5A4E]",
    };
    return (
        <span
            className={[
                "inline-flex items-center rounded-full border px-3 py-1",
                "text-[10px] font-semibold uppercase tracking-[0.28em] backdrop-blur-md",
                styles[variant],
            ].join(" ")}
        >
            {children}
        </span>
    );
}

function PrimaryButton({ href, children, size = "md" }) {
    const sizes = {
        md: "px-8 py-4 text-[10px]",
        sm: "px-5 py-3 text-[9px]",
    };
    return (
        <a
            href={href}
            className={`group inline-flex items-center justify-center gap-2 rounded-2xl
                 bg-gradient-to-r from-[#C65A1E] to-[#E07B39]
                 font-semibold uppercase tracking-[0.25em]
                 text-[#FFF7EE]
                 shadow-[0_18px_55px_-42px_rgba(43,27,20,0.55)]
                 transition hover:brightness-105
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/45
                 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6] ${sizes[size]}`}
        >
            {children}
            <ArrowRight
                size={size === "sm" ? 14 : 16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
        </a>
    );
}

function SecondaryButton({ href, children, size = "md" }) {
    const sizes = {
        md: "px-8 py-4 text-[10px]",
        sm: "px-5 py-3 text-[9px]",
    };
    return (
        <a
            href={href}
            className={`inline-flex items-center justify-center gap-2 rounded-2xl
                 border border-[#2B1B14]/12 bg-white/75
                 font-semibold uppercase tracking-[0.25em]
                 text-[#3A241C]
                 transition hover:bg-white
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07B39]/35
                 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6EFE6] ${sizes[size]}`}
        >
            {children}
        </a>
    );
}

function InclusionChip({ icon: Icon, label }) {
    return (
        <div className="flex items-center gap-2 rounded-2xl border border-[#2B1B14]/10 bg-white/70 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#E07B39]/18 bg-white">
                <Icon size={16} className="text-[#C65A1E]" />
            </span>
            <span className="text-xs font-medium text-[#3A241C]">{label}</span>
        </div>
    );
}

function VideoFrame({ src, label }) {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-[#2B1B14]/10 bg-white shadow-[0_30px_95px_-78px_rgba(43,27,20,0.55)]">
            <div className="relative aspect-video w-full">
                <video
                    className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />

                {/* stronger bottom overlay (watermark soften) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B14]/55 via-[#2B1B14]/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(650px_360px_at_25%_15%,rgba(224,123,57,0.18),transparent_62%)]" />

                <div className="absolute left-5 top-5">
                    <Pill variant="accent">{label}</Pill>
                </div>
            </div>
        </div>
    );
}

function Bullet({ children }) {
    return (
        <li className="flex items-start gap-2 text-sm text-[#6B5A4E]">
            <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full border border-[#E07B39]/18 bg-white/70">
                <Check size={14} className="text-[#C65A1E]" />
            </span>
            <span className="leading-7">{children}</span>
        </li>
    );
}

function ListingCard({ item, index }) {
    const reverse = index % 2 === 1;

    return (
        <article
            className={[
                "group relative",
                // ✅ rhythm / zig-zag premium offset on desktop
                index % 2 === 1 ? "lg:translate-x-10" : "",
            ].join(" ")}
        >
            {/* premium stroke */}
            <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#E07B39]/22 via-white/55 to-transparent opacity-90" />
            <div className="relative rounded-[28px] bg-gradient-to-b from-white/75 to-white/45 p-px">
                <div className="rounded-[28px] border border-[#2B1B14]/10 bg-white/68 p-7 shadow-[0_34px_110px_-92px_rgba(43,27,20,0.55)] backdrop-blur-md sm:p-9">
                    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                        {/* video */}
                        <div className={["lg:col-span-7", reverse ? "lg:order-2" : "lg:order-1"].join(" ")}>
                            <VideoFrame src={item.video} label={item.label} />
                        </div>

                        {/* content */}
                        <div className={["lg:col-span-5", reverse ? "lg:order-1" : "lg:order-2"].join(" ")}>
                            <div className="flex items-start justify-between gap-4">
                                <div className="text-[11px] font-semibold tracking-[0.32em] text-[#C65A1E]">
                                    {(index + 1).toString().padStart(2, "0")}
                                </div>
                                <Pill variant="soft">{item.type}</Pill>
                            </div>

                            <p className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#7A6558]">
                                <MapPin size={14} className="text-[#C65A1E]" />
                                {item.location}
                            </p>

                            {/* stronger title */}
                            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-[#2B1B14] sm:text-4xl">
                                {item.title}
                            </h2>

                            {/* shorter description */}
                            <p className="mt-3 text-sm leading-7 text-[#6B5A4E]">
                                {item.description}
                            </p>

                            {/* premium bullets (instead of tiny chips) */}
                            <ul className="mt-5 space-y-2">
                                {item.bullets.map((b) => (
                                    <Bullet key={b}>{b}</Bullet>
                                ))}
                            </ul>

                            {/* CTA row */}
                            <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-[#2B1B14]/10 bg-white/40 p-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#7A6558]">
                                        Pricing
                                    </p>
                                    <p className="mt-0.5 text-sm font-semibold text-[#2B1B14]">
                                        Price on request
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2 sm:flex-row">
                                    <PrimaryButton href="#contact" size="sm">{item.cta}</PrimaryButton>
                                    <SecondaryButton href="tel:+910000000000" size="sm">
                                        <Phone size={14} className="text-[#C65A1E]" />
                                        Call
                                    </SecondaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function RentSale() {
    const items = [
        {
            video: omaya1,
            type: "For Rent",
            label: "Rent • Short / Long Stay",
            title: "The Omaya Residence",
            location: "Premium Suite Living",
            description:
                "A furnished suite for business travel and out‑of‑town stays—quiet, private, and easy to settle into.",
            bullets: ["Fully furnished suite", "Work‑ready comfort", "Daily housekeeping"],
            cta: "Enquire (Rent)",
        },
        {
            video: omaya2,
            type: "For Purchase",
            label: "Purchase • Ownership",
            title: "Omaya Private Residence",
            location: "Ownership Enquiries",
            description:
                "Explore ownership opportunities with refined interiors, secure access, and a premium finish—kept calm and timeless.",
            bullets: ["Refined interiors", "Secure access", "Premium positioning"],
            cta: "Request Details",
        },
        {
            video: omaya3,
            type: "Rent / Purchase",
            label: "Flexible • Rent or Buy",
            title: "Omaya Signature Suite",
            location: "Luxury Suite Experience",
            description:
                "A polished suite experience—rent for a comfortable stay, or enquire about purchase availability based on inventory.",
            bullets: ["Elegant finish", "Responsive support", "Smooth arrivals"],
            cta: "Enquire",
        },
    ];

    return (
        <main className="relative isolate min-h-screen bg-gradient-to-b from-[#FFF7EE] via-[#F6EFE6] to-[#F1E3D2] text-[#2B1B14]">
            {/* background */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_50%_0%,rgba(224,123,57,0.16),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-multiply [background-image:radial-gradient(#2B1B14_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* HERO (center + bold) */}
            <section className="relative px-6 pb-10 pt-20 sm:px-10 lg:px-16 lg:pb-14 lg:pt-24">
                <div className="mx-auto max-w-7xl text-center">
                    <Pill variant="subtle">Rent & Purchase</Pill>

                    <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                        Premium suites with{" "}
                        <span className="bg-gradient-to-r from-[#C65A1E] to-[#E07B39] bg-clip-text text-transparent">
                            flexible options
                        </span>
                        .
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6B5A4E] sm:text-base">
                        Rent for short or long stays. For long‑term plans, enquire about purchase
                        options—subject to availability.
                    </p>

                    <div className="mx-auto mt-8 h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-[#E07B39]/35 to-transparent" />
                </div>
            </section>

            {/* LISTINGS (zig‑zag) */}
            <section className="px-6 pb-12 sm:px-10 lg:px-16 lg:pb-16">
                <div className="mx-auto max-w-7xl space-y-10">
                    {items.map((item, i) => (
                        <ListingCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </section>

            {/* INCLUDED */}
            <section className="px-6 pb-16 sm:px-10 lg:px-16 lg:pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <Pill variant="subtle">Included</Pill>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Essentials included with every suite.
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-[#6B5A4E] sm:text-base">
                            Clean, reliable, and consistent—built for comfortable living.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {INCLUDED.map((x) => (
                            <InclusionChip key={x.label} icon={x.icon} label={x.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden rounded-3xl border border-[#2B1B14]/10 bg-white/70 p-8 text-center shadow-[0_38px_120px_-98px_rgba(43,27,20,0.55)] backdrop-blur-md sm:p-12">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_10%,rgba(224,123,57,0.18),transparent_62%)]" />

                        <div className="relative mx-auto max-w-3xl">
                            <Pill variant="subtle">Private enquiries</Pill>

                            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                                Share your dates—we’ll respond with availability.
                            </h3>

                            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6B5A4E] sm:text-base">
                                Tell us whether you want to rent or purchase. We’ll share options and next steps.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <PrimaryButton href="mailto:info@omayasuites.com">
                                    <Mail size={16} />
                                    Email enquiry
                                </PrimaryButton>

                                <SecondaryButton href="tel:+910000000000">
                                    <Phone size={16} className="text-[#C65A1E]" />
                                    Call now
                                </SecondaryButton>
                            </div>

                            <p className="mt-4 text-xs text-[#7A6558]">
                                Response times may vary outside business hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
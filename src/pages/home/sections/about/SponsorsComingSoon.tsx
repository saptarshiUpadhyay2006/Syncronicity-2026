import React from 'react'

const SponsorsComingSoon: React.FC = () => {
    return (
        <div className="relative w-full min-h-[60vh] bg-[#131313] flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient glow */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background:
                        'radial-gradient(circle, rgba(16,160,204,0.12) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
            />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 px-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 font-euclid font-light">
                    Our Partners
                </p>

                <h2
                    className="text-4xl sm:text-5xl md:text-7xl font-unbounded font-bold text-center"
                    style={{
                        background: 'linear-gradient(135deg, #70D2FF 0%, #10A0CC 40%, #0d8ab0 70%, #70D2FF 100%)',
                        backgroundSize: '200% 200%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        animation: 'shimmer 4s ease-in-out infinite',
                    }}
                >
                    SPONSORS
                </h2>

                <div className="flex items-center gap-4 mt-2">
                    <div className="h-px w-12 bg-linear-to-r from-transparent to-[#10A0CC]/50" />
                    <span
                        className="text-sm md:text-base font-euclid font-medium tracking-[0.2em] uppercase"
                        style={{
                            background: 'linear-gradient(90deg, #ffffff 0%, #10A0CC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Coming Soon
                    </span>
                    <div className="h-px w-12 bg-linear-to-l from-transparent to-[#10A0CC]/50" />
                </div>

                <p className="text-white/30 text-sm font-euclid text-center max-w-md mt-2">
                    We're partnering with industry leaders to make this event unforgettable. Stay tuned!
                </p>
            </div>

            {/* Shimmer keyframes */}
            <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
        </div>
    )
}

export default SponsorsComingSoon

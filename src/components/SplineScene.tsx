const IPHONE_IMG = "https://cdn.poehali.dev/projects/2eb8511d-1d99-4c79-a260-71d1c51cc5cb/bucket/50623fd5-fe65-4a81-b951-cbacca3444b1.jpg"

export default function SplineScene() {
  return (
    <div className="absolute inset-0 w-full h-full bg-background overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 70% 50%, hsl(211 100% 60% / 0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute right-0 top-0 h-full flex items-center justify-center"
        style={{ width: "55%", right: "2%" }}
      >
        <div
          style={{
            animation: "iphone-float 4s ease-in-out infinite",
            filter: "drop-shadow(0 40px 80px hsl(0 60% 25% / 0.5)) drop-shadow(0 0 60px hsl(0 0% 0% / 0.9))",
          }}
        >
          <img
            src={IPHONE_IMG}
            alt="iPhone 18 Pro Max"
            style={{
              height: "480px",
              width: "auto",
              objectFit: "contain",
              animation: "iphone-rotate 8s ease-in-out infinite",
              mixBlendMode: "lighten",
            }}
          />
        </div>
      </div>

      <div
        className="absolute bottom-16 right-1/4 w-64 h-8 rounded-full"
        style={{
          background: "hsl(0 60% 30% / 0.2)",
          filter: "blur(20px)",
          animation: "shadow-pulse 4s ease-in-out infinite",
        }}
      />

      <style>{`
        @keyframes iphone-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes iphone-rotate {
          0%, 100% { transform: perspective(800px) rotateY(-8deg) rotateX(2deg); }
          50% { transform: perspective(800px) rotateY(8deg) rotateX(-2deg); }
        }
        @keyframes shadow-pulse {
          0%, 100% { transform: scaleX(1); opacity: 0.6; }
          50% { transform: scaleX(0.7); opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}

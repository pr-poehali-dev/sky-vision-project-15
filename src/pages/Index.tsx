import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"

const IPHONE_18 = "https://cdn.poehali.dev/projects/2eb8511d-1d99-4c79-a260-71d1c51cc5cb/bucket/23d2d94f-9905-4a81-9c89-582142c6bc2c.jpg"
const IPHONE_17 = "https://cdn.poehali.dev/projects/2eb8511d-1d99-4c79-a260-71d1c51cc5cb/bucket/1ef25112-bba7-4aa0-9dec-d9305c1bb66d.png"
const IPHONE_16 = "https://cdn.poehali.dev/projects/2eb8511d-1d99-4c79-a260-71d1c51cc5cb/bucket/1801b2b9-a711-418a-9047-3438e55c7a9f.jpg"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-40">
            <div className="flex items-center justify-center mb-3.5 md:gap-11">
              <div className="flex flex-col items-center gap-2">
                <div style={{ background: "#111", borderRadius: "16px", overflow: "hidden", display: "inline-block" }}>
                  <img
                    src={IPHONE_18}
                    alt="iPhone 18 Pro Max"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                    style={{ mixBlendMode: "lighten" }}
                  />
                </div>
                <span className="text-accent font-mono text-xs">iPhone 18 Pro Max</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div style={{ background: "#111", borderRadius: "16px", overflow: "hidden", display: "inline-block" }}>
                  <img
                    src={IPHONE_17}
                    alt="iPhone 17 Pro Max"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                    style={{ mixBlendMode: "lighten" }}
                  />
                </div>
                <span className="text-accent font-mono text-xs">iPhone 17 Pro Max</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div style={{ background: "#111", borderRadius: "16px", overflow: "hidden", display: "inline-block" }}>
                  <img
                    src={IPHONE_16}
                    alt="iPhone 16 Pro Max"
                    className="w-48 h-48 md:w-56 md:h-56 object-contain"
                    style={{ mixBlendMode: "lighten" }}
                  />
                </div>
                <span className="text-accent font-mono text-xs">iPhone 16 Pro Max</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm shrink-0">Модели</span>
                <span className="text-foreground font-mono text-sm">
                  iPhone 18, 18 Pro, 18 Pro Max · iPhone 17, 17 Pro, 17 Pro Max · iPhone 16, 16 Pro, 16 Pro Max
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm shrink-0">Гарантия</span>
                <span className="text-foreground font-mono text-sm">12 месяцев на все устройства</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm shrink-0">О нас</span>
                <span className="text-foreground font-mono text-sm">
                  Продаём только новые оригинальные iPhone. Быстрая доставка по всей России, удобная оплата и честные цены без скрытых наценок.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index

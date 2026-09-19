import { Heart } from "lucide-react";

export function ShopFlowDemo() {
  return (
    <section id="demo" className="border-y bg-muted/30 py-20 px-4 md:px-0">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm shadow-xl p-12 md:p-24 flex flex-col items-center justify-center bg-gradient-to-br from-background via-muted/50 to-muted">
            <div className="rounded-full bg-primary/10 p-5 mb-8 animate-pulse">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Thank you for taking the time to review my portfolio and this project. 
              The live demo video is currently being updated to reflect the latest features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

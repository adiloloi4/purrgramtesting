import Hero from "@/components/ui/neural-network-hero";

export default function DemoOne() {
  return (
    <div className="w-screen h-screen flex flex-col relative">
      <Hero 
        title="Where code meets creativity."
        description="A platform for creating and sharing code with AI."
        badgeText="AI-powered"
        badgeLabel="New"
        ctaButtons={[
          { text: "Get started", href: "#get-started", primary: true }
        ]}
        microDetails={["AI-powered", "Code generation", "Code editing"]}
      />
    </div>
  );
}


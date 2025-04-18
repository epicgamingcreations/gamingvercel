import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useState, useMemo } from "react";

export default function EpicGamingHome() {
  const [config, setConfig] = useState({
    cpu: "Intel i7",
    gpu: "NVIDIA RTX 4070",
    ram: "16GB",
    storage: "1TB SSD"
  });

  const pricing = {
    cpu: {
      "Intel i5": 200,
      "Intel i7": 300,
      "AMD Ryzen 7": 320,
      "AMD Ryzen 9": 400
    },
    gpu: {
      "NVIDIA RTX 4060": 350,
      "NVIDIA RTX 4070": 500,
      "NVIDIA RTX 4080": 800,
      "AMD RX 7900 XT": 750
    },
    ram: {
      "16GB": 80,
      "32GB": 140,
      "64GB": 250
    },
    storage: {
      "512GB SSD": 70,
      "1TB SSD": 120,
      "2TB SSD": 200
    }
  };

  const totalPrice = useMemo(() => {
    return (
      pricing.cpu[config.cpu] +
      pricing.gpu[config.gpu] +
      pricing.ram[config.ram] +
      pricing.storage[config.storage]
    );
  }, [config]);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 py-10 text-center bg-gradient-to-b from-black to-zinc-900">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400">Epic Gaming Creations, LLC</h1>
        <p className="text-lg md:text-xl mb-6">Custom Gaming PCs Built for Power, Style & Performance</p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-base md:text-lg px-6 py-2 rounded-full">
          Shop Builds <MoveRight className="ml-2" />
        </Button>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">Our Builds</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {["Streamer Pro", "4K Ultra Gamer", "VR Ready Beast"].map((build, index) => (
            <Card key={index} className="bg-zinc-800 border border-zinc-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-300 mb-2">{build}</h3>
                <p className="text-zinc-300 mb-4">High-performance gaming rig built for serious players and content creators.</p>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-300 w-full">View Build</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-8 bg-zinc-900">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-10">PC Configurator</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { label: "CPU", name: "cpu", options: ["Intel i5", "Intel i7", "AMD Ryzen 7", "AMD Ryzen 9"] },
            { label: "GPU", name: "gpu", options: ["NVIDIA RTX 4060", "NVIDIA RTX 4070", "NVIDIA RTX 4080", "AMD RX 7900 XT"] },
            { label: "RAM", name: "ram", options: ["16GB", "32GB", "64GB"] },
            { label: "Storage", name: "storage", options: ["512GB SSD", "1TB SSD", "2TB SSD"] }
          ].map((item, i) => (
            <div key={i}>
              <label className="block mb-1 text-zinc-300">{item.label}</label>
              <select
                name={item.name}
                value={config[item.name]}
                onChange={handleChange}
                className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-600"
              >
                {item.options.map((opt, idx) => (
                  <option key={idx}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
          <div className="mt-6 text-center">
            <p className="text-lg text-zinc-200 mb-4">Selected Config:</p>
            <pre className="bg-zinc-800 text-yellow-300 p-4 rounded text-sm sm:text-base overflow-x-auto">
              {JSON.stringify(config, null, 2)}
            </pre>
            <p className="text-xl text-yellow-400 font-semibold mt-4">Estimated Price: ${totalPrice}</p>
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 text-base px-6 py-2 rounded-full mt-4">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-16 px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose Us?</h2>
        <p className="text-zinc-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
          We offer hand-built, professionally cable-managed gaming PCs with top-tier components, sleek designs, and reliable customer support. Choose power. Choose aesthetics. Choose Epic.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 text-base md:text-lg rounded-full">
          Contact Us
        </Button>
      </section>

      <footer className="bg-black py-6 text-center text-zinc-500 text-sm">
        &copy; {new Date().getFullYear()} Epic Gaming Creations, LLC. All rights reserved.
      </footer>
    </main>
  );
}
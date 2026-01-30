"use client";

import Image from "next/image";

export function ProvaSocial() {
  return (
    <section
      className="py-24 relative bg-[#030712] overflow-hidden"
      id="prova-social"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Experiencia comprovada por quem entende
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
          {/* Novos Cadastros */}
          <div className="flex flex-col items-center">
            <div className="flex -space-x-3 mb-4 scale-125">
              <Image
                alt="Usuario"
                className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCumfa2fdt-eh3ILCx_v_zKzZuAapnkUXV8oOnXWE22u4kptDvVis8iCJWSnPmggSIU7F8GFBK1IpbdWrvT1wnA6woo_E9kBgfBwBK0hwnZVurKVYfc0dGnyPQgIqe_5Au_W7WRjyjfUiIs2Q-NwimZC-YLJyT1hMKuFM_JS-CfaOoEuTRvZ31T4nRI6q50_4JvmAFPVEhSp5IKzGM1xcwdjjMcIZaFJELAUOzz9j9e4-o9wEJX8MlXAue0H-yZ_0e8bMLDXnxUlI0"
                width={40}
                height={40}
              />
              <Image
                alt="Usuario"
                className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6sFSXz1B7fINWtVz14o8FH9j3pgO0Ed25MumyOTvcbBsL4MSJqfPLhH2rr7cmPcg4Qji4cO1I6M7LE1a-ZRn0gW_KqTCEVovnQRvJ7euhai5jTfLYyxG-Up5dPy0epHZ4iUZd-J3YbalfFuh24ALw8NLav5A4lqyjmMoBcuWd3FvXWHvCZLTu65ymtkUc3hy8FV1YK1kjWRoql0L2BRv9StcwrHmz23Y3qOPeK4zpWCERX5pV7J0ZM_NLXrx2u93_lzjPrPaeIZzG"
                width={40}
                height={40}
              />
              <Image
                alt="Usuario"
                className="w-10 h-10 rounded-full border-2 border-gray-900 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKh9fKmvF7jsi1YSzjrWgKbE4GXulqYkJwncVrCCNextp84FrJZ0rMQ0grUUM-ELFibss9gGyHzcLLZM7ingUZuQ6EO5yv5ky1pO4c8BU4ugTeB8roCZD-uW-nwViYg_lS1YUO67Z9c2LedWa558HF0KWqHoy3VoPeM3kRv_4OMk0PmPygVR0RPCAO7KE4clthFbzsm3rvBVOGx0bH4KvxuuKOjMfZLAjEOYEKh0thnscLW1KZpuog6TVDHPS7Se11qwRgkKCvSzz"
                width={40}
                height={40}
              />
              <div className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center text-[10px] font-bold text-gray-400">
                +500
              </div>
            </div>
            <p className="text-gray-400 text-sm">Novos cadastros hoje</p>
          </div>

          <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>

          {/* Avaliacao */}
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white mb-1">4.9/5</p>
            <div className="flex justify-center text-yellow-500 mb-1">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="text-gray-400 text-sm">App Store e Play Store</p>
          </div>

          <div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>

          {/* Total Monitorado */}
          <div className="text-center">
            <p className="text-4xl font-extrabold text-white mb-1">R$ 50M+</p>
            <p className="text-gray-400 text-sm">Monitorados pelo Planejai</p>
          </div>
        </div>
      </div>
    </section>
  );
}

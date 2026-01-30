"use client"

import Link from "next/link"

export function Navegacao() {
  return (
    <nav className="fixed w-full z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="material-symbols-outlined text-white text-2xl">account_balance_wallet</span>
            </div>
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Planejai
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <Link href="#recursos" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Recursos
            </Link>
            <Link href="#prova-social" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Comunidade
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Planos
            </Link>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Login
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold rounded-full text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
            >
              Começar Agora
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

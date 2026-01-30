"use client";

import Link from "next/link";

export function Rodape() {
  return (
    <footer className="py-20 bg-[#030712] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-sm">
                  account_balance_wallet
                </span>
              </div>
              <span className="font-bold text-xl text-white">Planejai</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-[200px]">
              Elevando o padrao da gestao financeira pessoal com tecnologia e
              design de ponta.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.047-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm1.472 4H9.08c-2.327 0-3.46.246-4.229.849-.497.391-.874.958-1.01 1.728-.155.885-.155 2.366-.155 3.931 0 1.564 0 3.045.155 3.931.136.77.513 1.337 1.01 1.728.769.603 1.902.849 4.229.849h3.235c2.327 0 3.46-.246 4.229-.849.497-.391.874-.958 1.01-1.728.155-.885.155-2.366.155-3.931 0-1.564 0-3.045-.155-3.931-.136-.77-.513-1.337-1.01-1.728-.769-.603-1.902-.849-4.229-.849zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6zM16.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links do Produto */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">
              Produto
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Seguranca
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Links da Empresa */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-[0.2em]">
              Empresa
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Sobre Nos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Baixar App */}
          <div className="md:text-right">
            <Link
              href="#"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 font-bold group"
            >
              Baixar App Mobile{" "}
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Link>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Planejai Premium. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-xs text-gray-600">
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Privacidade
            </Link>
            <Link href="#" className="hover:text-gray-400 transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

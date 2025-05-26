import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white mx-10 w-[1024px] h-full flex flex-col items-center gap-10">

      <div className="flex flex-col items-center justify-center justify-between items-start">

        <div className="">
          <Image
            src="/images/logoTrsp.png"
            width={180}
            height={180}
            alt="Logo VountX"
          />
        </div>

        <div className="flex flex-col justify-center flex-wrap gap-8 sm:flex-row sm:items-center">

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-3">Contato</h3>
            <ul className="space-y-1 text-gray-400 text-sm font-poppins">
              <li><span className="hover:text-white transition">vountx@gmail.com</span></li>
              <li><a target="_blank" href="https://www.linkedin.com/company/106912248/admin/dashboard/" className="hover:text-white transition">LinkedIn</a></li>
              <li><a target="_blank" href="https://www.instagram.com/vountxofc/" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-3">Suporte</h3>
            <ul className="space-y-1 text-gray-400 text-sm font-poppins">
              <li><a target="_blank" href="https://wa.link/6vwala" className="hover:text-white transition">Fale com um especialista</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="w-full mb-5 font-montserrat text-center text-sm text-gray-500">
        © 2025 VountX. Todos os direitos reservados.
      </div>
    </footer>
  );
}

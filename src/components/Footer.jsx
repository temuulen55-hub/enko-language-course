import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import EnkoLogo from "./EnkoLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <EnkoLogo size={30} light={true} />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Англи, Солонгос хэлний цахим болон танхимийн мэргэжлийн сургалт.
              Website is made by E. Temuulen
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Холбоосууд
            </p>
            <ul className="space-y-3">
              {[
                ["/", "Нүүр"],
                ["/about", "Бидний тухай"],
                ["/courses", "Сургалтууд"],
                ["/teachers", "Багш нар"],
                ["/testimonials", "Сэтгэгдэл"],
                ["/contact", "Холбоо барих"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-5">
              Холбоо барих
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-slate-500 mt-0.5 flex-shrink-0"
                />
                <div className="space-y-0.5">
                  <a
                    href="tel:99999999"
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    9999 9999
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-slate-500 mt-0.5 flex-shrink-0"
                />
                <p className="text-sm text-slate-400">Ulaanbaatar, Mongolia</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Temka Language Center. Бүх эрх
            хамгаалагдсан.
          </p>
          <p className="text-xs text-slate-700 tracking-wide">
            Англи · Солонгос хэл
          </p>
        </div>
      </div>
    </footer>
  );
}

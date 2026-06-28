import { motion } from 'framer-motion'
import { Target, Brain, Heart, TrendingUp } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const values = [
  { Icon: Target, title: 'Зорилготой сургалт', desc: 'Тодорхой зорилтод суурилсан хөтөлбөр — шалгалт, ажил, аялал.' },
  { Icon: Brain, title: 'Орчин үеийн арга зүй', desc: 'Коммуникатив аргаар харилцааны ур чадварыг хурдан хөгжүүлнэ.' },
  { Icon: Heart, title: 'Дэмжих орчин', desc: 'Найрсаг, дэмжлэг бүхий суралцах орчин бий болгодог.' },
  { Icon: TrendingUp, title: 'Хэмжигдэх дэвшил', desc: 'Тогтмол үнэлгээ, тест, хянах системтэйгээр ахиц дэвшлийг хэмждэг.' },
]

const stats = [
  { num: '500+', label: 'Суралцагчид' },
  { num: '5+', label: 'Жилийн туршлага' },
  { num: '2', label: 'Хэлний хөтөлбөр' },
  { num: '95%', label: 'Амжилтын хувь' },
]

const team = [
  { name: 'Ц. Энхтуяа', role: 'Үндэслэгч & Ахлах багш', lang: 'Англи хэл' },
  { name: 'Б. Сувд', role: 'Солонгос хэлний багш', lang: 'Солонгос хэл' },
  { name: 'Д. Баатар', role: 'Англи хэлний багш', lang: 'Англи хэл' },
]

export default function About() {
  return (
    <PageTransition>
      {/* ── Page header ── */}
      <section className="pt-36 pb-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5"
          >
            Бидний тухай
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl text-balance"
          >
            Enko Language Center 2
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="text-slate-500 text-lg mt-5 max-w-xl leading-relaxed"
          >
            Монголын залуучуудыг гадаад хэлний боловсролоор хангах зорилгоор байгуулагдсан хэлний сургалтын төв.
          </motion.p>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-start">
          <motion.div {...inView()}>
            <SectionTitle
              tag="Манай түүх"
              title="Хэлний боловсролыг хүртээмжтэй болгоно"
            />
            <div className="mt-8 space-y-5 text-slate-500 text-base leading-relaxed">
              <p>
                Enko Language Center 2 нь Монголын залуучуудыг гадаад хэлний боловсролоор хангах зорилгоор байгуулагдсан. Англи болон Солонгос хэлний сургалтыг цахим болон танхимийн хэлбэрээр явуулдаг.
              </p>
              <p>
                Бид жижиг бүлгийн хэлбэрээр ажиллах замаар хувь хүн бүрт анхаарал хандуулж, тогтмол үнэлгээ, дасгал даалгавраар суралцагчийн дэвшлийг баталгаажуулдаг.
              </p>
              <p>
                Манай зорилго — суралцагч бүр сургалт дуусаад бодит амьдрал дээр хэлийг чөлөөтэй ашиглах чадвартай болох явдал.
              </p>
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div {...inView(0.08)} className="grid grid-cols-2 gap-px bg-slate-100">
            {stats.map(({ num, label }) => (
              <div key={label} className="bg-white p-8">
                <p className="text-4xl font-bold text-slate-900 tracking-tight mb-1">{num}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionTitle
              tag="Манай арга зүй"
              title="Яагаад бидний сургалт үр дүнтэй вэ?"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...inView(i * 0.06)}
                className="bg-white p-8 group"
              >
                <div className="mb-6 text-slate-400 group-hover:text-slate-700 transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionTitle
              tag="Манай баг"
              title="Мэргэжлийн багш нар"
              subtitle="Туршлагатай, хандлагатай багш нар таны хэл сурах аялалыг удирдана."
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-px bg-slate-100 max-w-3xl">
            {team.map(({ name, role, lang }, i) => (
              <motion.div
                key={name}
                {...inView(i * 0.07)}
                className="bg-white p-8"
              >
                <div className="w-10 h-10 bg-slate-100 flex items-center justify-center mb-5">
                  <span className="text-slate-600 font-semibold text-sm">{name[0]}</span>
                </div>
                <h3 className="font-semibold text-slate-900 text-base">{name}</h3>
                <p className="text-slate-400 text-sm mt-1">{role}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-300 mt-3">{lang}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

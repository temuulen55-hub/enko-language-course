import { motion } from 'framer-motion'
import { GraduationCap, Globe, BookOpen } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const teachers = [
  {
    name: 'Ц. Энхтуяа',
    role: 'Үндэслэгч & Ахлах багш',
    lang: 'Англи хэл',
    exp: '8+ жил',
    cert: 'CELTA certified · IELTS 8.0',
    bio: 'Их Британид зургаан жил амьдарч суралцсан туршлагатай. Коммуникатив аргаас суурилсан сургалтын арга зүйг нэвтрүүлсэн.',
    quals: ['CELTA гэрчилгээ', 'IELTS 8.0', 'Английн утга зохиол — BA'],
  },
  {
    name: 'Б. Сувд',
    role: 'Ахлах багш',
    lang: 'Солонгос хэл',
    exp: '6+ жил',
    cert: 'TOPIK II — 6-р түвшин',
    bio: 'Солонгост 5 жил амьдарч, Ёнсэй их сургуульд Солонгос хэлний боловсрол эзэмшсэн. TOPIK болон EPS-TOPIK бэлтгэлд мэргэшсэн.',
    quals: ['TOPIK II — 6-р түвшин', 'Ёнсэй их сургууль — Хэл шинжлэл MA', 'EPS-TOPIK зааварлагч'],
  },
  {
    name: 'Д. Баатар',
    role: 'Багш',
    lang: 'Англи хэл',
    exp: '4+ жил',
    cert: 'IELTS 7.5 · TKT certified',
    bio: 'АНУ-д магистрын зэрэг хамгаалсан. Бизнесийн англи болон IELTS бэлтгэлийн чиглэлд мэргэшсэн.',
    quals: ['TKT гэрчилгээ (Cambridge)', 'IELTS 7.5', 'Бизнесийн удирдлага — MS'],
  },
  {
    name: 'О. Номин',
    role: 'Багш',
    lang: 'Солонгос хэл',
    exp: '3+ жил',
    cert: 'TOPIK II — 5-р түвшин',
    bio: 'Солонгост оюутнаар суусан. EPS-TOPIK шалгалтанд тэнцэж, ажлын туршлагатай. Практик хэлний сургалтад анхаардаг.',
    quals: ['TOPIK II — 5-р түвшин', 'EPS-TOPIK тэнцсэн', 'Солонгос хэл — BA'],
  },
  {
    name: 'Г. Мөнхзул',
    role: 'Багш',
    lang: 'Англи хэл',
    exp: '5+ жил',
    cert: 'DELTA certified · IELTS 8.5',
    bio: 'IELTS, TOEFL шалгалтын бэлтгэлд мэргэшсэн. Их сургуулийн элсэлтийн шалгалтад амжилттай бэлдсэн олон суралцагчтай.',
    quals: ['DELTA гэрчилгээ', 'IELTS 8.5', 'Англи хэл заах арга зүй — MA'],
  },
  {
    name: 'Э. Тэгшжаргал',
    role: 'Клубын удирдагч',
    lang: 'Speaking & Writing Club',
    exp: '3+ жил',
    cert: 'IELTS 7.0 · Debates coach',
    bio: 'Олон улсын дебатын тэмцээнд оролцсон туршлагатай. Speaking Club болон Writing Club-ийг удирдаж, суралцагчдын харилцааны ур чадварыг нэмэгдүүлдэг.',
    quals: ['IELTS 7.0', 'Олон улсын дебатын шүүгч', 'Харилцааны ухаан — BA'],
  },
]

export default function Teachers() {
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
            Багш нар
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl text-balance"
          >
            Мэргэжлийн багш нарын баг
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="text-slate-500 text-lg mt-5 max-w-xl leading-relaxed"
          >
            Олон улсын гэрчилгээтэй, бодит туршлагатай багш нар таны хэл сурах аялалыг удирдана.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-3 divide-x divide-slate-200">
            {[
              { Icon: GraduationCap, value: '6', label: 'Мэргэжлийн багш' },
              { Icon: Globe, value: '3', label: 'Орон нутгаас ирсэн' },
              { Icon: BookOpen, value: '2', label: 'Хэлний чиглэл' },
            ].map(({ Icon, value, label }, i) => (
              <motion.div
                key={label}
                {...inView(i * 0.07)}
                className="flex items-center gap-4 py-8 px-6"
              >
                <Icon size={20} strokeWidth={1.5} className="text-slate-400 flex-shrink-0" />
                <div>
                  <p className="text-2xl font-bold text-slate-900 tracking-tight">{value}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Teacher cards ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100">
            {teachers.map(({ name, role, lang, exp, cert, bio, quals }, i) => (
              <motion.div
                key={name}
                {...inView(i * 0.06)}
                className="bg-white p-8 flex flex-col"
              >
                {/* Avatar */}
                <div className="w-12 h-12 bg-slate-900 flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="text-white font-semibold text-lg tracking-tight">
                    {name.split(' ').pop()[0]}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="font-bold text-slate-900 text-lg tracking-tight">{name}</h3>
                  <p className="text-slate-500 text-sm mt-0.5">{role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="px-2.5 py-1 border border-slate-200 text-xs font-medium text-slate-600">
                    {lang}
                  </span>
                  <span className="px-2.5 py-1 border border-slate-200 text-xs font-medium text-slate-600">
                    {exp}
                  </span>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{bio}</p>

                <div className="border-t border-slate-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                    Мэргэшил
                  </p>
                  <ul className="space-y-1.5">
                    {quals.map((q) => (
                      <li key={q} className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-slate-300 rounded-full flex-shrink-0" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join banner ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <motion.div {...inView()}>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Манай багт нэгдэх үү?
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Туршлагатай багш нарыг хайж байна
            </h2>
          </motion.div>
          <motion.a
            {...inView(0.08)}
            href="tel:99999999"
            whileHover={{ opacity: 0.85 }}
            className="flex-shrink-0 px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
          >
            Холбоо барих
          </motion.a>
        </div>
      </section>
    </PageTransition>
  )
}

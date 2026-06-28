import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Monitor, Users, Award, BookOpen } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.22, delay, ease: 'easeOut' },
})

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const stats = [
  { value: '500+', label: 'Суралцагчид' },
  { value: '5+', label: 'Жил туршлага' },
  { value: '95%', label: 'Амжилтын хувь' },
  { value: '2', label: 'Хэл' },
]

const features = [
  {
    Icon: Monitor,
    title: 'Цахим сургалт',
    desc: 'Дурын газраас, дурын цагт. Zoom болон бичлэгийн хэлбэрээр хичээллэнэ.',
  },
  {
    Icon: Users,
    title: 'Танхимын сургалт',
    desc: 'Жижиг бүлгийн хамт олонтой нүүр тулан суралцаж харилцааны ур чадвар эзэмшинэ.',
  },
  {
    Icon: BookOpen,
    title: 'Бүрэн хөтөлбөр',
    desc: 'Анхан шатнаас ахисан түвшин хүртэлх бүтэн сургалтын замнал.',
  },
  {
    Icon: Award,
    title: 'Гэрчилгээ',
    desc: 'Хөтөлбөр амжилттай дүүргэсэн тохиолдолд баталгаажсан гэрчилгээ олгоно.',
  },
]

const courses = [
  {
    lang: 'Англи хэл',
    sub: 'English Language',
    levels: ['Анхан шат', 'Дунд шат', 'Ахисан шат'],
    desc: 'A1 түвшинтэй эхлэгчдэд зориулсан анхан шатнаас эхлэн IELTS бэлтгэл хүртэлх бүтэн замнал.',
  },
  {
    lang: 'Солонгос хэл',
    sub: 'Korean Language',
    levels: ['Анхан шат', 'Дунд шат', 'Ахисан шат'],
    desc: 'Хангыл цагаан толгойгоос эхлэн TOPIK II шалгалтын бэлтгэл хүртэлх бүтэн хөтөлбөр.',
  },
]

export default function Home() {
  return (
    <PageTransition>
      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p {...fadeUp(0)} className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Enko Language Center 2
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6 text-balance"
            >
              Гадаад хэлний мэргэжлийн сургалт
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Англи, Солонгос хэлийг цахим болон танхимын хэлбэрээр эзэмшиж,
              карьер болон амьдралынхаа боломжийг нэмэгдүүлнэ.
            </motion.p>
            <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-4">
              <Link to="/courses">
                <motion.span
                  whileHover={{ opacity: 0.9 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold transition-opacity cursor-pointer"
                >
                  Сургалт үзэх <ArrowRight size={15} />
                </motion.span>
              </Link>
              <Link to="/contact">
                <motion.span
                  whileHover={{ opacity: 0.85 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 text-slate-300 text-sm font-medium hover:border-slate-500 hover:text-white transition-colors cursor-pointer"
                >
                  Холбоо барих
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* Right — stats */}
          <motion.div
            {...fadeUp(0.18)}
            className="grid grid-cols-2 gap-px bg-slate-800"
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-slate-900 p-8">
                <p className="text-3xl font-bold text-white tracking-tight mb-1">{value}</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-800" />
      </section>

      {/* ── Features ── */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <SectionTitle
              tag="Яагаад Enko?"
              title="Бидний давуу талууд"
              subtitle="Таны хэл сурах аялалыг хамгийн үр дүнтэй болгох тал бүрийн дэмжлэг."
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100">
            {features.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={title}
                {...inView(i * 0.06)}
                className="bg-white p-8 group"
              >
                <div className="w-8 h-8 mb-6 text-slate-900 group-hover:text-slate-600 transition-colors">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-slate-900 text-base mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses preview ── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <SectionTitle
              tag="Сургалтууд"
              title="Хэлний хөтөлбөрүүд"
              subtitle="Анхан шатнаас ахисан түвшин хүртэлх бүрэн сургалт."
            />
            <Link to="/courses">
              <motion.span
                whileHover={{ opacity: 0.75 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer whitespace-nowrap transition-opacity"
              >
                Бүгдийг үзэх <ArrowRight size={14} />
              </motion.span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200">
            {courses.map(({ lang, sub, levels, desc }, i) => (
              <motion.div
                key={lang}
                {...inView(i * 0.08)}
                className="bg-white p-10 group"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">{sub}</p>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">{lang}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {levels.map((lv) => (
                    <span
                      key={lv}
                      className="px-3 py-1 border border-slate-200 text-xs font-medium text-slate-600"
                    >
                      {lv}
                    </span>
                  ))}
                </div>
                <Link to="/courses">
                  <motion.span
                    whileHover={{ opacity: 0.75 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer transition-opacity"
                  >
                    Дэлгэрэнгүй <ArrowRight size={14} />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <motion.div {...inView()}>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Эхлэцгээе</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
              Өнөөдөр сургалтад бүртгүүлэх
            </h2>
          </motion.div>
          <motion.div {...inView(0.08)} className="flex flex-wrap gap-4 flex-shrink-0">
            <a
              href="tel:99625232"
              className="px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              99625232
            </a>
            <Link to="/contact">
              <span className="inline-block px-7 py-3.5 border border-slate-700 text-slate-300 text-sm font-medium hover:border-slate-500 hover:text-white transition-colors cursor-pointer">
                Мессеж илгээх
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

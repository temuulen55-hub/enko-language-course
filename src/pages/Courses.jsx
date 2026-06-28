import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Calendar, ArrowRight, Check } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const courses = [
  {
    id: 'english',
    lang: 'Англи хэл',
    sub: 'English Language',
    levels: [
      {
        name: 'Анхан шат',
        range: 'A1 – A2',
        duration: '3 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮120,000 / сар',
        topics: ['Үндсэн дүрэм', 'Өдөр тутмын харилцаа', 'Цагаан толгой & дуудлага', 'Энгийн ярианы хэллэг'],
      },
      {
        name: 'Дунд шат',
        range: 'B1 – B2',
        duration: '4 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮140,000 / сар',
        topics: ['Нарийн дүрэм', 'Бичгийн ур чадвар', 'Унших & ойлгох', 'Хэлэлцүүлэг & дебат'],
      },
      {
        name: 'Ахисан шат',
        range: 'C1 – C2',
        duration: '4 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮160,000 / сар',
        topics: ['IELTS / TOEFL бэлтгэл', 'Бизнесийн англи', 'Илтгэл хэлэх', 'Нарийн бичгийн ур чадвар'],
      },
    ],
  },
  {
    id: 'korean',
    lang: 'Солонгос хэл',
    sub: 'Korean Language',
    levels: [
      {
        name: 'Анхан шат',
        range: 'TOPIK I',
        duration: '3 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮120,000 / сар',
        topics: ['Хангыл цагаан толгой', 'Энгийн өгүүлбэр', 'Тоолол & огноо', 'Өдөр тутмын үгс'],
      },
      {
        name: 'Дунд шат',
        range: 'TOPIK II',
        duration: '4 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮140,000 / сар',
        topics: ['Нарийн дүрэм', 'Харилцааны ур чадвар', 'Унших & ойлгох', 'Соёлын мэдлэг'],
      },
      {
        name: 'Ахисан шат',
        range: 'TOPIK II+',
        duration: '4 сар',
        sessions: 'Долоо хоногт 3 удаа',
        price: '₮160,000 / сар',
        topics: ['TOPIK шалгалт бэлтгэл', 'Бизнесийн солонгос', 'Нийтлэл бичих', 'Соёлын дэвшилтэт мэдлэг'],
      },
    ],
  },
]

const highlights = [
  { label: 'Цахим сургалт', sub: 'Zoom & Google Meet' },
  { label: 'Танхимын сургалт', sub: 'Сан их сургууль 4-407' },
  { label: 'Жижиг бүлэг', sub: '5 – 8 суралцагч' },
  { label: 'Гэрчилгээ', sub: 'Дүүргэлтийн дараа олгоно' },
]

export default function Courses() {
  const [activeTab, setActiveTab] = useState('english')
  const active = courses.find((c) => c.id === activeTab)

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
            Сургалтууд
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl text-balance"
          >
            Хэлний хөтөлбөрүүд
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="text-slate-500 text-lg mt-5 max-w-xl leading-relaxed"
          >
            Анхан шатнаас ахисан түвшин хүртэлх бүрэн сургалтын хөтөлбөр.
          </motion.p>
        </div>
      </section>

      {/* ── Tab selector ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-slate-200 mb-16">
            {courses.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-colors duration-150 ${
                  activeTab === c.id
                    ? 'text-slate-900'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {c.lang}
                {activeTab === c.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Level cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="mb-12">
                <SectionTitle
                  tag={active.sub}
                  title={active.lang}
                  subtitle="Хөтөлбөр бүр нь жижиг бүлэгтэй, туршлагатай багштай явагдана."
                />
              </div>

              <div className="grid md:grid-cols-3 gap-px bg-slate-100">
                {active.levels.map((level, i) => (
                  <motion.div
                    key={level.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.07 }}
                    className="bg-white p-8 group"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">{level.range}</p>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">{level.name}</h3>

                    <div className="space-y-2.5 mb-6">
                      <div className="flex items-center gap-2.5 text-sm text-slate-500">
                        <Clock size={14} strokeWidth={1.5} className="flex-shrink-0" />
                        {level.duration}
                      </div>
                      <div className="flex items-center gap-2.5 text-sm text-slate-500">
                        <Calendar size={14} strokeWidth={1.5} className="flex-shrink-0" />
                        {level.sessions}
                      </div>
                    </div>

                    <p className="text-lg font-bold text-slate-900 mb-6">{level.price}</p>

                    <div className="border-t border-slate-100 pt-6 mb-8">
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Сэдвүүд</p>
                      <ul className="space-y-2.5">
                        {level.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <Check size={13} className="flex-shrink-0 mt-0.5 text-slate-400" strokeWidth={2} />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link to="/contact">
                      <motion.span
                        whileHover={{ opacity: 0.8 }}
                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer transition-opacity"
                      >
                        Бүртгүүлэх <ArrowRight size={13} />
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Info strip ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {highlights.map(({ label, sub }, i) => (
              <motion.div
                key={label}
                {...inView(i * 0.06)}
                className="bg-white p-7"
              >
                <p className="font-semibold text-slate-900 text-sm mb-1">{label}</p>
                <p className="text-xs text-slate-400">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

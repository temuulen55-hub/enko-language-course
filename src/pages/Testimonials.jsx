import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const testimonials = [
  {
    name: 'Д. Мөнхбаяр',
    course: 'Англи хэл — Ахисан шат',
    result: 'IELTS 7.0 авсан',
    text: 'Enko-д суралцахаасаа өмнө IELTS гэж юу болохыг ойлгодоггүй байлаа. Гурван сарын дотор 7.0 авсан. Багш Энхтуяагийн аргачлал маш тодорхой, практик байсан. Одоо Австралид суралцах бэлтгэлтэй болсон.',
    rating: 5,
  },
  {
    name: 'Э. Солонго',
    course: 'Солонгос хэл — EPS-TOPIK',
    result: 'EPS-TOPIK тэнцсэн',
    text: 'Солонгост ажиллах зорилготой байсан ч EPS-TOPIK шалгалт маш хэцүү санагдаж байсан. Enko-ийн EPS-TOPIK хөтөлбөр надад яг хэрэгтэй зүйлсийг заасан. Дөрвөн сарын дараа тэнцсэндээ итгэхэд бэрх байсан.',
    rating: 5,
  },
  {
    name: 'Б. Анужин',
    course: 'Speaking Club',
    result: '3 сар Speaking Club',
    text: 'Хэл мэддэг ч ярихдаа айдаг байлаа. Speaking Club намайг маш их өөрчилсөн. Долоо хоног болгон ярилцаж, санаагаа илэрхийлж сурсан. Одоо ажлын ярилцлагад ч итгэлтэй ярьж чаддаг болсон.',
    rating: 5,
  },
  {
    name: 'Н. Батцэцэг',
    course: 'Солонгос хэл — TOPIK II',
    result: 'TOPIK II — 4-р түвшин',
    text: 'Багш Сувд маш тэвчээртэй, ойлгуулж чаддаг хүн. TOPIK II-д 4-р түвшин авах нь миний хувьд том амжилт байсан. Enko-ийн жижиг бүлгийн сургалт нэг бүрт анхаарал хандуулдаг нь онцлог.',
    rating: 5,
  },
  {
    name: 'Т. Галбадрах',
    course: 'Англи хэл — Дунд шат',
    result: 'Дунд шат дүүргэсэн',
    text: 'Өмнө нь олон газар сурах гэж оролдсон ч үр дүн гардаггүй байлаа. Enko-д ирсний дараа дөрвөн сарын дотор дунд шатыг амжилттай дүүргэлээ. Хичээлүүд нь систематик, даалгавар нь практик байсан.',
    rating: 5,
  },
  {
    name: 'Х. Оюунчимэг',
    course: 'Writing Club',
    result: '2 сар Writing Club',
    text: 'Их сургуулийн эссе бичихэд маш их хэрэг болсон. Writing Club дахь хүн бүрийн бичвэрийг хамтдаа шүүмжилдэг арга маш сайн байсан. Багш Тэгшжаргалын санал зөвлөмж практик, бодит байдаг.',
    rating: 5,
  },
  {
    name: 'Р. Энхжаргал',
    course: 'Англи хэл — Анхан шат',
    result: 'Анхан шатнаас Дунд шат',
    text: 'Цагаан толгойгоос эхэлж, гурван сарын дотор өдөр тутмын яриаг ойлгодог болсон. Enko-ийн цахим сургалт нь ажил, судалгааны хажуугаар ч хичээллэх боломж олгосон. Маш тохиромжтой.',
    rating: 5,
  },
  {
    name: 'С. Мөнхтөгс',
    course: 'Солонгос хэл — Анхан шат',
    result: 'Хангыл эзэмшсэн',
    text: 'Солонгос кино, хөгжим их сонирхдог байсан ч хэлийг нь огт мэддэггүй байлаа. Enko-д гурван сар хичээлсний дараа субтитргүй хялбар харилцааг ойлгож чаддаг болсон.',
    rating: 5,
  },
]

const stats = [
  { value: '500+', label: 'Нийт суралцагч' },
  { value: '95%', label: 'Сэтгэл ханамж' },
  { value: '4.9', label: 'Дундаж үнэлгээ' },
  { value: '200+', label: 'Шалгалт тэнцсэн' },
]

export default function Testimonials() {
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
            Суралцагчдын сэтгэгдэл
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl text-balance"
          >
            Амжилтын түүхүүд
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="text-slate-500 text-lg mt-5 max-w-xl leading-relaxed"
          >
            Enko-д суралцаж амжилтад хүрсэн суралцагчдын бодит туршлага.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={label}
                {...inView(i * 0.07)}
                className="py-8 px-6"
              >
                <p className="text-2xl font-bold text-slate-900 tracking-tight">{value}</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial grid ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-px bg-slate-100">
            {testimonials.map(({ name, course, result, text }, i) => (
              <motion.div
                key={name}
                {...inView(i * 0.05)}
                className="bg-white p-8 flex flex-col"
              >
                {/* Quote icon */}
                <div className="mb-5 text-slate-200">
                  <Quote size={28} strokeWidth={1.5} />
                </div>

                <p className="text-slate-700 text-base leading-relaxed mb-6 flex-grow">
                  "{text}"
                </p>

                <div className="border-t border-slate-100 pt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-900 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-semibold">{name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{course}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 border border-slate-200 px-2.5 py-1 flex-shrink-0">
                    {result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <motion.div {...inView()}>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Таны эргэлт
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight text-balance">
              Дараагийн амжилтын түүх таных байг
            </h2>
          </motion.div>
          <motion.div {...inView(0.08)} className="flex gap-4 flex-shrink-0">
            <a
              href="tel:99625232"
              className="px-7 py-3.5 bg-white text-slate-900 text-sm font-semibold hover:bg-slate-100 transition-colors"
            >
              99625232
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

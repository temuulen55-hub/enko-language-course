import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Calendar, ArrowRight, Check, Users } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

// ── Language courses ──────────────────────────────────────────────────────────
const languageCourses = [
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
        topics: ['Ахисан дүрэм', 'Бизнесийн англи', 'Илтгэл хэлэх', 'Нарийн бичгийн ур чадвар'],
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

// ── Exam prep courses ─────────────────────────────────────────────────────────
const examCourses = [
  {
    id: 'ielts',
    name: 'IELTS бэлтгэл',
    sub: 'International English Language Testing System',
    badge: 'Англи хэл',
    duration: '3 сар',
    sessions: 'Долоо хоногт 4 удаа',
    price: '₮180,000 / сар',
    desc: 'IELTS Academic болон General Training хоёуланг хамарсан бүтэн бэлтгэлийн хөтөлбөр. Listening, Reading, Writing, Speaking дөрвөн хэсгийг нарийн заана.',
    topics: [
      'Listening — стратеги & дасгал',
      'Reading — хурд & ойлголт',
      'Writing Task 1 & Task 2',
      'Speaking — бүх хэсгийн бэлтгэл',
      'Mock exam — бодит дасгал',
      'Зорилтот оноо тооцоолох',
    ],
    target: 'Зорилт: Band 6.0 – 8.0',
  },
  {
    id: 'topik',
    name: 'TOPIK бэлтгэл',
    sub: 'Test of Proficiency in Korean',
    badge: 'Солонгос хэл',
    duration: '3 сар',
    sessions: 'Долоо хоногт 3 удаа',
    price: '₮160,000 / сар',
    desc: 'TOPIK I (1–2-р түвшин) болон TOPIK II (3–6-р түвшин) шалгалтанд зориулсан мэргэшсэн бэлтгэлийн хөтөлбөр.',
    topics: [
      'Унших & дуулах хэсэг',
      'Бичих хэсэг (TOPIK II)',
      'Үгийн сан нэмэгдүүлэх',
      'Дүрмийн нарийн бэлтгэл',
      'Өнгөрсөн жилийн шалгалтаар дасгал',
      'Цаг зарцуулах стратеги',
    ],
    target: 'Зорилт: TOPIK I–II / TOPIK 3–6-р түвшин',
  },
  {
    id: 'eps',
    name: 'EPS-TOPIK бэлтгэл',
    sub: 'Employment Permit System — Korean',
    badge: 'Солонгос ажлын зөвшөөрөл',
    duration: '2 сар',
    sessions: 'Долоо хоногт 5 удаа',
    price: '₮140,000 / сар',
    desc: 'Солонгост ажиллахыг хүсэгчдэд зориулсан EPS-TOPIK шалгалтын бэлтгэлийн хурдасгасан хөтөлбөр. Мэргэжлийн ярианы хэллэг, ажлын байрны нэршил дээр анхаарна.',
    topics: [
      'EPS-TOPIK Listening бэлтгэл',
      'EPS-TOPIK Reading бэлтгэл',
      'Ажлын байрны үгийн сан',
      'Аюулгүй байдлын нэршил',
      'Бодит шалгалтын загвар',
      'Хурдасгасан дүрмийн хичээл',
    ],
    target: 'Зорилт: EPS-TOPIK тэнцэх оноо (80+)',
  },
]

// ── Clubs ─────────────────────────────────────────────────────────────────────
const clubs = [
  {
    id: 'speaking',
    name: 'Speaking Club',
    sub: 'Ярианы клуб',
    duration: 'Тасралтгүй (сар бүр)',
    sessions: 'Долоо хоногт 2 удаа',
    price: '₮60,000 / сар',
    groupSize: '6 – 10 гишүүн',
    desc: 'Өдөр тутмын ярианы айдсыг арилгаж, итгэлтэй ярьдаг болоход зориулсан практик клуб. Дебат, нөхцөл байдлын ярилцлага, тайлбар хийлгэх дасгалаар дамжуулан харилцааны ур чадварыг хөгжүүлнэ.',
    topics: [
      'Өдөр тутмын ярианы сэдвүүд',
      'Бодит нөхцөл байдлын дасгал',
      'Дебат & хэлэлцүүлэг',
      'Дуудлага засах хичээл',
      'Илтгэл хэлэх практик',
      'Алдааг шууд засах санал хүсэлт',
    ],
    langs: ['Англи хэл', 'Солонгос хэл'],
  },
  {
    id: 'writing',
    name: 'Writing Club',
    sub: 'Бичгийн клуб',
    duration: 'Тасралтгүй (сар бүр)',
    sessions: 'Долоо хоногт 2 удаа',
    price: '₮60,000 / сар',
    groupSize: '5 – 8 гишүүн',
    desc: 'Академик болон практик бичгийн ур чадварыг хамтдаа дээшлүүлдэг клуб. Эссе, захидал, тайлан бичихэд зориулсан бодит дасгал, бүлгийн шүүмж.',
    topics: [
      'Параграф & эссе бүтэц',
      'Академик бичгийн хэв маяг',
      'Захидал & мейл бичих',
      'Бүлгийн шүүмж & буцаан мэдэгдэл',
      'IELTS Writing Task 1 & 2 дасгал',
      'Редакторлах & дахин найруулах',
    ],
    langs: ['Англи хэл'],
  },
]

const highlights = [
  { label: 'Цахим сургалт', sub: 'Zoom & Google Meet' },
  { label: 'Танхимын сургалт', sub: 'Сан их сургууль 4-407' },
  { label: 'Жижиг бүлэг', sub: '5 – 8 суралцагч' },
  { label: 'Гэрчилгээ', sub: 'Дүүргэлтийн дараа олгоно' },
]

const tabs = [
  { id: 'language', label: 'Хэлний сургалт' },
  { id: 'exam', label: 'Шалгалтын бэлтгэл' },
  { id: 'clubs', label: 'Клубууд' },
]

// ── Sub-component: Level card ─────────────────────────────────────────────────
function LevelCard({ level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.07 }}
      className="bg-white p-8 flex flex-col"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">{level.range}</p>
      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-6">{level.name}</h3>

      <div className="space-y-2.5 mb-5">
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

      <div className="border-t border-slate-100 pt-6 mb-8 flex-grow">
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
          whileHover={{ opacity: 0.75 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer transition-opacity"
        >
          Бүртгүүлэх <ArrowRight size={13} />
        </motion.span>
      </Link>
    </motion.div>
  )
}

// ── Sub-component: Exam card ──────────────────────────────────────────────────
function ExamCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.08 }}
      className="bg-white p-8 flex flex-col"
    >
      <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400 border border-slate-200 px-2.5 py-1 self-start">
        {course.badge}
      </span>
      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">{course.name}</h3>
      <p className="text-xs text-slate-400 mb-4">{course.sub}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{course.desc}</p>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-center gap-2.5 text-sm text-slate-500">
          <Clock size={14} strokeWidth={1.5} className="flex-shrink-0" />
          {course.duration}
        </div>
        <div className="flex items-center gap-2.5 text-sm text-slate-500">
          <Calendar size={14} strokeWidth={1.5} className="flex-shrink-0" />
          {course.sessions}
        </div>
      </div>

      <p className="text-lg font-bold text-slate-900 mb-6">{course.price}</p>

      <div className="border-t border-slate-100 pt-6 mb-6 flex-grow">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Хөтөлбөр</p>
        <ul className="space-y-2.5">
          {course.topics.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Check size={13} className="flex-shrink-0 mt-0.5 text-slate-400" strokeWidth={2} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs font-semibold text-slate-500 mb-6">{course.target}</p>

      <Link to="/contact">
        <motion.span
          whileHover={{ opacity: 0.75 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer transition-opacity"
        >
          Бүртгүүлэх <ArrowRight size={13} />
        </motion.span>
      </Link>
    </motion.div>
  )
}

// ── Sub-component: Club card ──────────────────────────────────────────────────
function ClubCard({ club, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.08 }}
      className="bg-white p-8 flex flex-col"
    >
      <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-1">{club.name}</h3>
      <p className="text-xs text-slate-400 mb-4">{club.sub}</p>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">{club.desc}</p>

      <div className="space-y-2.5 mb-5">
        <div className="flex items-center gap-2.5 text-sm text-slate-500">
          <Calendar size={14} strokeWidth={1.5} className="flex-shrink-0" />
          {club.sessions}
        </div>
        <div className="flex items-center gap-2.5 text-sm text-slate-500">
          <Users size={14} strokeWidth={1.5} className="flex-shrink-0" />
          {club.groupSize}
        </div>
      </div>

      <p className="text-lg font-bold text-slate-900 mb-2">{club.price}</p>
      <p className="text-xs text-slate-400 mb-6">{club.duration}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {club.langs.map((l) => (
          <span key={l} className="px-2.5 py-1 border border-slate-200 text-xs font-medium text-slate-600">
            {l}
          </span>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-6 mb-8 flex-grow">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Хөтөлбөр</p>
        <ul className="space-y-2.5">
          {club.topics.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-slate-600">
              <Check size={13} className="flex-shrink-0 mt-0.5 text-slate-400" strokeWidth={2} />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <Link to="/contact">
        <motion.span
          whileHover={{ opacity: 0.75 }}
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 cursor-pointer transition-opacity"
        >
          Элсэх <ArrowRight size={13} />
        </motion.span>
      </Link>
    </motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Courses() {
  const [activeTab, setActiveTab] = useState('language')
  const [activeLang, setActiveLang] = useState('english')
  const activeCourse = languageCourses.find((c) => c.id === activeLang)

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
            Хэлний сургалтаас эхлээд шалгалтын бэлтгэл, практик клуб хүртэлх бүрэн хөтөлбөр.
          </motion.p>
        </div>
      </section>

      {/* ── Main tabs ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Primary tab bar */}
          <div className="flex gap-1 border-b border-slate-200 mb-14">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 text-sm font-medium transition-colors duration-150 ${
                  activeTab === tab.id ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="main-tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            >

              {/* ── LANGUAGE COURSES ── */}
              {activeTab === 'language' && (
                <div>
                  {/* Language sub-tabs */}
                  <div className="flex gap-6 mb-12">
                    {languageCourses.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setActiveLang(c.id)}
                        className={`text-sm font-medium pb-1 transition-colors ${
                          activeLang === c.id
                            ? 'text-slate-900 border-b border-slate-900'
                            : 'text-slate-400 hover:text-slate-700'
                        }`}
                      >
                        {c.lang}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeLang}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div className="mb-10">
                        <SectionTitle
                          tag={activeCourse.sub}
                          title={activeCourse.lang}
                          subtitle="Хөтөлбөр бүр нь жижиг бүлэгтэй, туршлагатай багштай явагдана."
                        />
                      </div>
                      <div className="grid md:grid-cols-3 gap-px bg-slate-100">
                        {activeCourse.levels.map((level, i) => (
                          <LevelCard key={level.name} level={level} index={i} />
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}

              {/* ── EXAM PREP ── */}
              {activeTab === 'exam' && (
                <div>
                  <div className="mb-10">
                    <SectionTitle
                      tag="Exam Preparation"
                      title="Шалгалтын бэлтгэлийн хөтөлбөрүүд"
                      subtitle="IELTS, TOPIK, EPS-TOPIK — олон улсын шалгалтад зориулсан мэргэшсэн бэлтгэл."
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-px bg-slate-100">
                    {examCourses.map((course, i) => (
                      <ExamCard key={course.id} course={course} index={i} />
                    ))}
                  </div>
                </div>
              )}

              {/* ── CLUBS ── */}
              {activeTab === 'clubs' && (
                <div>
                  <div className="mb-10">
                    <SectionTitle
                      tag="Language Clubs"
                      title="Практик хэлний клубууд"
                      subtitle="Мэдлэгийг бодит амьдрал дээр дадлагажуулах жижиг бүлгийн клубууд."
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-px bg-slate-100">
                    {clubs.map((club, i) => (
                      <ClubCard key={club.id} club={club} index={i} />
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Info strip ── */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            {highlights.map(({ label, sub }, i) => (
              <motion.div key={label} {...inView(i * 0.06)} className="bg-white p-7">
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

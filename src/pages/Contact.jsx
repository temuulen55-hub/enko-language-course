import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SectionTitle from '../components/SectionTitle'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.2, delay, ease: 'easeOut' },
})

const contactDetails = [
  {
    Icon: Phone,
    label: 'Утасны дугаар',
    lines: [{ text: '99625232', href: 'tel:99625232' }, { text: '80858311', href: 'tel:80858311' }],
  },
  {
    Icon: MapPin,
    label: 'Байршил',
    lines: [{ text: 'Модны 2, Сан их сургууль 4-407', href: null }],
  },
  {
    Icon: Clock,
    label: 'Ажлын цаг',
    lines: [
      { text: 'Даваа – Баасан: 09:00 – 20:00', href: null },
      { text: 'Бямба: 10:00 – 18:00', href: null },
    ],
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

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
            Холбоо барих
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 }}
            className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight max-w-xl text-balance"
          >
            Бидэнтэй холбогдох
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.08 }}
            className="text-slate-500 text-lg mt-5 max-w-lg leading-relaxed"
          >
            Бүртгүүлэх, мэдээлэл авах, асуулт тавихыг хүсвэл бидэнд хандаарай.
          </motion.p>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">

          {/* Contact info */}
          <div>
            <SectionTitle
              tag="Мэдээлэл"
              title="Холбоо барих мэдээлэл"
            />

            <div className="mt-10 space-y-0 border-t border-slate-100">
              {contactDetails.map(({ Icon, label, lines }, i) => (
                <motion.div
                  key={label}
                  {...inView(i * 0.08)}
                  className="flex items-start gap-5 py-7 border-b border-slate-100"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-slate-50 flex-shrink-0">
                    <Icon size={16} strokeWidth={1.5} className="text-slate-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">{label}</p>
                    <div className="space-y-1">
                      {lines.map(({ text, href }) =>
                        href ? (
                          <a
                            key={text}
                            href={href}
                            className="block text-slate-900 text-sm font-medium hover:text-slate-500 transition-colors"
                          >
                            {text}
                          </a>
                        ) : (
                          <p key={text} className="text-slate-600 text-sm">{text}</p>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick dial */}
            <motion.div {...inView(0.24)} className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:99625232"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-medium hover:bg-slate-700 transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} /> 99625232
              </a>
              <a
                href="tel:80858311"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-400 hover:text-slate-900 transition-colors"
              >
                <Phone size={14} strokeWidth={1.5} /> 80858311
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.22, delay: 0.1 }}
            className="border border-slate-100 p-10"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="py-16 text-center"
              >
                <div className="w-10 h-10 bg-slate-900 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Мессеж илгээгдлээ</h3>
                <p className="text-slate-500 text-sm mb-8">Бид тантай удахгүй холбогдох болно.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', course: '', message: '' }) }}
                  className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:opacity-60 transition-opacity"
                >
                  Дахин илгээх
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Мессеж илгээх</h2>
                <p className="text-slate-400 text-sm mb-8">24 цагийн дотор хариулна.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                        Нэр *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Таны нэр"
                        className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                        Утас *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="99XXXXXX"
                        className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                      Сургалт
                    </label>
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-600 focus:outline-none focus:border-slate-900 transition-colors bg-white appearance-none"
                    >
                      <option value="">Сургалт сонгох...</option>
                      <option value="english-basic">Англи хэл — Анхан шат</option>
                      <option value="english-mid">Англи хэл — Дунд шат</option>
                      <option value="english-adv">Англи хэл — Ахисан шат</option>
                      <option value="korean-basic">Солонгос хэл — Анхан шат</option>
                      <option value="korean-mid">Солонгос хэл — Дунд шат</option>
                      <option value="korean-adv">Солонгос хэл — Ахисан шат</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                      Мессеж
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Асуулт, санал хүсэлт..."
                      className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ opacity: 0.85 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full py-3.5 bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Илгээх
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}

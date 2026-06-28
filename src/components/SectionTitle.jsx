import { motion } from 'framer-motion'

export default function SectionTitle({ tag, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={center ? 'text-center' : ''}
    >
      {tag && (
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">{tag}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-4 text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 text-base leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  )
}

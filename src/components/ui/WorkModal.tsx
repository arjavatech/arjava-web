import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

export interface WorkItem {
  id: string
  image: string
  alt: string
  title?: string
  description?: React.ReactNode
}

interface WorkModalProps {
  item: WorkItem
}

export default function WorkModal({ item }: WorkModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <motion.button
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="group relative overflow-hidden rounded-2xl cursor-pointer border border-dark-line w-full text-left"
        >
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {item.title && (
                <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
              )}
              <span className="inline-flex items-center gap-1 text-teal-400 text-xs font-medium">
                <ExternalLink size={12} /> View Details
              </span>
            </div>
          </div>
        </motion.button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
              />
            </Dialog.Overlay>

            <Dialog.Content
              forceMount
              className="fixed inset-0 z-[101] flex items-center justify-center p-4 outline-none"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <motion.div
                key="panel"
                initial={{ opacity: 0, scale: 0.93 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.93 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-dark-surface border border-dark-line rounded-2xl shadow-2xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-dark-line sticky top-0 bg-dark-surface z-10">
                  <Dialog.Title className={item.title ? 'text-white font-semibold text-lg gradient-text' : 'sr-only'}>
                    {item.title || item.alt}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="ml-auto text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10">
                      <X size={20} />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto rounded-xl border border-dark-line"
                  />
                  {item.description && (
                    <div className="text-slate-300 text-sm leading-relaxed space-y-1">
                      {item.description}
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}

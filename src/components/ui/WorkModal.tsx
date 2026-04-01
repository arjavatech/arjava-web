import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

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
        <div className="card overflow-hidden rounded-lg cursor-pointer group">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 animate-fade-in" />
        <Dialog.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-0">
          {/* Header */}
          <div className="flex justify-end p-3 border-b">
            <Dialog.Close asChild>
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </Dialog.Close>
          </div>

          {/* Body */}
          <div className="p-6">
            <img src={item.image} alt={item.alt} className="w-full h-auto rounded mb-4" />
            {item.title && (
              <h4 className="text-lg font-semibold text-brand mb-3">{item.title}:</h4>
            )}
            {item.description && (
              <div className="text-[#4B4B4B] text-sm leading-relaxed">{item.description}</div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

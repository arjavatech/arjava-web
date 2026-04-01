interface PageCoverProps {
  title: string
}

export default function PageCover({ title }: PageCoverProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src="/image/AJ cover.jpg"
        alt="page cover"
        className="w-full object-cover"
        style={{ height: '202px' }}
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl font-bold text-white drop-shadow-md">
        {title}
      </h1>
    </div>
  )
}

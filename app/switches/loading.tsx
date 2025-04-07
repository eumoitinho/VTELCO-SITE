export default function Loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#1a0b2e]">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-[#9333ea]"></div>
        <p className="mt-4 text-white">Carregando...</p>
      </div>
    </div>
  )
}


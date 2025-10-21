export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-[9999]">
      <div className="animate-spin h-10 w-10 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
      <p className="text-primary font-medium">Please wait...</p>
    </div>
  )
}

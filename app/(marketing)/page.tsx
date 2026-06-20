import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 font-sans p-4 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6">
        Ready Nest <span className="text-teal-400">Form Builder</span>
      </h1>
      <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
        A full-stack web application that allows users to create, customize, and share dynamic forms in real-time.
      </p>
      
      <Link 
        href="/forms" 
        className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-lg transition shadow-lg shadow-teal-500/20"
      >
        Open Form Builder →
      </Link>
    </div>
  )
}
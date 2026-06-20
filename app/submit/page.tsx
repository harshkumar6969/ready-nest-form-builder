"use client"

import React, { useEffect, useState } from "react"

export default function SubmitPage() {
  const [form, setForm] = useState<any>(null)

  useEffect(() => {
    const saved = localStorage.getItem("saved_form")
    if (saved) {
      setForm(JSON.parse(saved))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Capture all the answers from the form
    const formData = new FormData(e.currentTarget)
    const answers: Record<string, string> = {}
    
    form.fields.forEach((field: any) => {
      answers[field.label] = formData.get(field.id) as string
    })

    // Save the submission with the answers
    const existingResponses = JSON.parse(localStorage.getItem("form_responses") || "[]")
    existingResponses.push({ 
      submittedAt: new Date().toLocaleString(),
      answers: answers
    })
    localStorage.setItem("form_responses", JSON.stringify(existingResponses))
    
    alert("Response Submitted Successfully!")
    window.location.reload()
  }

  if (!form) return <div className="p-10 text-center text-white bg-slate-950 min-h-screen">No form published yet!</div>

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center py-12 px-4 font-sans">
      <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 w-full max-w-2xl shadow-2xl h-fit">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-slate-800 pb-4">{form.title}</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {form.fields.map((field: any) => (
            <div key={field.id}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">{field.label}</label>
              <input
                name={field.id} /* THIS LINE IS NEW - IT LINKS THE INPUT TO THE FIELD ID */
                type={field.type === "Email" ? "email" : "text"}
                placeholder={field.placeholder}
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-slate-100 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 transition"
              />
            </div>
          ))}
          <button type="submit" className="mt-4 bg-teal-500 hover:bg-teal-400 text-slate-950 px-6 py-3 rounded-lg font-bold text-lg transition w-full">
            Submit Answers
          </button>
        </form>
      </div>
    </div>
  )
}
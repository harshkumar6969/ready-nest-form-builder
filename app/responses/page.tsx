"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function ResponsesPage() {
  const [responses, setResponses] = useState<any[]>([])
  const [form, setForm] = useState<any>(null)

  useEffect(() => {
    setResponses(JSON.parse(localStorage.getItem("form_responses") || "[]"))
    setForm(JSON.parse(localStorage.getItem("saved_form") || "null"))
  }, [])

  if (!form) {
    return <div className="p-10 text-center text-white bg-slate-950 min-h-screen">No form data found. Publish a form first!</div>
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold text-white">Responses Dashboard</h1>
            <p className="text-slate-400 mt-1">Viewing data for: <span className="text-teal-400 font-semibold">{form.title}</span></p>
          </div>
          <Link href="/forms" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-4 py-2 rounded-lg text-sm font-medium transition">
            Back to Builder
          </Link>
        </div>

        {responses.length === 0 ? (
          <div className="text-center py-20 border border-slate-800 rounded-xl bg-slate-900/50">
            <p className="text-slate-400 text-lg">No responses collected yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-xl shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800/50 text-slate-300">
                <tr>
                  <th className="p-4 font-semibold border-b border-slate-800">Date Submitted</th>
                  {form.fields.map((field: any) => (
                    <th key={field.id} className="p-4 font-semibold border-b border-slate-800">{field.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {responses.map((res, index) => (
                  <tr key={index} className="hover:bg-slate-800/30 transition">
                    <td className="p-4 text-slate-400">{res.submittedAt}</td>
                    {form.fields.map((field: any) => (
                      <td key={field.id} className="p-4">{res.answers?.[field.label] || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
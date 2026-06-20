"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"

interface FormField {
  id: string
  type: string
  label: string
  placeholder: string
}

export default function FormBuilderClient() {
  const [formTitle, setFormTitle] = useState("Customer Feedback Form")
  const [fields, setFields] = useState<FormField[]>([
    { id: "1", type: "Text Input", label: "Full Name", placeholder: "Enter your name" },
    { id: "2", type: "Email", label: "Email Address", placeholder: "Enter your email" },
  ])
  const [submissionsCount, setSubmissionsCount] = useState(0)

  useEffect(() => {
    const savedResponses = JSON.parse(localStorage.getItem("form_responses") || "[]")
    setSubmissionsCount(savedResponses.length)
  }, [])

  const addField = (type: string) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type: type,
      label: `${type} Label`,
      placeholder: `Enter ${type.toLowerCase()}...`,
    }
    setFields([...fields, newField])
  }

  const deleteField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id))
  }

  const publishForm = () => {
    const formData = { title: formTitle, fields: fields }
    localStorage.setItem("saved_form", JSON.stringify(formData))
    alert("✅ Form Published Successfully! You can now share it.")
    window.open("/submit", "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 font-sans">
      <div className="flex justify-between items-center bg-slate-800 p-4 rounded-xl border border-slate-700 mb-6">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold text-teal-400 tracking-wider">READY NEST</span>
          
          <Link 
            href="/" 
            className="text-sm font-medium text-slate-300 hover:text-white bg-slate-700/50 hover:bg-slate-700 px-4 py-1.5 rounded-md transition border border-slate-600"
          >
            ← Home
          </Link>
        </div>
        <div className="bg-slate-700 px-4 py-1.5 rounded text-sm font-semibold text-teal-400 border border-teal-500/30">
          FULL STACK DEVELOPMENT — WEEK 1
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 h-fit">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Add Fields</h3>
          <div className="flex flex-col gap-2">
            {["Text Input", "Email", "Number", "Dropdown", "Checkbox", "Radio Button", "Date", "Text Area"].map((type) => (
              <button
                key={type}
                onClick={() => addField(type)}
                className="w-full text-left bg-slate-700/50 hover:bg-teal-500 hover:text-slate-900 p-3 rounded-lg text-sm font-medium transition border border-slate-700/60 flex justify-between items-center group"
              >
                <span>{type}</span>
                <span className="text-slate-500 group-hover:text-slate-900 text-lg">+</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 min-h-[500px] flex flex-col justify-between">
          <div>
            <input
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="bg-transparent text-2xl font-bold border-b border-transparent hover:border-slate-600 focus:border-teal-500 focus:outline-none w-full pb-2 mb-6 text-white"
            />
            {fields.length === 0 ? (
              <div className="text-center py-12 text-slate-500 border-2 border-dashed border-slate-700 rounded-xl">
                Click fields on the left to start building your form.
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                {fields.map((field) => (
                  <div key={field.id} className="bg-slate-900/60 p-4 rounded-lg border border-slate-700/40 relative group">
                    <button onClick={() => deleteField(field.id)} className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 text-xs opacity-0 group-hover:opacity-100 transition">
                      Delete
                    </button>
                    <label className="block text-sm font-semibold text-slate-300 mb-1.5">{field.label}</label>
                    <input type="text" placeholder={field.placeholder} disabled className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-400 cursor-not-allowed" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-700/60">
            <button onClick={publishForm} className="bg-teal-500 hover:bg-teal-400 text-slate-950 px-5 py-2 rounded-lg text-sm font-bold transition">
              Publish Form
            </button>
          </div>
        </div>

        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 h-fit flex flex-col items-center justify-center text-center py-8">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Form Responses</h3>
          <div className="relative w-32 h-32 flex items-center justify-center my-4">
            <div className="absolute inset-0 border-8 border-slate-700 rounded-full"></div>
            <div className="absolute inset-0 border-8 border-teal-400 rounded-full border-t-transparent"></div>
            <div className="flex flex-col items-center z-10">
              <span className="text-3xl font-extrabold text-white">{submissionsCount}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 max-w-[180px]">Total real-time form submissions collected</p>
          
          <button 
            onClick={() => window.open("/responses", "_blank")}
            className="mt-6 w-full bg-slate-700 hover:bg-slate-600 p-2.5 rounded-lg text-sm transition font-bold text-white border border-slate-600"
          >
            View Response Data
          </button>
        </div>
      </div>
    </div>
  )
}
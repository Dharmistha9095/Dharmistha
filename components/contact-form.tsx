"use client"

import type React from "react"

import { useState, useRef } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Send } from "lucide-react"
import { toast } from "react-toastify"

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!form.current) return;

  emailjs
    .sendForm(
      "service_nzsjhkz",       // Your EmailJS service ID
      "template_dajgv4g",      // Your EmailJS template ID
      form.current,
      "7jMSReY0I9a23lCLH"       // Your EmailJS public key
    )
    .then(
      (result:any) => {
        console.log("Email sent:", result.text);
        toast.success("Message sent successfully!");
        form.current?.reset(); // Optional: reset form after successful send
      },
      (error:any) => {
        console.error("Email failed:", error.text);
        toast.error("Failed to send message. Try again.");
      }
    );
};

  return (
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 text-white">
      <CardHeader>
        <CardTitle className="text-xl">Send me a message</CardTitle>
        <CardDescription className="text-gray-400">I'll get back to you within 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="first_name"
              placeholder="First Name"
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
            />
            <Input
              name="last_name"
              placeholder="Last Name"
              required
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />
          {/* <Input
            name="project_type"
            placeholder="Project Type (e.g., React App, Landing Page)"
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          /> */}
          <Textarea
            name="message"
            placeholder="Tell me about your project..."
            rows={5}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          {/* Status Messages */}
          {status === "success" && (
            <div className="flex items-center space-x-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <p className="text-green-300 text-sm">{message}</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <p className="text-red-300 text-sm">{message}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}

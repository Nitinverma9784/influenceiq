"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, MessageSquare, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState)
    setIsSubmitted(true)
    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have questions about InfluenceIQ? We're here to help. Reach out to our team for support, feedback, or
              partnership inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={6}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">
                  Send Message
                </Button>

                {isSubmitted && (
                  <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 rounded-md">
                    <CheckCircle className="h-5 w-5" />
                    <span>Your message has been sent successfully!</span>
                  </div>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  You can also reach out to us directly using the contact information below.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-2">Our friendly team is here to help.</p>
                      <a href="mailto:info@influenceiq.com" className="text-blue-600 hover:underline">
                        info@influenceiq.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-muted-foreground mb-2">Come say hello at our office.</p>
                      <p className="text-blue-600 hover:underline">123 Innovation Street, Tech City, CA 94103</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 5pm.</p>
                      <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="bg-blue-100 rounded-full p-3">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Live Chat</h3>
                      <p className="text-muted-foreground mb-2">Our support team is available 24/7.</p>
                      <Button className="bg-blue-500 hover:bg-blue-600">Start Chat</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200"
              alt="Office Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="font-medium">InfluenceIQ Headquarters</p>
                <p className="text-sm text-muted-foreground">123 Innovation Street, Tech City, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


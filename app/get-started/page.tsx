"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function GetStartedPage() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the email submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Get Started</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Start Your Influence Journey Today</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of brands, agencies, and influencers who are already using InfluenceIQ to measure and
              understand true influence.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
              <Button type="submit" className="h-12 bg-blue-500 hover:bg-blue-600">
                Get Started
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Right Plan for You</h2>
            <p className="text-muted-foreground">
              We offer flexible pricing options to meet your needs, whether you're an individual influencer or a large
              agency.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="w-full max-w-3xl mx-auto mb-12">
            <TabsList className="grid w-[400px] grid-cols-2 mx-auto">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="yearly">Yearly Billing (Save 20%)</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-200">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Basic</h3>
                      <div className="text-3xl font-bold">
                        $29<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For individuals and small teams</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Access to basic influence rankings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Search & discovery features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Up to 50 profile views per month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Basic analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Email support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#">Choose Basic</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-blue-500 relative">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Pro</h3>
                      <div className="text-3xl font-bold">
                        $79<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For growing businesses</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>All Basic features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Advanced influence analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Unlimited profile views</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Comparison tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Priority email & chat support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>API access</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                      <Link href="#">Choose Pro</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Enterprise</h3>
                      <div className="text-3xl font-bold">
                        $199<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">For large organizations</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>All Pro features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Custom influence scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Advanced AI insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Custom reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>SSO & advanced security</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#">Choose Enterprise</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="yearly" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 border-gray-200">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Basic</h3>
                      <div className="text-3xl font-bold">
                        $23<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Billed annually ($276/year)</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Access to basic influence rankings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Search & discovery features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Up to 50 profile views per month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Basic analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Email support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#">Choose Basic</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-blue-500 relative">
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Pro</h3>
                      <div className="text-3xl font-bold">
                        $63<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Billed annually ($756/year)</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>All Basic features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Advanced influence analytics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Unlimited profile views</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Comparison tools</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Priority email & chat support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>API access</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                      <Link href="#">Choose Pro</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-gray-200">
                  <CardContent className="pt-6">
                    <div className="text-center mb-6">
                      <h3 className="text-lg font-bold mb-2">Enterprise</h3>
                      <div className="text-3xl font-bold">
                        $159<span className="text-base font-normal text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Billed annually ($1,908/year)</p>
                    </div>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>All Pro features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Custom influence scoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Advanced AI insights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>Custom reporting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span>SSO & advanced security</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="#">Choose Enterprise</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-muted-foreground mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <Link href="#" className="text-blue-600 hover:underline">
              View full plan comparison
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">How It Works</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started is Easy</h2>
            <p className="text-muted-foreground">
              Follow these simple steps to start using InfluenceIQ and discover the power of true influence measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Create an Account</h3>
              <p className="text-muted-foreground">
                Sign up for InfluenceIQ and choose the plan that best fits your needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Explore Influencers</h3>
              <p className="text-muted-foreground">
                Search and discover influencers across various industries and platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Analyze & Decide</h3>
              <p className="text-muted-foreground">
                Use our powerful analytics tools to make data-driven decisions about influencer partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about InfluenceIQ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">What is InfluenceIQ?</h3>
              <p className="text-muted-foreground">
                InfluenceIQ is a comprehensive platform for measuring and analyzing influence across various industries
                and platforms. We provide real-time influence scores, analytics, and insights to help brands, agencies,
                and influencers make data-driven decisions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">How is the Influence Score calculated?</h3>
              <p className="text-muted-foreground">
                Our Influence Score (0-100) is calculated using multiple factors, including credibility, engagement,
                fame longevity, and community trust. We use AI and data analysis to ensure accuracy and prevent
                manipulation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I try InfluenceIQ before subscribing?</h3>
              <p className="text-muted-foreground">
                Yes, all our plans include a 14-day free trial. No credit card is required to start your trial, and you
                can cancel at any time.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Which social media platforms do you analyze?</h3>
              <p className="text-muted-foreground">
                We analyze data from all major social media platforms, including Instagram, Twitter (X), YouTube,
                TikTok, LinkedIn, and more. Our platform provides a comprehensive view of influence across multiple
                channels.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Can I export data from InfluenceIQ?</h3>
              <p className="text-muted-foreground">
                Yes, our Pro and Enterprise plans allow you to export data in various formats, including CSV, PDF, and
                more. You can also access our API to integrate InfluenceIQ data into your own systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer custom solutions for large organizations?</h3>
              <p className="text-muted-foreground">
                Yes, our Enterprise plan includes custom solutions tailored to your organization's specific needs.
                Contact our sales team to learn more about our custom offerings.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help.</p>
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover True Influence?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join InfluenceIQ today and get access to real-time influence rankings, analytics, and insights.
            </p>
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="#">Start Your Free Trial</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>
    </div>
  )
}


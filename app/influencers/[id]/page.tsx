"use client"

import React, { use } from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Award,
  CheckCircle,
  Clock,
  ExternalLink,
  Facebook,
  Globe,
  Heart,
  Instagram,
  LineChart,
  MessageCircle,
  Shield,
  Star,
  ThumbsUp,
  TrendingUp,
  Twitter,
  Youtube,
} from "lucide-react"
import influencers from "@/data/influencers"
import {
  calculateCredibilityScore,
  calculateLongevityScore,
  calculateEngagementScore,
  calculateInfluenceIQScore,
} from "@/utils/score-calculator"

export default function InfluencerProfilePage({ params }: { params: Promise<{ id: string }> }) {

  const [activeTab, setActiveTab] = useState("overview")
  const [showScoreAnimation, setShowScoreAnimation] = useState(false)
  const [animationStep, setAnimationStep] = useState(0)
  const [credibilityProgress, setCredibilityProgress] = useState(0)
  const [longevityProgress, setLongevityProgress] = useState(0)
  const [engagementProgress, setEngagementProgress] = useState(0)
  const [overallProgress, setOverallProgress] = useState(0)

  // Add a loading state to simulate data fetching
  // Add this near the top of the component after the useState declarations

  const [isLoading, setIsLoading] = useState(true)

  // Add useEffect to simulate data loading
  React.useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Update the influencer finding logic with better error handling
  // Find the influencer by ID with fallback
  
  const influencerId = Number.parseInt(use(params).id, 10)

  const influencer = influencers.find((inf) => inf.id === influencerId)

  // Handle case where influencer is not found
  if (!influencer) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Influencer Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The influencer you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/influencers">Back to Influencers</Link>
        </Button>
      </div>
    )
  }

  // Calculate scores
  const credibilityScore = calculateCredibilityScore(influencer)
  const longevityScore = calculateLongevityScore(influencer)
  const engagementScore = calculateEngagementScore(influencer)
  const overallScore = calculateInfluenceIQScore(influencer)

  // Fix the animation to be more visually appealing and add proper delay
  // Update the startScoreAnimation function

  // Replace the startScoreAnimation function with this improved version
  const startScoreAnimation = () => {
    if (showScoreAnimation) return

    setShowScoreAnimation(true)
    setAnimationStep(0)
    setCredibilityProgress(0)
    setLongevityProgress(0)
    setEngagementProgress(0)
    setOverallProgress(0)

    // Animation sequence with better timing and smoother progression
    setTimeout(() => {
      setAnimationStep(1)
      const credInterval = setInterval(() => {
        setCredibilityProgress((prev) => {
          if (prev >= credibilityScore - 1) {
            clearInterval(credInterval)
            return credibilityScore
          }
          return prev + Math.max(1, Math.floor(credibilityScore / 50))
        })
      }, 30)
    }, 800)

    setTimeout(() => {
      setAnimationStep(2)
      const longInterval = setInterval(() => {
        setLongevityProgress((prev) => {
          if (prev >= longevityScore - 1) {
            clearInterval(longInterval)
            return longevityScore
          }
          return prev + Math.max(1, Math.floor(longevityScore / 50))
        })
      }, 30)
    }, 2500)

    setTimeout(() => {
      setAnimationStep(3)
      const engInterval = setInterval(() => {
        setEngagementProgress((prev) => {
          if (prev >= engagementScore - 1) {
            clearInterval(engInterval)
            return engagementScore
          }
          return prev + Math.max(1, Math.floor(engagementScore / 50))
        })
      }, 30)
    }, 4000)

    setTimeout(() => {
      setAnimationStep(4)
      const overallInterval = setInterval(() => {
        setOverallProgress((prev) => {
          if (prev >= overallScore - 1) {
            clearInterval(overallInterval)
            return overallScore
          }
          return prev + Math.max(1, Math.floor(overallScore / 50))
        })
      }, 30)
    }, 5500)

    // Reset animation after completion with a longer display time
    setTimeout(() => {
      setShowScoreAnimation(false)
    }, 8000)
  }

  // Format large numbers with commas
  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  // Format social media handle
  const formatHandle = (handle: string): string => {
    return handle.startsWith("@") ? handle : `@${handle}`
  }

  return (
    <div>
      {/* Add loading indicator before the main content */}
      {/* Add this right after the return statement, before the main content */}
      {isLoading && (
        <div className="fixed inset-0 bg-white/80 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full border-4 border-blue-200 border-t-blue-500 animate-spin"></div>
            <p className="mt-4 text-blue-600 font-medium">Loading influencer data...</p>
          </div>
        </div>
      )}
      {/* Update the Score Animation Overlay with improved styling */}
      {/* Replace the Score Animation Overlay section with this improved version */}
      {showScoreAnimation && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-6">Calculating InfluenceIQ Score</h2>

            <div className="space-y-8">
              <div
                className={`transition-all duration-500 ${animationStep >= 1 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Credibility & Trustworthiness</span>
                  </div>
                  <span className="font-bold">{credibilityProgress}/100</span>
                </div>
                <Progress value={credibilityProgress} className="h-3 bg-blue-100" />
              </div>

              <div
                className={`transition-all duration-500 ${animationStep >= 2 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Fame Longevity</span>
                  </div>
                  <span className="font-bold">{longevityProgress}/100</span>
                </div>
                <Progress value={longevityProgress} className="h-3 bg-blue-100" />
              </div>

              <div
                className={`transition-all duration-500 ${animationStep >= 3 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}
              >
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Meaningful Engagement</span>
                  </div>
                  <span className="font-bold">{engagementProgress}/100</span>
                </div>
                <Progress value={engagementProgress} className="h-3 bg-blue-100" />
              </div>

              <div
                className={`transition-all duration-500 ${animationStep >= 4 ? "opacity-100 translate-y-0" : "opacity-30 translate-y-2"}`}
              >
                <div className="h-px bg-gray-200 my-4"></div>
                <div className="flex justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">Overall InfluenceIQ Score</span>
                  </div>
                  <span className="font-bold text-xl">{overallProgress}/100</span>
                </div>
                <Progress
                  value={overallProgress}
                  className="h-4 bg-gray-100"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)",
                  }}
                />
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">Analyzing data from multiple sources...</div>
          </div>
        </div>
      )}

      {/* Cover Image */}
      <div className="relative h-64 md:h-80 w-full">
        <Image
          src={influencer.coverImage || "/placeholder.svg"}
          alt={`${influencer.name} cover`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
      </div>

      {/* Profile Header */}
      <div className="container relative -mt-24 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 -mt-16 md:-mt-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={influencer.profileImage || "/placeholder.svg"}
                alt={influencer.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{influencer.name}</h1>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {influencer.category.map((cat, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                        {cat}
                      </Badge>
                    ))}
                    {influencer.socialStats.some((stat) => stat.verified) && (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                </div>

                <div
                  className="flex flex-col items-center bg-blue-50 rounded-lg p-4 shadow-sm cursor-pointer"
                  onClick={startScoreAnimation}
                >
                  <div className="text-sm font-medium text-blue-700">InfluenceIQ Score</div>
                  <div className="text-4xl font-bold text-blue-700">{overallScore}</div>
                  <div className="text-xs text-blue-600">Click to see calculation</div>
                </div>
              </div>

              <p className="mt-4 text-muted-foreground">{influencer.bio}</p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  {influencer.location}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  Joined{" "}
                  {new Date(influencer.joinedDate).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {influencer.socialStats.map((social, index) => (
                  <Button key={index} asChild size="sm" variant="outline" className="rounded-full">
                    <Link href={social.url} target="_blank">
                      {social.platform === "Instagram" && <Instagram className="h-4 w-4 mr-2" />}
                      {social.platform === "YouTube" && <Youtube className="h-4 w-4 mr-2" />}
                      {social.platform === "Twitter" && <Twitter className="h-4 w-4 mr-2" />}
                      {social.platform === "Facebook" && <Facebook className="h-4 w-4 mr-2" />}
                      {formatHandle(social.handle)}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container pb-16">
        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start mb-8 overflow-x-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metrics">Influence Metrics</TabsTrigger>
            <TabsTrigger value="content">Recent Content</TabsTrigger>
            <TabsTrigger value="audience">Audience</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Influence Breakdown</h2>

                <div className="grid gap-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-blue-600" />
                          <h3 className="font-semibold">Credibility & Trustworthiness</h3>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">{credibilityScore}/100</Badge>
                      </div>
                      <Progress value={credibilityScore} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Based on fact-checking, source credibility, and audience trust. {influencer.name} has{" "}
                        {influencer.factCheckedContent}% fact-checked content.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-600" />
                          <h3 className="font-semibold">Fame Longevity</h3>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">{longevityScore}/100</Badge>
                      </div>
                      <Progress value={longevityScore} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Measures consistent relevance over time versus short-term viral fame. {influencer.name} shows{" "}
                        {influencer.growthRate}% growth rate.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Heart className="h-5 w-5 text-blue-600" />
                          <h3 className="font-semibold">Meaningful Engagement</h3>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700">{engagementScore}/100</Badge>
                      </div>
                      <Progress value={engagementScore} className="h-2 mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Evaluates quality of audience interaction beyond simple metrics. {influencer.name} has{" "}
                        {influencer.audienceAuthenticity}% audience authenticity.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-6">Recent Content</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {influencer.recentPosts.slice(0, 2).map((post) => (
                    <Card key={post.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={post.imageUrl || "/placeholder.svg"}
                          alt={post.content}
                          fill
                          className="object-cover"
                        />
                        <Badge className="absolute top-3 left-3 bg-black/70 text-white hover:bg-black/70">
                          {post.platform}
                        </Badge>
                      </div>
                      <CardContent className="pt-4">
                        <h3 className="font-semibold mb-2">{post.content}</h3>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {post.engagement.likes && formatNumber(post.engagement.likes)} likes
                          </div>
                          <div>{new Date(post.date).toLocaleDateString()}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="link" onClick={() => setActiveTab("content")}>
                    View all content
                  </Button>
                </div>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Trust Factors</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Verified Identity</p>
                          <p className="text-sm text-muted-foreground">
                            {influencer.socialStats.filter((s) => s.verified).length} verified accounts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Shield className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Fact-Checked Content</p>
                          <p className="text-sm text-muted-foreground">
                            {influencer.factCheckedContent}% accuracy rating
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Users className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Authentic Audience</p>
                          <p className="text-sm text-muted-foreground">
                            {influencer.audienceAuthenticity}% real followers
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Award className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Industry Recognition</p>
                          <p className="text-sm text-muted-foreground">
                            {influencer.achievements.length} notable achievements
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {influencer.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{achievement.title}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Reviews & Mentions</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-4">
                      {influencer.reviews.map((review, index) => (
                        <li key={index} className="border-b pb-3 last:border-0 last:pb-0">
                          <div className="flex justify-between mb-1">
                            <p className="font-medium">{review.source}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground italic">"{review.content}"</p>
                          <div className="flex items-center mt-1">
                            {review.sentiment === "positive" && (
                              <Badge className="bg-green-100 text-green-700">Positive</Badge>
                            )}
                            {review.sentiment === "neutral" && (
                              <Badge className="bg-gray-100 text-gray-700">Neutral</Badge>
                            )}
                            {review.sentiment === "negative" && (
                              <Badge className="bg-red-100 text-red-700">Negative</Badge>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metrics" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Detailed Influence Metrics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Credibility & Trustworthiness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-700">{credibilityScore}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Fact-Checked Content</div>
                        <div className="text-sm font-medium">{influencer.factCheckedContent}%</div>
                      </div>
                      <Progress value={influencer.factCheckedContent} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Source Credibility</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            influencer.reviews.reduce(
                              (acc, review) =>
                                acc +
                                (review.rating
                                  ? review.rating * 20
                                  : review.sentiment === "positive"
                                    ? 80
                                    : review.sentiment === "neutral"
                                      ? 50
                                      : 20),
                              0,
                            ) / (influencer.reviews.length || 1),
                          )}
                          %
                        </div>
                      </div>
                      <Progress
                        value={Math.round(
                          influencer.reviews.reduce(
                            (acc, review) =>
                              acc +
                              (review.rating
                                ? review.rating * 20
                                : review.sentiment === "positive"
                                  ? 80
                                  : review.sentiment === "neutral"
                                    ? 50
                                    : 20),
                            0,
                          ) / (influencer.reviews.length || 1),
                        )}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Controversies</div>
                        <div className="text-sm font-medium">{influencer.controversies.length}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={
                            influencer.controversies.length === 0
                              ? 100
                              : Math.max(0, 100 - influencer.controversies.length * 20)
                          }
                          className="h-2"
                        />
                        <Badge
                          className={`${
                            influencer.controversies.length === 0
                              ? "bg-green-100 text-green-700"
                              : influencer.controversies.length <= 2
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }`}
                        >
                          {influencer.controversies.length === 0
                            ? "Low"
                            : influencer.controversies.length <= 2
                              ? "Medium"
                              : "High"}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Verification Status</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            (influencer.socialStats.filter((s) => s.verified).length / influencer.socialStats.length) *
                              100,
                          )}
                          %
                        </div>
                      </div>
                      <Progress
                        value={Math.round(
                          (influencer.socialStats.filter((s) => s.verified).length / influencer.socialStats.length) *
                            100,
                        )}
                        className="h-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    Fame Longevity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-700">{longevityScore}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Account Age</div>
                        <div className="text-sm font-medium">{influencer.accountAge} months</div>
                      </div>
                      <Progress value={Math.min(100, (influencer.accountAge / 60) * 100)} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Content Consistency</div>
                        <div className="text-sm font-medium">{influencer.contentConsistency}%</div>
                      </div>
                      <Progress value={influencer.contentConsistency} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Growth Rate</div>
                        <div className="text-sm font-medium">{influencer.growthRate}%</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={
                            influencer.growthRate <= 15
                              ? Math.min(100, 60 + influencer.growthRate * 2.5)
                              : Math.max(0, 100 - (influencer.growthRate - 15) * 3)
                          }
                          className="h-2"
                        />
                        <Badge
                          className={`${
                            influencer.growthRate >= 5 && influencer.growthRate <= 15
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {influencer.growthRate < 5 ? "Slow" : influencer.growthRate <= 15 ? "Optimal" : "Rapid"}
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Achievement Timeline</div>
                        <div className="text-sm font-medium">{influencer.achievements.length} achievements</div>
                      </div>
                      <Progress value={Math.min(100, influencer.achievements.length * 20)} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-blue-600" />
                    Meaningful Engagement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-700">{engagementScore}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Audience Authenticity</div>
                        <div className="text-sm font-medium">{influencer.audienceAuthenticity}%</div>
                      </div>
                      <Progress value={influencer.audienceAuthenticity} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Engagement Quality</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            (influencer.socialStats.reduce((acc, stat) => acc + stat.engagement, 0) /
                              influencer.socialStats.length) *
                              10,
                          )}
                          %
                        </div>
                      </div>
                      <Progress
                        value={Math.round(
                          (influencer.socialStats.reduce((acc, stat) => acc + stat.engagement, 0) /
                            influencer.socialStats.length) *
                            10,
                        )}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Comment-to-Like Ratio</div>
                        <div className="text-sm font-medium">
                          {Math.round(
                            influencer.recentPosts.reduce(
                              (acc, post) => acc + (post.engagement.comments / post.engagement.likes) * 100,
                              0,
                            ) / influencer.recentPosts.length,
                          )}
                          %
                        </div>
                      </div>
                      <Progress
                        value={Math.min(
                          100,
                          Math.round(
                            influencer.recentPosts.reduce(
                              (acc, post) => acc + (post.engagement.comments / post.engagement.likes) * 500,
                              0,
                            ) / influencer.recentPosts.length,
                          ),
                        )}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Audience Diversity</div>
                        <div className="text-sm font-medium">
                          {Math.round((influencer.audienceDemographics.topCountries.length / 5) * 100)}%
                        </div>
                      </div>
                      <Progress
                        value={Math.min(100, (influencer.audienceDemographics.topCountries.length / 5) * 100)}
                        className="h-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-blue-600" />
                    Overall Influence Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-700">{overallScore}</div>
                    <div className="text-sm text-muted-foreground">out of 100</div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Credibility & Trustworthiness (35%)</div>
                        <div className="text-sm font-medium">{credibilityScore}/100</div>
                      </div>
                      <Progress value={credibilityScore} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Fame Longevity (30%)</div>
                        <div className="text-sm font-medium">{longevityScore}/100</div>
                      </div>
                      <Progress value={longevityScore} className="h-2" />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Meaningful Engagement (35%)</div>
                        <div className="text-sm font-medium">{engagementScore}/100</div>
                      </div>
                      <Progress value={engagementScore} className="h-2" />
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Overall Score</div>
                        <div className="text-sm font-medium">{overallScore}/100</div>
                      </div>
                      <Progress value={overallScore} className="h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="content" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Recent Content</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {influencer.recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={post.imageUrl || "/placeholder.svg"} alt={post.content} fill className="object-cover" />
                    <Badge className="absolute top-3 left-3 bg-black/70 text-white hover:bg-black/70">
                      {post.platform}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-semibold mb-2">{post.content}</h3>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {formatNumber(post.engagement.likes)} likes
                      </div>
                      <div>{new Date(post.date).toLocaleDateString()}</div>
                    </div>
                    <div className="mt-2">
                      <Button asChild size="sm" variant="outline" className="w-full">
                        <Link href={post.url} target="_blank">
                          View Original Post <ExternalLink className="h-3 w-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Content Analysis</h3>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-700">
                        {Math.round(
                          (influencer.reviews.filter((r) => r.sentiment === "positive").length /
                            influencer.reviews.length) *
                            100,
                        )}
                        %
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Positive Sentiment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-700">
                        {formatNumber(
                          influencer.socialStats.reduce(
                            (acc, stat) =>
                              acc +
                              (stat.platform === "YouTube"
                                ? stat.followers * 0.3
                                : stat.platform === "Instagram"
                                  ? stat.followers * 0.2
                                  : stat.followers * 0.1),
                            0,
                          ),
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Monthly Views (Est.)</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-700">
                        {(
                          influencer.socialStats.reduce((acc, stat) => acc + stat.engagement, 0) /
                          influencer.socialStats.length
                        ).toFixed(1)}
                        %
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">Avg. Engagement Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="audience" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Audience Demographics</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Age Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(influencer.audienceDemographics.age).map(([age, percentage]) => (
                      <div key={age}>
                        <div className="flex justify-between mb-1">
                          <div className="text-sm font-medium">{age}</div>
                          <div className="text-sm font-medium">{percentage}%</div>
                        </div>
                        <Progress value={percentage as number} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gender Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(influencer.audienceDemographics.gender).map(([gender, percentage]) => (
                      <div key={gender}>
                        <div className="flex justify-between mb-1">
                          <div className="text-sm font-medium">{gender.charAt(0).toUpperCase() + gender.slice(1)}</div>
                          <div className="text-sm font-medium">{percentage}%</div>
                        </div>
                        <Progress value={percentage as number} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Top Countries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {influencer.audienceDemographics.topCountries.map((country, index) => (
                      <div key={country} className="text-center">
                        <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                          <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="font-medium">{country}</div>
                        <div className="text-sm text-muted-foreground">{20 - index * 3}%</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Audience Interests</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {influencer.audienceDemographics.interests.map((interest, index) => (
                      <Badge key={index} className="bg-blue-50 text-blue-700 py-2 px-3">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Audience Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-green-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="font-medium">Real Followers</div>
                      <div className="text-2xl font-bold text-green-600">{influencer.audienceAuthenticity}%</div>
                    </div>

                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <MessageCircle className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="font-medium">Active Commenters</div>
                      <div className="text-2xl font-bold text-blue-600">
                        {Math.round(
                          influencer.recentPosts.reduce(
                            (acc, post) => acc + (post.engagement.comments / post.engagement.likes) * 100,
                            0,
                          ) / influencer.recentPosts.length,
                        )}
                        %
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="bg-orange-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="h-6 w-6 text-orange-600" />
                      </div>
                      <div className="font-medium">Growth Rate</div>
                      <div className="text-2xl font-bold text-orange-600">+{influencer.growthRate}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="mt-0">
            <h2 className="text-2xl font-bold mb-6">Achievements & Recognition</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Notable Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {influencer.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="bg-yellow-100 rounded-full p-2 mt-0.5">
                          <Award className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-xs text-muted-foreground">
                              {new Date(achievement.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                              })}
                            </p>
                            {achievement.source && (
                              <Badge className="text-xs bg-blue-50 text-blue-700">{achievement.source}</Badge>
                            )}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brand Collaborations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {influencer.brandCollaborations.map((brand, index) => (
                      <Badge key={index} className="bg-gray-100 text-gray-800 py-2 px-3">
                        {brand}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-6 mt-8">
                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Industry Influence</div>
                        <div className="text-sm font-medium">
                          {influencer.achievements.length > 3
                            ? "High"
                            : influencer.achievements.length > 1
                              ? "Medium"
                              : "Emerging"}
                        </div>
                      </div>
                      <Progress
                        value={influencer.achievements.length > 3 ? 90 : influencer.achievements.length > 1 ? 70 : 50}
                        className="h-2"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <div className="text-sm font-medium">Brand Value</div>
                        <div className="text-sm font-medium">
                          {influencer.brandCollaborations.length > 4
                            ? "Very High"
                            : influencer.brandCollaborations.length > 2
                              ? "High"
                              : "Medium"}
                        </div>
                      </div>
                      <Progress
                        value={
                          influencer.brandCollaborations.length > 4
                            ? 95
                            : influencer.brandCollaborations.length > 2
                              ? 80
                              : 60
                        }
                        className="h-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Timeline of Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative border-l-2 border-blue-200 pl-6 ml-3 space-y-8">
                    <div className="relative">
                      <div className="absolute -left-8 top-0 bg-blue-500 rounded-full w-5 h-5"></div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(influencer.joinedDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </div>
                      <div className="font-medium">Started content creation</div>
                      <div className="text-sm text-muted-foreground">First social media account launched</div>
                    </div>

                    {influencer.achievements.slice(0, 4).map((achievement, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 top-0 bg-blue-500 rounded-full w-5 h-5"></div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(achievement.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                        </div>
                        <div className="font-medium">{achievement.title}</div>
                        <div className="text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    ))}

                    <div className="relative">
                      <div className="absolute -left-8 top-0 bg-blue-500 rounded-full w-5 h-5"></div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(influencer.lastUpdated).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                        })}
                      </div>
                      <div className="font-medium">Current Status</div>
                      <div className="text-sm text-muted-foreground">
                        {formatNumber(influencer.socialStats.reduce((acc, stat) => acc + stat.followers, 0))} followers
                        across all platforms
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function Users({ className, ...props }: React.ComponentProps<typeof Globe>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


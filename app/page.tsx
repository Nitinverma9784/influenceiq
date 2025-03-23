import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Globe, Shield, TrendingUp, Heart, Clock } from "lucide-react"
import influencers from "@/data/influencers"
import { calculateInfluenceIQScore } from "@/utils/score-calculator"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Discover True <span className="text-blue-600">Influence</span> Beyond the Numbers
              </h1>
              <p className="text-lg text-muted-foreground">
                InfluenceIQ ranks public figures based on credibility, longevity, and meaningful engagement—not just
                followers. We distinguish consistent achievers from short-term viral hits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/heroimg.jpg"
                  alt="Influencer Analytics"
                  width={500}
                  height={500}
                  className="mx-auto"
                />
              </div>
              <div className="absolute top-1/4 right-0 bg-blue-100 rounded-lg p-4 shadow-lg z-20">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-500 rounded-full p-2">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Rapid Growth</p>
                    <p className="text-2xl font-bold">$22K</p>
                    <p className="text-xs text-muted-foreground">Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measuring <span className="text-blue-600">True Influence</span> Since 2022
            </h2>
            <p className="text-muted-foreground">
              InfluenceIQ is more than just an AI-powered ranking system—it's a revolution in measuring true influence
              through three key metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Credibility & Trustworthiness</h3>
                <p className="text-muted-foreground mb-4">
                  We analyze content accuracy, source credibility, and audience trust to determine how reliable an
                  influencer truly is.
                </p>
                <Link href="/features" className="text-blue-600 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fame Longevity</h3>
                <p className="text-muted-foreground mb-4">
                  We track historical popularity to distinguish between consistent achievers and short-term viral hits.
                </p>
                <Link href="/features" className="text-blue-600 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Meaningful Engagement</h3>
                <p className="text-muted-foreground mb-4">
                  Our platform detects fake followers and engagement bots to ensure authentic influence rankings based
                  on real impact.
                </p>
                <Link href="/features" className="text-blue-600 font-medium inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Influencers Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Top Influencers</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Who's Making an Impact</h2>
            <p className="text-muted-foreground">
              Explore our comprehensive database of influencers across various industries and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {influencers
              .sort((a, b) => calculateInfluenceIQScore(b) - calculateInfluenceIQScore(a))
              .slice(0, 3)
              .map((influencer) => {
                const score = calculateInfluenceIQScore(influencer)
                const totalFollowers = influencer.socialStats.reduce((sum, stat) => sum + stat.followers, 0)
                const formattedFollowers =
                  totalFollowers >= 1000000
                    ? `${(totalFollowers / 1000000).toFixed(1)}M`
                    : totalFollowers >= 1000
                      ? `${(totalFollowers / 1000).toFixed(1)}K`
                      : totalFollowers

                return (
                  <Card key={influencer.id} className="overflow-hidden">
                    <Link href={`/influencers/${influencer.id}`} className="block">
                      <div className="relative h-48 bg-blue-100">
                        <Image
                          src={influencer.profileImage || "/placeholder.svg"}
                          alt={influencer.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                          <Badge className="bg-blue-500">#{influencer.id}</Badge>
                        </div>
                      </div>
                    </Link>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{influencer.name}</h3>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{score}/100</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {influencer.category[0]} Influencer • {formattedFollowers} Followers
                      </p>
                      <div className="flex justify-between text-sm">
                        {influencer.socialStats.some((stat) => stat.verified) && (
                          <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4 text-green-500" /> Verified
                          </span>
                        )}
                        {influencer.audienceDemographics.topCountries.length >= 3 && (
                          <span className="flex items-center gap-1">
                            <Globe className="h-4 w-4 text-blue-500" /> Global Reach
                          </span>
                        )}
                        {influencer.growthRate > 10 && (
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-4 w-4 text-orange-500" /> Trending
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
              <Link href="/influencers">View All Influencers</Link>
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
              <Link href="/get-started">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


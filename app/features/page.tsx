import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BarChart2, LineChart, Shield, Globe, TrendingUp, Users, Zap, Award, Filter } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features to Measure True Influence</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover how InfluenceIQ is revolutionizing the way we measure, analyze, and understand influence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto p-1 mb-12">
              <TabsTrigger value="search" className="py-3">
                Search & Discovery
              </TabsTrigger>
              <TabsTrigger value="score" className="py-3">
                Influence Score
              </TabsTrigger>
              <TabsTrigger value="analytics" className="py-3">
                Data Analytics
              </TabsTrigger>
              <TabsTrigger value="security" className="py-3">
                Security Features
              </TabsTrigger>
            </TabsList>

            <TabsContent value="search" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Smart Search & Discovery</h2>
                  <p className="text-muted-foreground">
                    Our intelligent search system helps you find the perfect influencers for your needs, with powerful
                    filtering and sorting options.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Search className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Advanced Search</p>
                        <p className="text-sm text-muted-foreground">
                          Search by name, industry, platform, or influence category.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Filter className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Powerful Filters</p>
                        <p className="text-sm text-muted-foreground">
                          Filter by engagement score, credibility, industry, and more.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Trending Section</p>
                        <p className="text-sm text-muted-foreground">
                          Discover fast-rising influencers in an Instagram Stories-like UI.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/searchfeature.png"
                    alt="Smart Search & Discovery"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="score" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="/influencefeature.png"
                    alt="Influence Score Calculation"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Real-Time Influence Score</h2>
                  <p className="text-muted-foreground">
                    Each influencer gets a dynamic Influence Score (0-100), calculated using multiple factors to ensure
                    accuracy.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Credibility & Trustworthiness</p>
                        <p className="text-sm text-muted-foreground">
                          Uses Google Perspective API to detect sentiment and trustworthiness.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Award className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Fame Longevity</p>
                        <p className="text-sm text-muted-foreground">Tracks historical popularity over months/years.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Community Trust Factor</p>
                        <p className="text-sm text-muted-foreground">
                          Uses AI to detect fake followers & engagement bots.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <LineChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Data Visualization & Analytics</h2>
                  <p className="text-muted-foreground">
                    Powerful analytics tools help you understand influence trends and make data-driven decisions.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <LineChart className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Engagement Graphs</p>
                        <p className="text-sm text-muted-foreground">
                          Shows a timeline of popularity over months/years.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <BarChart2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Influence Comparison Tool</p>
                        <p className="text-sm text-muted-foreground">
                          Compare two influencers side-by-side with interactive graphs.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Historical Performance Chart</p>
                        <p className="text-sm text-muted-foreground">
                          A timeline view showing how credibility & engagement changed over time.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src="/analyticsfeature.png"
                    alt="Data Visualization & Analytics"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    src="/securityfeature.jpg"
                    alt="Security Features"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6 order-1 md:order-2">
                  <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold">Anti-Manipulation & Security</h2>
                  <p className="text-muted-foreground">
                    Our platform is designed to detect and prevent manipulation, ensuring authentic influence rankings.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Bot & Fake Follower Detection</p>
                        <p className="text-sm text-muted-foreground">
                          Flags influencers with suspicious activity patterns.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Spam Review Protection</p>
                        <p className="text-sm text-muted-foreground">
                          Prevents rating manipulation through AI-based spam detection.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="bg-blue-100 rounded-full p-1 mt-1">
                        <Globe className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Transparent Data Sources</p>
                        <p className="text-sm text-muted-foreground">
                          Users can click & verify source data to prevent misinformation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Features at a Glance</h2>
            <p className="text-muted-foreground">
              Explore the complete set of features that make InfluenceIQ the ultimate influence ranking platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Search & Discovery</h3>
                <p className="text-muted-foreground">
                  Find influencers by name, industry, platform, or influence category with our intelligent search
                  system.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart2 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Influence Score</h3>
                <p className="text-muted-foreground">
                  Each influencer gets a dynamic Influence Score (0-100) calculated using multiple factors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
                <p className="text-muted-foreground">
                  Powerful analytics tools help you understand influence trends and make data-driven decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Influencer Profiles</h3>
                <p className="text-muted-foreground">
                  Detailed profiles with influence scores, engagement breakdowns, and trust factor badges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dynamic Leaderboards</h3>
                <p className="text-muted-foreground">
                  Category-based leaderboards and global rankings with real-time updates.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Insights</h3>
                <p className="text-muted-foreground">
                  AI-based prediction models, authenticity checkers, and content sentiment analysis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get started with InfluenceIQ today and discover the power of true influence measurement.
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


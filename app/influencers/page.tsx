"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Filter, Globe, Search, TrendingUp } from "lucide-react"
import influencers from "@/data/influencers"
import { calculateInfluenceIQScore } from "@/utils/score-calculator"

export default function InfluencersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Get unique categories from all influencers
  const allCategories = Array.from(
    new Set(influencers.flatMap((influencer) => influencer.category.map((cat) => cat.toLowerCase()))),
  ).sort()

  // Filter influencers based on search query and active category
  const filteredInfluencers = influencers.filter(
    (influencer) =>
      (searchQuery
        ? influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          influencer.category.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))
        : true) &&
      (activeCategory === "all" || influencer.category.some((cat) => cat.toLowerCase() === activeCategory)),
  )

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value)
  }

  // Format large numbers with K, M, etc.
  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M"
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K"
    }
    return count.toString()
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Influencers</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover Top Influencers</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our comprehensive database of influencers across various industries and platforms.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search by name, industry, or platform..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Influencers Listing Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={handleCategoryChange}>
              <TabsList className="overflow-x-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                {allCategories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-4">
              <Select defaultValue="score">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">Highest Score</SelectItem>
                  <SelectItem value="followers">Most Followers</SelectItem>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInfluencers.map((influencer) => {
              // Calculate total followers across all platforms
              const totalFollowers = influencer.socialStats.reduce((sum, stat) => sum + stat.followers, 0)

              // Calculate influence score
              const score = calculateInfluenceIQScore(influencer)

              // Check if verified on any platform
              const verified = influencer.socialStats.some((stat) => stat.verified)

              // Check if has global reach (3+ countries)
              const globalReach = influencer.audienceDemographics.topCountries.length >= 3

              // Check if trending (growth rate > 10%)
              const trending = influencer.growthRate > 10

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
                      {influencer.category[0]} Influencer • {formatFollowers(totalFollowers)} Followers
                    </p>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Credibility</div>
                        <div className="font-semibold text-blue-600">
                          {Math.round(influencer.factCheckedContent * 0.9)}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Longevity</div>
                        <div className="font-semibold text-blue-600">
                          {Math.min(95, Math.round((influencer.accountAge / 60) * 100))}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Engagement</div>
                        <div className="font-semibold text-blue-600">
                          {Math.round(influencer.audienceAuthenticity * 0.95)}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      {verified && (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" /> Verified
                        </span>
                      )}
                      {globalReach && (
                        <span className="flex items-center gap-1">
                          <Globe className="h-4 w-4 text-blue-500" /> Global Reach
                        </span>
                      )}
                      {trending && (
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

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" size="lg">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


import type { Influencer, Review, Controversy, SocialStats } from "../data/influencers"

// Weights for different components of the score
const WEIGHTS = {
  CREDIBILITY: 0.35,
  LONGEVITY: 0.3,
  ENGAGEMENT: 0.35,
}

// Calculate credibility score based on reviews, fact-checking, and controversies
export function calculateCredibilityScore(influencer: Influencer): number {
  // Factor 1: Fact-checked content percentage (0-100)
  const factCheckedScore = influencer.factCheckedContent

  // Factor 2: Review sentiment and ratings
  const reviewScore = calculateReviewScore(influencer.reviews)

  // Factor 3: Controversies (negative impact)
  const controversyImpact = calculateControversyImpact(influencer.controversies)

  // Factor 4: Verification status across platforms
  const verificationScore = calculateVerificationScore(influencer.socialStats)

  // Combine all factors with appropriate weights
  const rawScore =
    factCheckedScore * 0.4 + reviewScore * 0.3 + (100 - controversyImpact) * 0.2 + verificationScore * 0.1

  // Ensure score is between 0-100
  return Math.min(100, Math.max(0, Math.round(rawScore)))
}

// Calculate longevity score based on account age, consistency, and growth
export function calculateLongevityScore(influencer: Influencer): number {
  // Factor 1: Account age (months)
  // Max score for accounts 5+ years old (60+ months)
  const ageScore = Math.min(100, (influencer.accountAge / 60) * 100)

  // Factor 2: Content consistency (0-100)
  const consistencyScore = influencer.contentConsistency

  // Factor 3: Steady growth rate (too rapid might be artificial)
  // Optimal growth rate around 10-15% annually
  const growthScore = calculateGrowthScore(influencer.growthRate)

  // Factor 4: Achievement timeline (more recent achievements score higher)
  const achievementScore = calculateAchievementScore(influencer.achievements)

  // Combine all factors with appropriate weights
  const rawScore = ageScore * 0.3 + consistencyScore * 0.3 + growthScore * 0.2 + achievementScore * 0.2

  // Ensure score is between 0-100
  return Math.min(100, Math.max(0, Math.round(rawScore)))
}

// Calculate engagement score based on authentic engagement and audience quality
export function calculateEngagementScore(influencer: Influencer): number {
  // Factor 1: Audience authenticity (percentage of real followers)
  const audienceAuthenticityScore = influencer.audienceAuthenticity

  // Factor 2: Engagement rates across platforms
  const engagementRateScore = calculateEngagementRateScore(influencer.socialStats)

  // Factor 3: Quality of recent post engagement
  const recentPostScore = calculateRecentPostScore(influencer.recentPosts)

  // Factor 4: Audience demographics diversity
  const demographicsScore = calculateDemographicsScore(influencer.audienceDemographics)

  // Combine all factors with appropriate weights
  const rawScore =
    audienceAuthenticityScore * 0.4 + engagementRateScore * 0.3 + recentPostScore * 0.2 + demographicsScore * 0.1

  // Ensure score is between 0-100
  return Math.min(100, Math.max(0, Math.round(rawScore)))
}

// Calculate overall InfluenceIQ score
export function calculateInfluenceIQScore(influencer: Influencer): number {
  const credibilityScore = calculateCredibilityScore(influencer)
  const longevityScore = calculateLongevityScore(influencer)
  const engagementScore = calculateEngagementScore(influencer)

  // Combine scores using the defined weights
  const overallScore =
    credibilityScore * WEIGHTS.CREDIBILITY + longevityScore * WEIGHTS.LONGEVITY + engagementScore * WEIGHTS.ENGAGEMENT

  // Ensure score is between 0-100
  return Math.min(100, Math.max(0, Math.round(overallScore)))
}

// Helper functions
function calculateReviewScore(reviews: Review[]): number {
  if (reviews.length === 0) return 50 // Neutral score if no reviews

  let totalScore = 0
  let weightSum = 0

  // Calculate weighted average of review ratings
  // More recent reviews have higher weight
  reviews.forEach((review, index) => {
    const recencyWeight = 1 + index / reviews.length // More recent reviews have higher weight
    const sentimentScore = review.sentiment === "positive" ? 100 : review.sentiment === "neutral" ? 50 : 0
    const reviewScore = review.rating ? review.rating * 20 : sentimentScore // Convert 0-5 rating to 0-100

    totalScore += reviewScore * recencyWeight
    weightSum += recencyWeight
  })

  return Math.round(totalScore / weightSum)
}

function calculateControversyImpact(controversies: Controversy[]): number {
  if (controversies.length === 0) return 0 // No impact if no controversies

  let totalImpact = 0

  // Calculate impact based on severity and recency
  controversies.forEach((controversy) => {
    const impactValue = controversy.impact === "high" ? 30 : controversy.impact === "medium" ? 15 : 5

    // Reduce impact if there's a resolution
    const resolutionFactor = controversy.resolution ? 0.5 : 1

    // Calculate recency factor (controversies older than 2 years have less impact)
    const controversyDate = new Date(controversy.date)
    const currentDate = new Date()
    const monthsDifference =
      (currentDate.getFullYear() - controversyDate.getFullYear()) * 12 +
      (currentDate.getMonth() - controversyDate.getMonth())
    const recencyFactor = Math.max(0, 1 - monthsDifference / 24)

    totalImpact += impactValue * resolutionFactor * recencyFactor
  })

  // Cap the total impact at 100
  return Math.min(100, totalImpact)
}

function calculateVerificationScore(socialStats: SocialStats[]): number {
  if (socialStats.length === 0) return 0

  const verifiedCount = socialStats.filter((stat) => stat.verified).length
  return (verifiedCount / socialStats.length) * 100
}

function calculateGrowthScore(growthRate: number): number {
  // Optimal growth rate around 10-15% annually
  // Too slow (<5%) or too rapid (>25%) might be concerning
  if (growthRate < 5) {
    return 60 + growthRate * 8 // 60-100 for 0-5% growth
  } else if (growthRate <= 15) {
    return 100 // Perfect score for 5-15% growth
  } else if (growthRate <= 25) {
    return 100 - (growthRate - 15) * 5 // 100-50 for 15-25% growth
  } else {
    return Math.max(0, 50 - (growthRate - 25) * 2) // 50-0 for 25%+ growth
  }
}

function calculateAchievementScore(achievements: any[]): number {
  if (achievements.length === 0) return 50

  // Score based on number and recency of achievements
  const achievementCount = Math.min(achievements.length, 10) // Cap at 10 achievements
  const countScore = (achievementCount / 10) * 100

  // Calculate recency score
  let recencySum = 0
  achievements.forEach((achievement) => {
    const achievementDate = new Date(achievement.date)
    const currentDate = new Date()
    const monthsDifference =
      (currentDate.getFullYear() - achievementDate.getFullYear()) * 12 +
      (currentDate.getMonth() - achievementDate.getMonth())
    // More recent achievements score higher
    recencySum += Math.max(0, 100 - monthsDifference * 2) // 0 points for achievements older than 4 years
  })

  const recencyScore = achievements.length > 0 ? recencySum / achievements.length : 0

  // Combine count and recency scores
  return countScore * 0.4 + recencyScore * 0.6
}

function calculateEngagementRateScore(socialStats: SocialStats[]): number {
  if (socialStats.length === 0) return 50

  let totalScore = 0

  socialStats.forEach((stat) => {
    // Different platforms have different average engagement rates
    let platformAverage = 0
    switch (stat.platform.toLowerCase()) {
      case "instagram":
        platformAverage = 3.0
        break
      case "youtube":
        platformAverage = 2.0
        break
      case "twitter":
        platformAverage = 1.0
        break
      case "facebook":
        platformAverage = 0.5
        break
      default:
        platformAverage = 2.0
    }

    // Score based on how much the engagement rate exceeds the platform average
    const ratio = stat.engagement / platformAverage
    const platformScore =
      ratio >= 3
        ? 100
        : // 3x or more the average is excellent
          ratio >= 2
          ? 90
          : // 2-3x the average is great
            ratio >= 1
            ? 70 + (ratio - 1) * 20
            : // 1-2x the average is good
              Math.max(0, ratio * 70) // Below average scores proportionally

    totalScore += platformScore
  })

  return Math.round(totalScore / socialStats.length)
}

function calculateRecentPostScore(recentPosts: any[]): number {
  if (recentPosts.length === 0) return 50

  let totalScore = 0

  recentPosts.forEach((post) => {
    // Calculate engagement quality score based on likes, comments, shares ratio
    const engagement = post.engagement
    const likesWeight = 1
    const commentsWeight = 3 // Comments show more engagement than likes
    const sharesWeight = 5 // Shares show even more engagement

    let engagementScore = 0
    let totalEngagement = 0

    if (engagement.likes) {
      engagementScore += engagement.likes * likesWeight
      totalEngagement += engagement.likes
    }

    if (engagement.comments) {
      engagementScore += engagement.comments * commentsWeight
      totalEngagement += engagement.comments
    }

    if (engagement.shares) {
      engagementScore += engagement.shares * sharesWeight
      totalEngagement += engagement.shares
    }

    // Calculate final post score
    const postScore = totalEngagement > 0 ? Math.min(100, (engagementScore / totalEngagement) * 20) : 50

    totalScore += postScore
  })

  return Math.round(totalScore / recentPosts.length)
}

function calculateDemographicsScore(demographics: any): number {
  // A diverse audience across age groups and genders scores higher
  // Calculate age diversity
  const ageGroups = Object.values(demographics.age)
  const ageGroupCount = ageGroups.length
  const ageStandardDeviation = calculateStandardDeviation(ageGroups as number[])
  const ageScore = 100 - ageStandardDeviation * 2 // Lower standard deviation means more diversity

  // Calculate gender diversity
  const genderGroups = Object.values(demographics.gender)
  const genderGroupCount = genderGroups.length
  const genderStandardDeviation = calculateStandardDeviation(genderGroups as number[])
  const genderScore = 100 - genderStandardDeviation * 1.5

  // Calculate country diversity
  const countryCount = demographics.topCountries.length
  const countryScore = Math.min(100, countryCount * 20) // 5+ countries = 100

  // Calculate interest diversity
  const interestCount = demographics.interests.length
  const interestScore = Math.min(100, interestCount * 20) // 5+ interests = 100

  // Combine all diversity scores
  return Math.round(ageScore * 0.3 + genderScore * 0.3 + countryScore * 0.2 + interestScore * 0.2)
}

function calculateStandardDeviation(values: number[]): number {
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length
  const squareDiffs = values.map((value) => Math.pow(value - avg, 2))
  const avgSquareDiff = squareDiffs.reduce((sum, val) => sum + val, 0) / squareDiffs.length
  return Math.sqrt(avgSquareDiff)
}


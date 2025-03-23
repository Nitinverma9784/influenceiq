export interface SocialStats {
  platform: string
  handle: string
  url: string
  followers: number
  engagement: number
  verified: boolean
}

export interface RecentPost {
  id: string
  platform: string
  content: string
  imageUrl: string
  url: string
  engagement: {
    likes: number
    comments: number
    shares?: number
    views?: number
  }
  date: string
}

export interface Review {
  source: string
  content: string
  sentiment: "positive" | "neutral" | "negative"
  date: string
  rating?: number
}

export interface Controversy {
  title: string
  description: string
  date: string
  impact: "low" | "medium" | "high"
  resolution?: string
}

export interface Achievement {
  title: string
  description: string
  date: string
  source?: string
}

export interface Influencer {
  id: number
  name: string
  username: string
  bio: string
  category: string[]
  subCategory?: string[]
  location: string
  joinedDate: string
  profileImage: string
  coverImage: string
  socialStats: SocialStats[]
  recentPosts: RecentPost[]
  reviews: Review[]
  controversies: Controversy[]
  achievements: Achievement[]
  factCheckedContent: number // percentage
  audienceAuthenticity: number // percentage
  audienceDemographics: {
    age: Record<string, number>
    gender: Record<string, number>
    topCountries: string[]
    interests: string[]
  }
  brandCollaborations: string[]
  contentConsistency: number // 0-100
  growthRate: number // percentage
  accountAge: number // in months
  lastUpdated: string
}

const influencers: Influencer[] = [
  {
    id: 1,
    name: "Elvish Yadav",
    username: "elvishyadav",
    bio: "Content creator, entrepreneur, and Bigg Boss OTT 2 winner. Known for comedy sketches and vlogs.",
    category: ["Entertainment", "Comedy"],
    subCategory: ["Vlogs", "Pranks"],
    location: "Gurugram, India",
    joinedDate: "2016-09-12",
    profileImage: "/elvishpfp.jpg",
    coverImage: "/elvishcover.jpg",
    socialStats: [
      {
        platform: "Instagram",
        handle: "elvishyadav",
        url: "https://www.instagram.com/elvish_yadav/",
        followers: 14500000,
        engagement: 8.2,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "ElvishYadav",
        url: "https://www.youtube.com/c/ElvishYadav",
        followers: 13200000,
        engagement: 6.5,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "ElvishYadav",
        url: "https://twitter.com/ElvishYadav",
        followers: 1200000,
        engagement: 3.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "e1",
        platform: "Instagram",
        content: "New vlog coming soon! Stay tuned 🔥",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/abc123/",
        engagement: {
          likes: 1200000,
          comments: 25000,
          shares: 15000,
        },
        date: "2023-12-15",
      },
      {
        id: "e2",
        platform: "YouTube",
        content: "Grand Delivery Of India's First Electric Gwagon 😍",
        imageUrl: "/elvishyt.jpg",
        url: "https://youtu.be/-RZMtV6hhgY?si=frZCHZbKTTlNc-_O",
        engagement: {
          likes: 850000,
          comments: 42000,
          views: 5200000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "Social Media Today",
        content:
          "Elvish Yadav has established himself as one of India's most influential content creators with authentic engagement and consistent growth.",
        sentiment: "positive",
        date: "2023-10-15",
        rating: 4.5,
      },
      {
        source: "Digital Creators India",
        content:
          "While his content appeals to a wide audience, some of his pranks have been criticized for crossing ethical boundaries.",
        sentiment: "neutral",
        date: "2023-09-22",
        rating: 3.8,
      },
      {
        source: "Entertainment Weekly India",
        content:
          "His Bigg Boss OTT 2 win catapulted him to mainstream fame, showing his ability to connect with audiences beyond social media.",
        sentiment: "positive",
        date: "2023-08-14",
        rating: 4.2,
      },
    ],
    controversies: [
      {
        title: "Controversial Statements",
        description: "Made some controversial statements about other content creators that received backlash.",
        date: "2023-07-20",
        impact: "medium",
        resolution: "Issued a public apology and clarified his statements.",
      },
    ],
    achievements: [
      {
        title: "Bigg Boss OTT 2 Winner",
        description: "Won the reality show Bigg Boss OTT Season 2",
        date: "2023-08-14",
        source: "Colors TV",
      },
      {
        title: "10 Million YouTube Subscribers",
        description: "Reached 10 million subscribers milestone on YouTube",
        date: "2022-11-30",
        source: "YouTube",
      },
    ],
    factCheckedContent: 82, // percentage
    audienceAuthenticity: 78, // percentage
    audienceDemographics: {
      age: {
        "13-17": 25,
        "18-24": 45,
        "25-34": 20,
        "35+": 10,
      },
      gender: {
        male: 70,
        female: 28,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Canada"],
      interests: ["Entertainment", "Comedy", "Lifestyle", "Technology", "Fashion"],
    },
    brandCollaborations: ["Myntra", "Pepsi", "boAt", "MamaEarth", "Lenskart"],
    contentConsistency: 85, // 0-100
    growthRate: 12.5, // percentage
    accountAge: 87, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 2,
    name: "Faisal Shaikh (Mr. Faisu)",
    username: "mr_faisu_07",
    bio: "Digital content creator, actor and model. Known for lifestyle content, fashion, and acting projects.",
    category: ["Lifestyle", "Fashion"],
    subCategory: ["Acting", "Dance"],
    location: "Mumbai, India",
    joinedDate: "2017-03-18",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "mr_faisu_07",
        url: "https://www.instagram.com/mr_faisu_07/",
        followers: 28500000,
        engagement: 7.5,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "FaisalShaikh",
        url: "https://www.youtube.com/c/FaisalShaikh",
        followers: 8500000,
        engagement: 5.8,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "mrfaisu07",
        url: "https://www.facebook.com/mrfaisu07",
        followers: 5200000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "f1",
        platform: "Instagram",
        content: "New photoshoot for @fashionbrand 📸 #FashionGoals",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/def456/",
        engagement: {
          likes: 1800000,
          comments: 32000,
          shares: 18000,
        },
        date: "2023-12-18",
      },
      {
        id: "f2",
        platform: "YouTube",
        content: "A Day in My Life | Behind The Scenes",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=def456",
        engagement: {
          likes: 620000,
          comments: 35000,
          views: 4800000,
        },
        date: "2023-12-05",
      },
    ],
    reviews: [
      {
        source: "Vogue India",
        content:
          "Faisal Shaikh has successfully transitioned from social media star to mainstream entertainment, showing versatility and business acumen.",
        sentiment: "positive",
        date: "2023-11-10",
        rating: 4.3,
      },
      {
        source: "Fashion Forward",
        content:
          "His fashion sense and style evolution have made him a favorite among brands looking to target Gen Z consumers.",
        sentiment: "positive",
        date: "2023-10-05",
        rating: 4.5,
      },
      {
        source: "Digital Creators India",
        content:
          "While his content quality is high, there have been concerns about the authenticity of some of his engagement metrics.",
        sentiment: "neutral",
        date: "2023-08-30",
        rating: 3.5,
      },
    ],
    controversies: [
      {
        title: "TikTok Ban Impact",
        description:
          "Career was temporarily affected when TikTok was banned in India, where he had over 30 million followers.",
        date: "2020-06-29",
        impact: "high",
        resolution: "Successfully transitioned to Instagram and YouTube",
      },
    ],
    achievements: [
      {
        title: "Khatron Ke Khiladi Contestant",
        description: "Participated in the stunt-based reality show Khatron Ke Khiladi Season 12",
        date: "2022-07-02",
        source: "Colors TV",
      },
      {
        title: "25 Million Instagram Followers",
        description: "Reached 25 million followers milestone on Instagram",
        date: "2022-09-15",
        source: "Instagram",
      },
    ],
    factCheckedContent: 75, // percentage
    audienceAuthenticity: 72, // percentage
    audienceDemographics: {
      age: {
        "13-17": 30,
        "18-24": 40,
        "25-34": 22,
        "35+": 8,
      },
      gender: {
        male: 35,
        female: 63,
        other: 2,
      },
      topCountries: ["India", "Pakistan", "UAE", "Bangladesh", "UK"],
      interests: ["Fashion", "Lifestyle", "Entertainment", "Travel", "Fitness"],
    },
    brandCollaborations: ["Myntra", "Oppo", "Puma", "Garnier", "Zara"],
    contentConsistency: 80, // 0-100
    growthRate: 8.2, // percentage
    accountAge: 81, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 3,
    name: "Jannat Zubair",
    username: "jannatzubair29",
    bio: "Actress, singer and content creator. Started as a child artist and transitioned to social media stardom.",
    category: ["Entertainment", "Fashion"],
    subCategory: ["Acting", "Music"],
    location: "Mumbai, India",
    joinedDate: "2016-05-22",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "jannatzubair29",
        url: "https://www.instagram.com/jannatzubair29/",
        followers: 43500000,
        engagement: 8.7,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "JannatZubair",
        url: "https://www.youtube.com/c/JannatZubair",
        followers: 5200000,
        engagement: 6.2,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "jannatzubair29",
        url: "https://www.facebook.com/jannatzubair29",
        followers: 3800000,
        engagement: 4.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "j1",
        platform: "Instagram",
        content: "New music video dropping next week! Can't wait for you all to see it 🎵 #NewRelease",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/ghi789/",
        engagement: {
          likes: 2500000,
          comments: 45000,
          shares: 22000,
        },
        date: "2023-12-17",
      },
      {
        id: "j2",
        platform: "YouTube",
        content: "Get Ready With Me | Award Show Edition",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=ghi789",
        engagement: {
          likes: 480000,
          comments: 28000,
          views: 3500000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Filmfare",
        content:
          "Jannat Zubair has successfully navigated the transition from child actor to digital sensation with grace and strategic content choices.",
        sentiment: "positive",
        date: "2023-11-20",
        rating: 4.6,
      },
      {
        source: "Teen Vogue India",
        content:
          "Her influence among teenage audiences is unparalleled, making her one of the most bankable young stars for brands targeting Gen Z.",
        sentiment: "positive",
        date: "2023-10-12",
        rating: 4.8,
      },
      {
        source: "Digital Marketing Weekly",
        content:
          "While her engagement is impressive, there are questions about content originality and over-commercialization in recent months.",
        sentiment: "neutral",
        date: "2023-09-05",
        rating: 3.7,
      },
    ],
    controversies: [
      {
        title: "Age-inappropriate Content Criticism",
        description: "Faced criticism for some content considered too mature for her younger audience.",
        date: "2022-08-15",
        impact: "medium",
        resolution: "Adjusted content strategy to be more age-appropriate",
      },
    ],
    achievements: [
      {
        title: "Khatron Ke Khiladi Contestant",
        description: "Participated in the stunt-based reality show Khatron Ke Khiladi Season 12",
        date: "2022-07-02",
        source: "Colors TV",
      },
      {
        title: "40 Million Instagram Followers",
        description: "Reached 40 million followers milestone on Instagram",
        date: "2023-06-10",
        source: "Instagram",
      },
      {
        title: "Best Child Actor Award",
        description: "Won Best Child Actor for TV show 'Phulwa'",
        date: "2011-12-15",
        source: "Indian Telly Awards",
      },
    ],
    factCheckedContent: 88, // percentage
    audienceAuthenticity: 76, // percentage
    audienceDemographics: {
      age: {
        "13-17": 35,
        "18-24": 38,
        "25-34": 20,
        "35+": 7,
      },
      gender: {
        male: 45,
        female: 53,
        other: 2,
      },
      topCountries: ["India", "Pakistan", "UAE", "Nepal", "Bangladesh"],
      interests: ["Fashion", "Entertainment", "Music", "Beauty", "Lifestyle"],
    },
    brandCollaborations: ["Maybelline", "Lakme", "Nykaa", "Vivo", "Myntra"],
    contentConsistency: 90, // 0-100
    growthRate: 10.5, // percentage
    accountAge: 91, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 4,
    name: "Bhuvan Bam",
    username: "bhuvan.bam22",
    bio: "Comedian, singer, songwriter and YouTube personality. Creator of BB Ki Vines and other original content.",
    category: ["Comedy", "Entertainment"],
    subCategory: ["Music", "Acting"],
    location: "Delhi, India",
    joinedDate: "2015-06-20",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "BBKiVines",
        url: "https://www.youtube.com/c/BBKiVines",
        followers: 25000000,
        engagement: 9.5,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "bhuvan.bam22",
        url: "https://www.instagram.com/bhuvan.bam22/",
        followers: 16800000,
        engagement: 8.2,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "Bhuvan_Bam",
        url: "https://twitter.com/Bhuvan_Bam",
        followers: 3500000,
        engagement: 5.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "b1",
        platform: "YouTube",
        content: "Titu Talks with Bollywood Star | Episode 15",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=jkl101",
        engagement: {
          likes: 1200000,
          comments: 85000,
          views: 12000000,
        },
        date: "2023-12-12",
      },
      {
        id: "b2",
        platform: "Instagram",
        content: "Behind the scenes from my new web series 🎬 #ComingSoon",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/mno123/",
        engagement: {
          likes: 1500000,
          comments: 32000,
          shares: 25000,
        },
        date: "2023-12-05",
      },
    ],
    reviews: [
      {
        source: "Forbes India",
        content:
          "Bhuvan Bam represents the gold standard of content creation in India, with unmatched originality and consistent quality across platforms.",
        sentiment: "positive",
        date: "2023-11-25",
        rating: 4.9,
      },
      {
        source: "The Indian Express",
        content:
          "His transition from YouTube sketches to mainstream web series demonstrates his versatility and staying power in the entertainment industry.",
        sentiment: "positive",
        date: "2023-10-18",
        rating: 4.7,
      },
      {
        source: "Digital Content Review",
        content:
          "While his core content remains strong, some of his newer ventures haven't resonated as strongly with his original audience base.",
        sentiment: "neutral",
        date: "2023-09-12",
        rating: 4.0,
      },
    ],
    controversies: [
      {
        title: "Content Sensitivity",
        description: "Occasionally criticized for potentially insensitive jokes in earlier content.",
        date: "2019-05-10",
        impact: "low",
        resolution: "Evolved content to be more inclusive and sensitive",
      },
    ],
    achievements: [
      {
        title: "Filmfare OTT Awards",
        description: "Won for his web series 'Dhindora'",
        date: "2022-12-21",
        source: "Filmfare",
      },
      {
        title: "First Indian Individual YouTube Creator to Cross 20M Subscribers",
        description: "Milestone achievement on YouTube",
        date: "2021-10-15",
        source: "YouTube",
      },
      {
        title: "Padma Shri Nomination",
        description: "Nominated for India's fourth-highest civilian award",
        date: "2023-01-25",
        source: "Government of India",
      },
    ],
    factCheckedContent: 92, // percentage
    audienceAuthenticity: 94, // percentage
    audienceDemographics: {
      age: {
        "13-17": 15,
        "18-24": 45,
        "25-34": 30,
        "35+": 10,
      },
      gender: {
        male: 65,
        female: 33,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Comedy", "Entertainment", "Music", "Films", "Social Issues"],
    },
    brandCollaborations: ["Amazon Prime", "Netflix", "Lenskart", "Coca-Cola", "OnePlus"],
    contentConsistency: 95, // 0-100
    growthRate: 7.5, // percentage
    accountAge: 102, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 5,
    name: "Kusha Kapila",
    username: "kushakapila",
    bio: "Content creator, actress and social media personality known for comedy sketches and relatable content.",
    category: ["Comedy", "Lifestyle"],
    subCategory: ["Fashion", "Acting"],
    location: "Delhi, India",
    joinedDate: "2016-08-15",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "kushakapila",
        url: "https://www.instagram.com/kushakapila/",
        followers: 3200000,
        engagement: 9.8,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "KushaKapila",
        url: "https://www.youtube.com/c/KushaKapila",
        followers: 850000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "KushaKapila",
        url: "https://twitter.com/KushaKapila",
        followers: 520000,
        engagement: 6.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "k1",
        platform: "Instagram",
        content: "When your mom asks you to explain what you do for a living for the 100th time 😂 #ContentCreatorLife",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/pqr456/",
        engagement: {
          likes: 450000,
          comments: 12000,
          shares: 18000,
        },
        date: "2023-12-16",
      },
      {
        id: "k2",
        platform: "YouTube",
        content: "A Week in My Life | Behind The Scenes of My New Movie",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=pqr456",
        engagement: {
          likes: 85000,
          comments: 5200,
          views: 950000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "Elle India",
        content:
          "Kusha Kapila has redefined content creation with her authentic voice and sharp social commentary disguised as comedy.",
        sentiment: "positive",
        date: "2023-11-15",
        rating: 4.8,
      },
      {
        source: "Vogue India",
        content:
          "Her successful transition from digital to mainstream entertainment proves her versatility and staying power.",
        sentiment: "positive",
        date: "2023-10-20",
        rating: 4.6,
      },
      {
        source: "Film Companion",
        content:
          "While her acting career is promising, some roles haven't fully showcased her comedic talents that made her famous.",
        sentiment: "neutral",
        date: "2023-09-18",
        rating: 3.9,
      },
    ],
    controversies: [
      {
        title: "Personal Life Scrutiny",
        description: "Faced public scrutiny during her divorce announcement.",
        date: "2023-06-26",
        impact: "medium",
        resolution: "Addressed it maturely and received support from fans and industry",
      },
    ],
    achievements: [
      {
        title: "Filmfare OTT Awards Nomination",
        description: "Nominated for Best Supporting Actress for 'Plan A Plan B'",
        date: "2022-12-21",
        source: "Filmfare",
      },
      {
        title: "Cosmopolitan Influencer of the Year",
        description: "Recognized for innovative content creation",
        date: "2021-11-30",
        source: "Cosmopolitan India",
      },
    ],
    factCheckedContent: 95, // percentage
    audienceAuthenticity: 92, // percentage
    audienceDemographics: {
      age: {
        "13-17": 10,
        "18-24": 35,
        "25-34": 40,
        "35+": 15,
      },
      gender: {
        male: 30,
        female: 68,
        other: 2,
      },
      topCountries: ["India", "USA", "UK", "Canada", "Australia"],
      interests: ["Comedy", "Fashion", "Lifestyle", "Feminism", "Entertainment"],
    },
    brandCollaborations: ["Nykaa", "Netflix", "Amazon Prime", "Maybelline", "H&M"],
    contentConsistency: 88, // 0-100
    growthRate: 15.2, // percentage
    accountAge: 88, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 6,
    name: "Prajakta Koli (MostlySane)",
    username: "mostlysane",
    bio: "Digital content creator, actress and UN ambassador. Known for comedy sketches and social messaging.",
    category: ["Comedy", "Education"],
    subCategory: ["Acting", "Social Activism"],
    location: "Mumbai, India",
    joinedDate: "2015-02-12",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "MostlySane",
        url: "https://www.youtube.com/c/MostlySane",
        followers: 6800000,
        engagement: 8.7,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "mostlysane",
        url: "https://www.instagram.com/mostlysane/",
        followers: 7200000,
        engagement: 7.5,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "MostlySane",
        url: "https://twitter.com/MostlySane",
        followers: 980000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "p1",
        platform: "Instagram",
        content: "New episode of my podcast is out now! Link in bio 🎙️ #WhatsUpWithPrajakta",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/stu789/",
        engagement: {
          likes: 520000,
          comments: 18000,
          shares: 12000,
        },
        date: "2023-12-14",
      },
      {
        id: "p2",
        platform: "YouTube",
        content: "How I Prepared for My First Hollywood Role | Behind The Scenes",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=stu789",
        engagement: {
          likes: 320000,
          comments: 15000,
          views: 2800000,
        },
        date: "2023-12-07",
      },
    ],
    reviews: [
      {
        source: "Forbes 30 Under 30 Asia",
        content:
          "Prajakta Koli has leveraged her influence to create meaningful social impact while maintaining her authentic comedic voice.",
        sentiment: "positive",
        date: "2023-04-20",
        rating: 4.9,
      },
      {
        source: "The Hindu",
        content: "Her transition from YouTube to Netflix shows her versatility as a performer and her global appeal.",
        sentiment: "positive",
        date: "2023-08-15",
        rating: 4.7,
      },
      {
        source: "Digital Media Review",
        content:
          "While her content quality remains high, some recent brand collaborations have seemed less authentic to her core messaging.",
        sentiment: "neutral",
        date: "2023-10-05",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Brand Partnership Criticism",
        description: "Faced criticism for partnering with a brand that had environmental concerns.",
        date: "2022-03-18",
        impact: "low",
        resolution: "Addressed concerns publicly and committed to more thorough brand vetting",
      },
    ],
    achievements: [
      {
        title: "UN Goodwill Ambassador",
        description: "Appointed as UNICEF India's Youth Ambassador",
        date: "2019-11-20",
        source: "UNICEF",
      },
      {
        title: "Daytime Emmy Nomination",
        description: "Nominated for her role in the web series 'Mismatched'",
        date: "2022-05-05",
        source: "Emmy Awards",
      },
      {
        title: "Forbes 30 Under 30 Asia",
        description: "Featured in the Media, Marketing & Advertising category",
        date: "2021-04-20",
        source: "Forbes",
      },
    ],
    factCheckedContent: 96, // percentage
    audienceAuthenticity: 91, // percentage
    audienceDemographics: {
      age: {
        "13-17": 20,
        "18-24": 45,
        "25-34": 25,
        "35+": 10,
      },
      gender: {
        male: 35,
        female: 63,
        other: 2,
      },
      topCountries: ["India", "USA", "UK", "UAE", "Singapore"],
      interests: ["Comedy", "Education", "Social Issues", "Entertainment", "Technology"],
    },
    brandCollaborations: ["Google", "Netflix", "WhatsApp", "Nivea", "Levi's"],
    contentConsistency: 92, // 0-100
    growthRate: 8.5, // percentage
    accountAge: 106, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 7,
    name: "Ranveer Allahbadia (BeerBiceps)",
    username: "beerbiceps",
    bio: "Entrepreneur, podcaster, and fitness enthusiast. Known for self-improvement content and high-profile interviews.",
    category: ["Fitness", "Business"],
    subCategory: ["Podcasting", "Self-improvement"],
    location: "Mumbai, India",
    joinedDate: "2015-09-28",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "BeerBiceps",
        url: "https://www.youtube.com/c/BeerBiceps",
        followers: 4500000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "beerbiceps",
        url: "https://www.instagram.com/beerbiceps/",
        followers: 2800000,
        engagement: 6.5,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "RanveerAllahbad",
        url: "https://twitter.com/RanveerAllahbad",
        followers: 420000,
        engagement: 3.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "r1",
        platform: "YouTube",
        content: "How to Build a Million Dollar Business | Interview with Top Entrepreneur",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=vwx123",
        engagement: {
          likes: 180000,
          comments: 12000,
          views: 2200000,
        },
        date: "2023-12-15",
      },
      {
        id: "r2",
        platform: "Instagram",
        content: "3 habits that changed my life. Swipe to learn more 👉 #SelfImprovement",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/vwx123/",
        engagement: {
          likes: 320000,
          comments: 8500,
          shares: 15000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "Economic Times",
        content:
          "Ranveer Allahbadia has successfully built a content empire that spans multiple platforms and business ventures.",
        sentiment: "positive",
        date: "2023-09-12",
        rating: 4.6,
      },
      {
        source: "Men's Health India",
        content:
          "His fitness content combines scientific research with practical advice, making him a trusted voice in the wellness space.",
        sentiment: "positive",
        date: "2023-07-18",
        rating: 4.5,
      },
      {
        source: "Digital Content Critics",
        content:
          "While his interview skills have improved, some critics note that he can sometimes oversimplify complex topics.",
        sentiment: "neutral",
        date: "2023-11-05",
        rating: 3.7,
      },
    ],
    controversies: [
      {
        title: "Pseudoscientific Claims",
        description: "Criticized for occasionally promoting unverified health and wellness claims.",
        date: "2021-08-10",
        impact: "medium",
        resolution: "Began featuring more medical experts and citing scientific sources",
      },
    ],
    achievements: [
      {
        title: "Entrepreneur of the Year",
        description: "Awarded for his media company Monk Entertainment",
        date: "2022-12-15",
        source: "Business Today",
      },
      {
        title: "Top 25 LinkedIn Voices",
        description: "Recognized for business and entrepreneurship content",
        date: "2021-11-18",
        source: "LinkedIn",
      },
      {
        title: "100 Million Podcast Downloads",
        description: "Milestone achievement for The Ranveer Show",
        date: "2023-05-20",
        source: "Monk Entertainment",
      },
    ],
    factCheckedContent: 85, // percentage
    audienceAuthenticity: 88, // percentage
    audienceDemographics: {
      age: {
        "13-17": 5,
        "18-24": 40,
        "25-34": 45,
        "35+": 10,
      },
      gender: {
        male: 75,
        female: 23,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Fitness", "Business", "Self-improvement", "Technology", "Finance"],
    },
    brandCollaborations: ["OnePlus", "Himalaya", "MuscleBlaze", "Audible", "Wakefit"],
    contentConsistency: 90, // 0-100
    growthRate: 12.8, // percentage
    accountAge: 99, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 8,
    name: "Nikhil Sharma (Mumbiker Nikhil)",
    username: "mumbikernikhil",
    bio: "Motovlogger, travel content creator and entrepreneur. Known for motorcycle tours and lifestyle vlogs.",
    category: ["Travel", "Automotive"],
    subCategory: ["Lifestyle", "Vlogs"],
    location: "Mumbai, India",
    joinedDate: "2014-11-05",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "MumbikerNikhil",
        url: "https://www.youtube.com/c/MumbikerNikhil",
        followers: 3900000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "mumbikernikhil",
        url: "https://www.instagram.com/mumbikernikhil/",
        followers: 2500000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "MumbikerNikhil",
        url: "https://www.facebook.com/MumbikerNikhil",
        followers: 1200000,
        engagement: 4.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "n1",
        platform: "YouTube",
        content: "Riding Through the Himalayas | Day 5 | Extreme Adventure",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=yza123",
        engagement: {
          likes: 250000,
          comments: 18000,
          views: 3500000,
        },
        date: "2023-12-12",
      },
      {
        id: "n2",
        platform: "Instagram",
        content: "New bike reveal coming tomorrow! Can you guess which one? 🏍️ #BikerLife",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/yza123/",
        engagement: {
          likes: 380000,
          comments: 22000,
          shares: 8000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Auto India",
        content:
          "Nikhil Sharma has inspired a generation of motorcycle enthusiasts with his adventurous spirit and accessible content.",
        sentiment: "positive",
        date: "2023-10-15",
        rating: 4.7,
      },
      {
        source: "Travel + Leisure India",
        content:
          "His travel vlogs showcase India's hidden gems and have contributed significantly to domestic tourism.",
        sentiment: "positive",
        date: "2023-08-22",
        rating: 4.6,
      },
      {
        source: "Digital Creator Review",
        content:
          "While his motorcycle content remains strong, some viewers have noted a decline in production quality in recent travel vlogs.",
        sentiment: "neutral",
        date: "2023-11-10",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Traffic Safety Concerns",
        description: "Criticized for occasionally showcasing unsafe riding practices in earlier videos.",
        date: "2019-07-15",
        impact: "medium",
        resolution: "Began emphasizing safety gear and responsible riding in all content",
      },
    ],
    achievements: [
      {
        title: "Influencer of the Year - Automotive",
        description: "Awarded for motorcycle and automotive content",
        date: "2022-09-30",
        source: "Social Media Summit India",
      },
      {
        title: "Successful Apparel Brand Launch",
        description: "Launched motorcycle apparel brand 'Knighthood'",
        date: "2020-06-15",
        source: "Self-owned",
      },
      {
        title: "Featured in Discovery Channel Documentary",
        description: "Highlighted in 'Riders of India' special feature",
        date: "2021-08-12",
        source: "Discovery Channel",
      },
    ],
    factCheckedContent: 88, // percentage
    audienceAuthenticity: 92, // percentage
    audienceDemographics: {
      age: {
        "13-17": 15,
        "18-24": 45,
        "25-34": 30,
        "35+": 10,
      },
      gender: {
        male: 85,
        female: 14,
        other: 1,
      },
      topCountries: ["India", "Nepal", "UAE", "USA", "Bangladesh"],
      interests: ["Motorcycles", "Travel", "Adventure", "Technology", "Lifestyle"],
    },
    brandCollaborations: ["Royal Enfield", "GoPro", "Triumph", "Red Bull", "Airbnb"],
    contentConsistency: 85, // 0-100
    growthRate: 7.5, // percentage
    accountAge: 110, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 9,
    name: "Komal Pandey",
    username: "komalpandeyofficial",
    bio: "Fashion content creator, stylist and model. Known for fashion tips, styling videos and trendsetting looks.",
    category: ["Fashion", "Lifestyle"],
    subCategory: ["Beauty", "Styling"],
    location: "Delhi, India",
    joinedDate: "2016-03-18",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "komalpandeyofficial",
        url: "https://www.instagram.com/komalpandeyofficial/",
        followers: 1800000,
        engagement: 9.2,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "KomalPandey",
        url: "https://www.youtube.com/c/KomalPandey",
        followers: 950000,
        engagement: 7.8,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "KomalPandeyOfficial",
        url: "https://www.facebook.com/KomalPandeyOfficial",
        followers: 520000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "kp1",
        platform: "Instagram",
        content: "5 ways to style your basic white shirt 👚 #FashionTips #Styling",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/bcd789/",
        engagement: {
          likes: 280000,
          comments: 12000,
          shares: 18000,
        },
        date: "2023-12-16",
      },
      {
        id: "kp2",
        platform: "YouTube",
        content: "Winter Lookbook 2023 | 10 Outfits for Every Occasion",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=bcd789",
        engagement: {
          likes: 85000,
          comments: 6200,
          views: 950000,
        },
        date: "2023-12-05",
      },
    ],
    reviews: [
      {
        source: "Vogue India",
        content:
          "Komal Pandey has revolutionized accessible fashion content in India with her creative styling and relatable approach.",
        sentiment: "positive",
        date: "2023-11-20",
        rating: 4.8,
      },
      {
        source: "Elle India",
        content:
          "Her ability to transform basic pieces into high-fashion looks has made her an indispensable resource for fashion-forward millennials.",
        sentiment: "positive",
        date: "2023-09-15",
        rating: 4.7,
      },
      {
        source: "Fashion Critics India",
        content:
          "While her styling tips are innovative, some outfits may not be practical for everyday wear for her average viewer.",
        sentiment: "neutral",
        date: "2023-10-08",
        rating: 3.9,
      },
    ],
    controversies: [
      {
        title: "Fast Fashion Promotion",
        description: "Criticized for promoting unsustainable fast fashion brands.",
        date: "2022-04-22",
        impact: "low",
        resolution: "Began featuring more sustainable brands and second-hand fashion",
      },
    ],
    achievements: [
      {
        title: "Cosmopolitan Fashion Influencer Award",
        description: "Recognized for innovative fashion content",
        date: "2022-11-15",
        source: "Cosmopolitan India",
      },
      {
        title: "Launched Fashion Masterclass",
        description: "Created successful online styling course",
        date: "2021-08-10",
        source: "Self-produced",
      },
      {
        title: "Collaborated with Major Fashion Brand",
        description: "Designed capsule collection for H&M India",
        date: "2023-03-25",
        source: "H&M",
      },
    ],
    factCheckedContent: 92, // percentage
    audienceAuthenticity: 88, // percentage
    audienceDemographics: {
      age: {
        "13-17": 20,
        "18-24": 50,
        "25-34": 25,
        "35+": 5,
      },
      gender: {
        male: 15,
        female: 83,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Singapore"],
      interests: ["Fashion", "Beauty", "Lifestyle", "Shopping", "Photography"],
    },
    brandCollaborations: ["H&M", "Nykaa", "Myntra", "Lakme", "Zara"],
    contentConsistency: 94, // 0-100
    growthRate: 15.5, // percentage
    accountAge: 93, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 10,
    name: "Gaurav Taneja (Flying Beast)",
    username: "flyingbeast320",
    bio: "Pilot, fitness enthusiast, and family vlogger. Known for fitness advice, aviation insights, and daily vlogs.",
    category: ["Fitness", "Lifestyle"],
    subCategory: ["Aviation", "Family"],
    location: "Delhi, India",
    joinedDate: "2017-01-15",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "FlyingBeast",
        url: "https://www.youtube.com/c/FlyingBeast",
        followers: 7500000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "flyingbeast320",
        url: "https://www.instagram.com/flyingbeast320/",
        followers: 3200000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "FlyingBeast320",
        url: "https://www.facebook.com/FlyingBeast320",
        followers: 1500000,
        engagement: 5.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "g1",
        platform: "YouTube",
        content: "A Day in the Life of a Pilot | Behind the Scenes",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=efg123",
        engagement: {
          likes: 450000,
          comments: 32000,
          views: 5800000,
        },
        date: "2023-12-14",
      },
      {
        id: "g2",
        platform: "Instagram",
        content: "My 30-day transformation challenge starts tomorrow! Join me 💪 #FitnessJourney",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/efg123/",
        engagement: {
          likes: 520000,
          comments: 18000,
          shares: 12000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Fitness Magazine India",
        content:
          "Gaurav Taneja combines scientific knowledge with practical fitness advice, making him a trusted voice in the wellness community.",
        sentiment: "positive",
        date: "2023-10-12",
        rating: 4.6,
      },
      {
        source: "Family Vlogger Review",
        content:
          "His family content strikes a good balance between entertainment and authenticity, showcasing real family moments.",
        sentiment: "positive",
        date: "2023-08-25",
        rating: 4.5,
      },
      {
        source: "Digital Content Critics",
        content:
          "While his fitness advice is sound, some aviation explanations have been criticized for oversimplification of complex topics.",
        sentiment: "neutral",
        date: "2023-11-18",
        rating: 3.7,
      },
    ],
    controversies: [
      {
        title: "Airline Dispute",
        description: "Public dispute with former employer airline over safety concerns.",
        date: "2020-06-15",
        impact: "high",
        resolution: "Legal matters settled; continued to advocate for aviation safety",
      },
      {
        title: "Religious Controversy",
        description: "Faced criticism for certain religious statements on social media.",
        date: "2022-07-10",
        impact: "medium",
        resolution: "Clarified statements and focused on non-controversial content",
      },
    ],
    achievements: [
      {
        title: "Commercial Pilot License",
        description: "Qualified as commercial airline pilot",
        date: "2015-05-20",
        source: "DGCA India",
      },
      {
        title: "YouTube Creator Award",
        description: "Received Diamond Play Button for 10M subscribers",
        date: "2022-08-15",
        source: "YouTube",
      },
      {
        title: "Fitness Influencer of the Year",
        description: "Awarded for fitness content and impact",
        date: "2021-12-10",
        source: "Fit India Movement",
      },
    ],
    factCheckedContent: 86, // percentage
    audienceAuthenticity: 90, // percentage
    audienceDemographics: {
      age: {
        "13-17": 15,
        "18-24": 35,
        "25-34": 35,
        "35+": 15,
      },
      gender: {
        male: 70,
        female: 28,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Nepal"],
      interests: ["Fitness", "Aviation", "Family", "Lifestyle", "Travel"],
    },
    brandCollaborations: ["HealthifyMe", "Cult.fit", "Decathlon", "MuscleBlaze", "GoPro"],
    contentConsistency: 88, // 0-100
    growthRate: 9.5, // percentage
    accountAge: 83, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 11,
    name: "Ankur Warikoo",
    username: "warikoo",
    bio: "Entrepreneur, author, and educator. Known for personal finance, career advice, and entrepreneurship content.",
    category: ["Business", "Education"],
    subCategory: ["Finance", "Self-improvement"],
    location: "Gurgaon, India",
    joinedDate: "2016-05-10",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "AnkurWarikoo",
        url: "https://www.youtube.com/c/AnkurWarikoo",
        followers: 2800000,
        engagement: 9.5,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "warikoo",
        url: "https://www.instagram.com/warikoo/",
        followers: 1500000,
        engagement: 8.2,
        verified: true,
      },
      {
        platform: "LinkedIn",
        handle: "warikoo",
        url: "https://www.linkedin.com/in/warikoo/",
        followers: 950000,
        engagement: 7.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "aw1",
        platform: "YouTube",
        content: "5 Investment Mistakes I Made in My 20s | Personal Finance Tips",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=hij123",
        engagement: {
          likes: 180000,
          comments: 12000,
          views: 2200000,
        },
        date: "2023-12-15",
      },
      {
        id: "aw2",
        platform: "Instagram",
        content: "The one habit that changed my life. Swipe to learn more 👉 #ProductivityTips",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/hij123/",
        engagement: {
          likes: 120000,
          comments: 8500,
          shares: 15000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "Economic Times",
        content:
          "Ankur Warikoo has democratized financial education in India with his accessible approach to complex money concepts.",
        sentiment: "positive",
        date: "2023-09-18",
        rating: 4.8,
      },
      {
        source: "Business Today",
        content:
          "His entrepreneurial insights come from real-world experience, making him one of the most credible voices in the startup ecosystem.",
        sentiment: "positive",
        date: "2023-07-22",
        rating: 4.7,
      },
      {
        source: "Financial Education Review",
        content:
          "While his advice is generally sound, some critics note that his investment strategies may be too conservative for younger audiences.",
        sentiment: "neutral",
        date: "2023-10-15",
        rating: 4.0,
      },
    ],
    controversies: [
      {
        title: "Startup Failure Transparency",
        description: "Questions raised about full transparency regarding past startup failures.",
        date: "2021-03-12",
        impact: "low",
        resolution: "Published detailed article addressing the failures and lessons learned",
      },
    ],
    achievements: [
      {
        title: "Bestselling Author",
        description: "Published bestselling book 'Do Epic Shit'",
        date: "2021-12-01",
        source: "Penguin Random House",
      },
      {
        title: "TEDx Speaker",
        description: "Multiple TEDx talks on entrepreneurship and career development",
        date: "2020-08-15",
        source: "TEDx",
      },
      {
        title: "Top LinkedIn Creator",
        description: "Recognized as one of LinkedIn's Top Voices in India",
        date: "2022-11-10",
        source: "LinkedIn",
      },
    ],
    factCheckedContent: 95, // percentage
    audienceAuthenticity: 93, // percentage
    audienceDemographics: {
      age: {
        "13-17": 5,
        "18-24": 35,
        "25-34": 45,
        "35+": 15,
      },
      gender: {
        male: 65,
        female: 33,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "Singapore", "UK"],
      interests: ["Finance", "Entrepreneurship", "Career Development", "Education", "Technology"],
    },
    brandCollaborations: ["Groww", "CRED", "Zerodha", "Audible", "LinkedIn"],
    contentConsistency: 96, // 0-100
    growthRate: 18.5, // percentage
    accountAge: 91, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 12,
    name: "Dolly Singh",
    username: "dollysingh",
    bio: "Comedian, actress and content creator. Known for character sketches, comedy videos and fashion content.",
    category: ["Comedy", "Fashion"],
    subCategory: ["Acting", "Lifestyle"],
    location: "Mumbai, India",
    joinedDate: "2017-08-22",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "dollysingh",
        url: "https://www.instagram.com/dollysingh/",
        followers: 1700000,
        engagement: 8.8,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "DollySingh",
        url: "https://www.youtube.com/c/DollySingh",
        followers: 850000,
        engagement: 7.5,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "DollySingh",
        url: "https://twitter.com/DollySingh",
        followers: 320000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "ds1",
        platform: "Instagram",
        content: "When your mom finds out you've been lying about your location 😂 #RelatableContent",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/klm456/",
        engagement: {
          likes: 350000,
          comments: 15000,
          shares: 28000,
        },
        date: "2023-12-16",
      },
      {
        id: "ds2",
        platform: "YouTube",
        content: "Types of People at Indian Weddings | Funny Sketch",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=klm456",
        engagement: {
          likes: 120000,
          comments: 8500,
          views: 1800000,
        },
        date: "2023-12-05",
      },
    ],
    reviews: [
      {
        source: "Filmfare",
        content:
          "Dolly Singh has carved a unique niche with her character-based comedy that resonates across demographics.",
        sentiment: "positive",
        date: "2023-11-10",
        rating: 4.7,
      },
      {
        source: "Fashion India",
        content:
          "Her fashion content breaks stereotypes and promotes body positivity while maintaining a strong comedic voice.",
        sentiment: "positive",
        date: "2023-09-22",
        rating: 4.6,
      },
      {
        source: "Digital Content Review",
        content:
          "While her character sketches are innovative, some recent brand integrations have felt forced and inauthentic.",
        sentiment: "neutral",
        date: "2023-10-15",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Offensive Joke Controversy",
        description: "Faced backlash for a joke considered insensitive to certain communities.",
        date: "2021-05-18",
        impact: "medium",
        resolution: "Issued public apology and removed the content",
      },
    ],
    achievements: [
      {
        title: "Filmfare OTT Awards Nomination",
        description: "Nominated for Best Supporting Actress for web series role",
        date: "2022-12-10",
        source: "Filmfare",
      },
      {
        title: "Elle India Digital Influencer Award",
        description: "Recognized for comedy and fashion content",
        date: "2021-10-15",
        source: "Elle India",
      },
      {
        title: "Featured in Netflix Comedy Special",
        description: "Participated in 'Comedy Premium League'",
        date: "2021-08-20",
        source: "Netflix",
      },
    ],
    factCheckedContent: 90, // percentage
    audienceAuthenticity: 87, // percentage
    audienceDemographics: {
      age: {
        "13-17": 20,
        "18-24": 45,
        "25-34": 25,
        "35+": 10,
      },
      gender: {
        male: 35,
        female: 63,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Comedy", "Fashion", "Entertainment", "Lifestyle", "Beauty"],
    },
    brandCollaborations: ["Nykaa", "Myntra", "Netflix", "Amazon Prime", "Maybelline"],
    contentConsistency: 85, // 0-100
    growthRate: 14.2, // percentage
    accountAge: 76, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 13,
    name: "Sejal Kumar",
    username: "sejalkumar1195",
    bio: "Fashion and lifestyle content creator, singer, and actress. Known for fashion tips, travel vlogs, and music videos.",
    category: ["Fashion", "Music"],
    subCategory: ["Travel", "Lifestyle"],
    location: "Delhi, India",
    joinedDate: "2014-07-15",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "SejalsLife",
        url: "https://www.youtube.com/c/SejalsLife",
        followers: 1500000,
        engagement: 7.8,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "sejalkumar1195",
        url: "https://www.instagram.com/sejalkumar1195/",
        followers: 1200000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "sejalkumar",
        url: "https://twitter.com/sejalkumar",
        followers: 250000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "sk1",
        platform: "YouTube",
        content: "My Europe Travel Diary | Paris, London, Barcelona | Travel Vlog",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=nop789",
        engagement: {
          likes: 85000,
          comments: 5200,
          views: 950000,
        },
        date: "2023-12-12",
      },
      {
        id: "sk2",
        platform: "Instagram",
        content: "New music video dropping next week! So excited to share this with you all 🎵 #NewMusic",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/nop789/",
        engagement: {
          likes: 180000,
          comments: 8500,
          shares: 5000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Vogue India",
        content:
          "Sejal Kumar has evolved from a college fashion vlogger to a multifaceted creator with a distinct voice in fashion and music.",
        sentiment: "positive",
        date: "2023-10-20",
        rating: 4.5,
      },
      {
        source: "Rolling Stone India",
        content:
          "Her music showcases genuine talent and emotional depth, setting her apart from other influencers venturing into music.",
        sentiment: "positive",
        date: "2023-08-15",
        rating: 4.3,
      },
      {
        source: "Digital Creator Review",
        content:
          "While her fashion content remains strong, her travel vlogs could benefit from more cultural context and less focus on aesthetics.",
        sentiment: "neutral",
        date: "2023-11-05",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Content Authenticity Questions",
        description: "Faced questions about the authenticity of certain sponsored content.",
        date: "2022-02-10",
        impact: "low",
        resolution: "Increased transparency in sponsored content disclosures",
      },
    ],
    achievements: [
      {
        title: "Cosmopolitan Influencer Award",
        description: "Recognized for fashion and lifestyle content",
        date: "2021-11-18",
        source: "Cosmopolitan India",
      },
      {
        title: "Released Original Music",
        description: "Launched successful singles on major streaming platforms",
        date: "2022-05-20",
        source: "Spotify",
      },
      {
        title: "Featured in Web Series",
        description: "Acted in Amazon Prime original series",
        date: "2023-02-15",
        source: "Amazon Prime Video",
      },
    ],
    factCheckedContent: 89, // percentage
    audienceAuthenticity: 85, // percentage
    audienceDemographics: {
      age: {
        "13-17": 25,
        "18-24": 45,
        "25-34": 25,
        "35+": 5,
      },
      gender: {
        male: 30,
        female: 68,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Fashion", "Music", "Travel", "Lifestyle", "Beauty"],
    },
    brandCollaborations: ["H&M", "Nykaa", "Spotify", "Maybelline", "MakeMyTrip"],
    contentConsistency: 82, // 0-100
    growthRate: 8.5, // percentage
    accountAge: 113, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 14,
    name: "Tanmay Bhat",
    username: "tanmaybhat",
    bio: "Comedian, content creator, and entrepreneur. Co-founder of AIB and known for comedy, gaming, and cryptocurrency content.",
    category: ["Comedy", "Gaming"],
    subCategory: ["Finance", "Entertainment"],
    location: "Mumbai, India",
    joinedDate: "2009-06-10",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "TanmayBhat",
        url: "https://www.youtube.com/c/TanmayBhat",
        followers: 4800000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "tanmaybhat",
        url: "https://www.instagram.com/tanmaybhat/",
        followers: 1500000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Twitter",
        handle: "thetanmay",
        url: "https://twitter.com/thetanmay",
        followers: 3200000,
        engagement: 6.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "tb1",
        platform: "YouTube",
        content: "I Interviewed a Billionaire About Crypto | Financial Advice",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=qrs123",
        engagement: {
          likes: 250000,
          comments: 18000,
          views: 3500000,
        },
        date: "2023-12-15",
      },
      {
        id: "tb2",
        platform: "Instagram",
        content: "When your mom walks in during a Zoom call 😂 #RelatableContent",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/qrs123/",
        engagement: {
          likes: 380000,
          comments: 22000,
          shares: 45000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "The Indian Express",
        content:
          "Tanmay Bhat has successfully reinvented himself multiple times, showing remarkable adaptability in the evolving digital landscape.",
        sentiment: "positive",
        date: "2023-09-15",
        rating: 4.6,
      },
      {
        source: "Economic Times",
        content:
          "His cryptocurrency and financial content has made complex topics accessible to younger audiences, though experts caution about some simplifications.",
        sentiment: "neutral",
        date: "2023-07-22",
        rating: 3.9,
      },
      {
        source: "Gaming Today India",
        content:
          "His gaming streams showcase authentic reactions and genuine enthusiasm, making him a relatable figure in the gaming community.",
        sentiment: "positive",
        date: "2023-11-10",
        rating: 4.5,
      },
    ],
    controversies: [
      {
        title: "AIB Controversy",
        description: "Faced significant backlash during the #MeToo movement related to AIB.",
        date: "2018-10-05",
        impact: "high",
        resolution: "Stepped down from AIB, later addressed issues and rebuilt career",
      },
      {
        title: "Cryptocurrency Promotion Criticism",
        description: "Criticized for promoting certain cryptocurrencies without adequate disclaimers.",
        date: "2021-05-18",
        impact: "medium",
        resolution: "Added more comprehensive disclaimers and educational content",
      },
    ],
    achievements: [
      {
        title: "YouTube Creator Award",
        description: "Received Gold Play Button for 1M subscribers",
        date: "2019-08-15",
        source: "YouTube",
      },
      {
        title: "Forbes 30 Under 30",
        description: "Featured in Media, Marketing & Advertising category",
        date: "2016-02-15",
        source: "Forbes India",
      },
      {
        title: "Successful Podcast Launch",
        description: "Created popular 'Honest Talks' podcast series",
        date: "2020-07-10",
        source: "Spotify",
      },
    ],
    factCheckedContent: 82, // percentage
    audienceAuthenticity: 88, // percentage
    audienceDemographics: {
      age: {
        "13-17": 15,
        "18-24": 45,
        "25-34": 30,
        "35+": 10,
      },
      gender: {
        male: 75,
        female: 23,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Comedy", "Gaming", "Cryptocurrency", "Entertainment", "Technology"],
    },
    brandCollaborations: ["Dream11", "Coinswitch", "Netflix", "Lenovo", "Spotify"],
    contentConsistency: 78, // 0-100
    growthRate: 9.5, // percentage
    accountAge: 174, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 15,
    name: "Kritika Khurana (That Boho Girl)",
    username: "thatbohogirl",
    bio: "Fashion and lifestyle blogger known for bohemian style, travel content, and fashion tips.",
    category: ["Fashion", "Travel"],
    subCategory: ["Beauty", "Lifestyle"],
    location: "Delhi, India",
    joinedDate: "2015-03-18",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "thatbohogirl",
        url: "https://www.instagram.com/thatbohogirl/",
        followers: 1900000,
        engagement: 8.8,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "ThatBohoGirl",
        url: "https://www.youtube.com/c/ThatBohoGirl",
        followers: 850000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "ThatBohoGirl",
        url: "https://www.facebook.com/ThatBohoGirl",
        followers: 520000,
        engagement: 4.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "kk1",
        platform: "Instagram",
        content: "5 ways to style a basic white tee for summer ☀️ #FashionTips",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/tuv456/",
        engagement: {
          likes: 250000,
          comments: 12000,
          shares: 18000,
        },
        date: "2023-12-16",
      },
      {
        id: "kk2",
        platform: "YouTube",
        content: "Bali Travel Guide | Hidden Gems & Must Visit Places | Travel Vlog",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=tuv456",
        engagement: {
          likes: 75000,
          comments: 4800,
          views: 850000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Vogue India",
        content:
          "Kritika Khurana has defined bohemian fashion for a generation of Indian women with her accessible styling and travel aesthetics.",
        sentiment: "positive",
        date: "2023-10-15",
        rating: 4.7,
      },
      {
        source: "Travel + Leisure India",
        content:
          "Her travel content combines fashion with authentic experiences, creating a unique niche in the travel content space.",
        sentiment: "positive",
        date: "2023-08-22",
        rating: 4.5,
      },
      {
        source: "Fashion Critics India",
        content:
          "While her bohemian aesthetic is consistent, there has been limited evolution in her style over the years.",
        sentiment: "neutral",
        date: "2023-11-10",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Content Originality Questions",
        description: "Faced accusations of copying content ideas from international creators.",
        date: "2021-06-15",
        impact: "low",
        resolution: "Addressed concerns and diversified content approach",
      },
    ],
    achievements: [
      {
        title: "Cosmopolitan Fashion Influencer Award",
        description: "Recognized for bohemian fashion influence",
        date: "2022-11-15",
        source: "Cosmopolitan India",
      },
      {
        title: "Launched Fashion Brand",
        description: "Created successful clothing line 'Boho Closet'",
        date: "2020-08-10",
        source: "Self-owned",
      },
      {
        title: "Featured in Vogue",
        description: "Profiled as emerging fashion influencer",
        date: "2019-05-20",
        source: "Vogue India",
      },
    ],
    factCheckedContent: 90, // percentage
    audienceAuthenticity: 86, // percentage
    audienceDemographics: {
      age: {
        "13-17": 20,
        "18-24": 50,
        "25-34": 25,
        "35+": 5,
      },
      gender: {
        male: 15,
        female: 83,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Australia"],
      interests: ["Fashion", "Travel", "Beauty", "Lifestyle", "Photography"],
    },
    brandCollaborations: ["H&M", "Nykaa", "MakeMyTrip", "Lakme", "Myntra"],
    contentConsistency: 92, // 0-100
    growthRate: 12.5, // percentage
    accountAge: 105, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 16,
    name: "Ashish Chanchlani",
    username: "ashishchanchlani",
    bio: "Comedian and content creator known for comedy sketches, parodies, and relatable humor videos.",
    category: ["Comedy", "Entertainment"],
    subCategory: ["Parody", "Sketches"],
    location: "Mumbai, India",
    joinedDate: "2014-12-05",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "ashishchanchlani",
        url: "https://www.youtube.com/c/ashishchanchlani",
        followers: 28500000,
        engagement: 9.2,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "ashishchanchlani",
        url: "https://www.instagram.com/ashishchanchlani/",
        followers: 15200000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "AshishChanchlani",
        url: "https://www.facebook.com/AshishChanchlani",
        followers: 5800000,
        engagement: 6.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "ac1",
        platform: "YouTube",
        content: "Types of Students During Exams | Comedy Sketch",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=wxy123",
        engagement: {
          likes: 1500000,
          comments: 85000,
          views: 22000000,
        },
        date: "2023-12-12",
      },
      {
        id: "ac2",
        platform: "Instagram",
        content: "When mom finds your report card 😂 #RelatableContent",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/wxy123/",
        engagement: {
          likes: 2800000,
          comments: 120000,
          shares: 350000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "Hindustan Times",
        content:
          "Ashish Chanchlani has mastered the art of relatable comedy that resonates with the Indian youth across demographics.",
        sentiment: "positive",
        date: "2023-10-18",
        rating: 4.8,
      },
      {
        source: "Film Companion",
        content:
          "His sketch comedy shows impressive production quality and acting range that sets him apart from other digital comedians.",
        sentiment: "positive",
        date: "2023-08-25",
        rating: 4.6,
      },
      {
        source: "Digital Content Critics",
        content:
          "While his comedy is widely popular, some critics note that certain jokes rely on stereotypes that could be considered outdated.",
        sentiment: "neutral",
        date: "2023-11-15",
        rating: 3.7,
      },
    ],
    controversies: [
      {
        title: "Offensive Content Criticism",
        description: "Faced criticism for certain jokes considered insensitive to specific communities.",
        date: "2020-07-18",
        impact: "medium",
        resolution: "Apologized and evolved content approach to be more inclusive",
      },
    ],
    achievements: [
      {
        title: "YouTube Creator Award",
        description: "Received Diamond Play Button for 10M subscribers",
        date: "2019-05-15",
        source: "YouTube",
      },
      {
        title: "Filmfare OTT Awards",
        description: "Won for Best Comedy Performance",
        date: "2021-12-10",
        source: "Filmfare",
      },
      {
        title: "Forbes 30 Under 30 Asia",
        description: "Featured in Media, Marketing & Advertising category",
        date: "2020-04-20",
        source: "Forbes",
      },
    ],
    factCheckedContent: 85, // percentage
    audienceAuthenticity: 90, // percentage
    audienceDemographics: {
      age: {
        "13-17": 30,
        "18-24": 45,
        "25-34": 20,
        "35+": 5,
      },
      gender: {
        male: 65,
        female: 33,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "Nepal", "Bangladesh"],
      interests: ["Comedy", "Entertainment", "Movies", "Gaming", "Social Media"],
    },
    brandCollaborations: ["Netflix", "Amazon Prime", "Pepsi", "Lays", "OnePlus"],
    contentConsistency: 88, // 0-100
    growthRate: 7.5, // percentage
    accountAge: 108, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 17,
    name: "Diipa Büller-Khosla",
    username: "diipakhosla",
    bio: "International fashion influencer, entrepreneur, and activist. Known for luxury fashion, beauty content, and social causes.",
    category: ["Fashion", "Lifestyle"],
    subCategory: ["Beauty", "Social Impact"],
    location: "Amsterdam/Mumbai",
    joinedDate: "2015-05-12",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "diipakhosla",
        url: "https://www.instagram.com/diipakhosla/",
        followers: 1700000,
        engagement: 7.8,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "DiipaBullerKhosla",
        url: "https://www.youtube.com/c/DiipaBullerKhosla",
        followers: 450000,
        engagement: 6.5,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "DiipaBullerKhosla",
        url: "https://www.facebook.com/DiipaBullerKhosla",
        followers: 320000,
        engagement: 4.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "dk1",
        platform: "Instagram",
        content: "Paris Fashion Week highlights ✨ #PFW #FashionWeek",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/zab789/",
        engagement: {
          likes: 180000,
          comments: 8500,
          shares: 12000,
        },
        date: "2023-12-15",
      },
      {
        id: "dk2",
        platform: "YouTube",
        content: "My Skincare Secrets | Morning Routine 2023",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=zab789",
        engagement: {
          likes: 45000,
          comments: 3200,
          views: 650000,
        },
        date: "2023-12-05",
      },
    ],
    reviews: [
      {
        source: "Vogue Global",
        content:
          "Diipa Büller-Khosla represents a new generation of global Indian influencers who seamlessly blend Eastern and Western fashion sensibilities.",
        sentiment: "positive",
        date: "2023-09-20",
        rating: 4.8,
      },
      {
        source: "Harper's Bazaar",
        content:
          "Her advocacy work for women's issues adds depth to her fashion content, making her more than just a style icon.",
        sentiment: "positive",
        date: "2023-07-15",
        rating: 4.7,
      },
      {
        source: "Fashion Critics International",
        content:
          "While her luxury content is aspirational, it may be disconnected from the reality of most of her Indian audience.",
        sentiment: "neutral",
        date: "2023-10-28",
        rating: 3.9,
      },
    ],
    controversies: [
      {
        title: "Cultural Appropriation Debate",
        description: "Sparked debate about cultural representation in certain fashion choices.",
        date: "2021-03-25",
        impact: "low",
        resolution: "Engaged in constructive dialogue about cultural sensitivity in fashion",
      },
    ],
    achievements: [
      {
        title: "Founded indē wild",
        description: "Launched successful Ayurvedic beauty brand",
        date: "2021-09-22",
        source: "Self-owned",
      },
      {
        title: "UN Women Advocate",
        description: "Appointed as advocate for gender equality",
        date: "2020-03-08",
        source: "United Nations",
      },
      {
        title: "Cannes Film Festival Appearance",
        description: "First Indian influencer on Cannes red carpet",
        date: "2019-05-18",
        source: "Cannes Film Festival",
      },
    ],
    factCheckedContent: 92, // percentage
    audienceAuthenticity: 85, // percentage
    audienceDemographics: {
      age: {
        "13-17": 10,
        "18-24": 35,
        "25-34": 45,
        "35+": 10,
      },
      gender: {
        male: 20,
        female: 78,
        other: 2,
      },
      topCountries: ["India", "USA", "UK", "Netherlands", "UAE"],
      interests: ["Luxury Fashion", "Beauty", "Travel", "Women's Empowerment", "Culture"],
    },
    brandCollaborations: ["Dior", "Estée Lauder", "Fendi", "L'Oréal Paris", "Bulgari"],
    contentConsistency: 90, // 0-100
    growthRate: 15.2, // percentage
    accountAge: 103, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 18,
    name: "Harsh Beniwal",
    username: "harshbeniwal",
    bio: "Comedian and actor known for comedy sketches, vines, and relatable humor videos focused on Delhi life.",
    category: ["Comedy", "Entertainment"],
    subCategory: ["Acting", "Vlogs"],
    location: "Delhi, India",
    joinedDate: "2015-08-18",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "HarshBeniwal",
        url: "https://www.youtube.com/c/HarshBeniwal",
        followers: 15200000,
        engagement: 8.8,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "harshbeniwal",
        url: "https://www.instagram.com/harshbeniwal/",
        followers: 7500000,
        engagement: 7.5,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "HarshBeniwal",
        url: "https://www.facebook.com/HarshBeniwal",
        followers: 3200000,
        engagement: 5.2,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "hb1",
        platform: "YouTube",
        content: "When You Meet Your Ex | Comedy Sketch",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=cde123",
        engagement: {
          likes: 850000,
          comments: 45000,
          views: 12000000,
        },
        date: "2023-12-14",
      },
      {
        id: "hb2",
        platform: "Instagram",
        content: "Delhi boys be like... 😂 #DelhiLife #Comedy",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/cde123/",
        engagement: {
          likes: 1200000,
          comments: 35000,
          shares: 180000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "The Indian Express",
        content:
          "Harsh Beniwal's comedy captures the essence of Delhi youth culture with authenticity and sharp observational humor.",
        sentiment: "positive",
        date: "2023-09-15",
        rating: 4.6,
      },
      {
        source: "Filmfare",
        content: "His transition from social media sketches to mainstream films shows his versatility as a performer.",
        sentiment: "positive",
        date: "2023-07-22",
        rating: 4.4,
      },
      {
        source: "Digital Content Review",
        content:
          "While his Delhi-centric humor resonates with his core audience, it may limit his appeal to more diverse or international viewers.",
        sentiment: "neutral",
        date: "2023-11-10",
        rating: 3.8,
      },
    ],
    controversies: [
      {
        title: "Language Concerns",
        description: "Criticized for occasional use of inappropriate language in earlier content.",
        date: "2019-05-12",
        impact: "low",
        resolution: "Evolved content to be more family-friendly while maintaining authenticity",
      },
    ],
    achievements: [
      {
        title: "YouTube Creator Award",
        description: "Received Diamond Play Button for 10M subscribers",
        date: "2021-06-15",
        source: "YouTube",
      },
      {
        title: "Bollywood Debut",
        description: "Featured in 'Student of the Year 2'",
        date: "2019-05-10",
        source: "Dharma Productions",
      },
      {
        title: "Most Viral Video of the Year",
        description: "Won for comedy sketch 'Delhi University Life'",
        date: "2020-12-18",
        source: "Social Media Summit India",
      },
    ],
    factCheckedContent: 86, // percentage
    audienceAuthenticity: 92, // percentage
    audienceDemographics: {
      age: {
        "13-17": 25,
        "18-24": 45,
        "25-34": 25,
        "35+": 5,
      },
      gender: {
        male: 70,
        female: 28,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Canada"],
      interests: ["Comedy", "Entertainment", "Delhi Culture", "Movies", "College Life"],
    },
    brandCollaborations: ["Pepsi", "Myntra", "Xiaomi", "Domino's", "Spotify"],
    contentConsistency: 85, // 0-100
    growthRate: 9.2, // percentage
    accountAge: 100, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 19,
    name: "Siddharth Batra",
    username: "siddharth93batra",
    bio: "Men's fashion influencer and stylist known for affordable fashion tips, styling videos, and grooming advice.",
    category: ["Fashion", "Lifestyle"],
    subCategory: ["Grooming", "Styling"],
    location: "Delhi, India",
    joinedDate: "2016-11-22",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "Instagram",
        handle: "siddharth93batra",
        url: "https://www.instagram.com/siddharth93batra/",
        followers: 1200000,
        engagement: 8.5,
        verified: true,
      },
      {
        platform: "YouTube",
        handle: "SiddharthBatra",
        url: "https://www.youtube.com/c/SiddharthBatra",
        followers: 580000,
        engagement: 7.2,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "SiddharthBatra",
        url: "https://www.facebook.com/SiddharthBatra",
        followers: 320000,
        engagement: 4.5,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "sb1",
        platform: "Instagram",
        content: "5 winter essentials every man needs in his wardrobe 🧣 #MensFashion #WinterStyle",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/fgh456/",
        engagement: {
          likes: 150000,
          comments: 8500,
          shares: 12000,
        },
        date: "2023-12-16",
      },
      {
        id: "sb2",
        platform: "YouTube",
        content: "How to Style One Shirt in 7 Different Ways | Budget Fashion Tips",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=fgh456",
        engagement: {
          likes: 65000,
          comments: 4200,
          views: 750000,
        },
        date: "2023-12-08",
      },
    ],
    reviews: [
      {
        source: "GQ India",
        content:
          "Siddharth Batra has democratized men's fashion in India with his accessible styling tips and budget-friendly approach.",
        sentiment: "positive",
        date: "2023-10-15",
        rating: 4.7,
      },
      {
        source: "Men's Health India",
        content:
          "His grooming advice combines traditional wisdom with modern techniques, making him a trusted voice in men's personal care.",
        sentiment: "positive",
        date: "2023-08-22",
        rating: 4.5,
      },
      {
        source: "Fashion Critics India",
        content:
          "While his styling tips are practical, some critics note a lack of experimental or avant-garde fashion in his content.",
        sentiment: "neutral",
        date: "2023-11-10",
        rating: 3.9,
      },
    ],
    controversies: [
      {
        title: "Sponsored Content Transparency",
        description: "Questions raised about clear disclosure of sponsored content.",
        date: "2021-05-18",
        impact: "low",
        resolution: "Improved disclosure practices and transparency",
      },
    ],
    achievements: [
      {
        title: "GQ Men of the Year",
        description: "Recognized in Digital Influence category",
        date: "2022-10-15",
        source: "GQ India",
      },
      {
        title: "Launched Styling Masterclass",
        description: "Created successful online men's styling course",
        date: "2021-07-10",
        source: "Self-produced",
      },
      {
        title: "Collaborated with Major Fashion Brand",
        description: "Designed capsule collection for Myntra",
        date: "2023-02-25",
        source: "Myntra",
      },
    ],
    factCheckedContent: 90, // percentage
    audienceAuthenticity: 87, // percentage
    audienceDemographics: {
      age: {
        "13-17": 15,
        "18-24": 45,
        "25-34": 35,
        "35+": 5,
      },
      gender: {
        male: 85,
        female: 13,
        other: 2,
      },
      topCountries: ["India", "UAE", "USA", "UK", "Canada"],
      interests: ["Men's Fashion", "Grooming", "Lifestyle", "Fitness", "Shopping"],
    },
    brandCollaborations: ["H&M", "Beardo", "Myntra", "Philips", "Nivea Men"],
    contentConsistency: 92, // 0-100
    growthRate: 14.5, // percentage
    accountAge: 85, // in months
    lastUpdated: "2023-12-20",
  },
  {
    id: 20,
    name: "Kabita Singh (Kabita's Kitchen)",
    username: "kabitaskitchen",
    bio: "Food content creator and chef known for simple, easy-to-follow Indian recipes and cooking tutorials.",
    category: ["Food", "Cooking"],
    subCategory: ["Recipes", "Tutorials"],
    location: "Noida, India",
    joinedDate: "2014-08-15",
    profileImage: "/placeholder.svg?height=400&width=400",
    coverImage: "/placeholder.svg?height=400&width=1200",
    socialStats: [
      {
        platform: "YouTube",
        handle: "KabitasKitchen",
        url: "https://www.youtube.com/c/KabitasKitchen",
        followers: 12500000,
        engagement: 9.2,
        verified: true,
      },
      {
        platform: "Instagram",
        handle: "kabitaskitchen",
        url: "https://www.instagram.com/kabitaskitchen/",
        followers: 2800000,
        engagement: 7.5,
        verified: true,
      },
      {
        platform: "Facebook",
        handle: "KabitasKitchen",
        url: "https://www.facebook.com/KabitasKitchen",
        followers: 4500000,
        engagement: 6.8,
        verified: true,
      },
    ],
    recentPosts: [
      {
        id: "kk1",
        platform: "YouTube",
        content: "Perfect Butter Chicken Recipe | Restaurant Style at Home",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.youtube.com/watch?v=ijk789",
        engagement: {
          likes: 350000,
          comments: 22000,
          views: 4800000,
        },
        date: "2023-12-15",
      },
      {
        id: "kk2",
        platform: "Instagram",
        content: "5-minute breakfast recipe for busy mornings 🍳 #QuickRecipe #BreakfastIdeas",
        imageUrl: "/placeholder.svg?height=200&width=350",
        url: "https://www.instagram.com/p/ijk789/",
        engagement: {
          likes: 220000,
          comments: 12000,
          shares: 45000,
        },
        date: "2023-12-10",
      },
    ],
    reviews: [
      {
        source: "Food & Wine India",
        content:
          "Kabita Singh has revolutionized home cooking in India with her simple, foolproof recipes that demystify complex dishes.",
        sentiment: "positive",
        date: "2023-09-18",
        rating: 4.9,
      },
      {
        source: "The Better India",
        content:
          "Her focus on practical, everyday cooking with easily available ingredients has made gourmet cooking accessible to millions.",
        sentiment: "positive",
        date: "2023-07-22",
        rating: 4.8,
      },
      {
        source: "Culinary Critics Association",
        content:
          "While her recipes are reliable, some traditional chefs note that her simplified methods occasionally compromise authentic flavors.",
        sentiment: "neutral",
        date: "2023-10-15",
        rating: 4.0,
      },
    ],
    controversies: [
      {
        title: "Recipe Attribution",
        description: "Questions raised about proper attribution for some traditional recipes.",
        date: "2020-06-15",
        impact: "low",
        resolution: "Began providing more context and cultural background for traditional dishes",
      },
    ],
    achievements: [
      {
        title: "YouTube Creator Award",
        description: "Received Diamond Play Button for 10M subscribers",
        date: "2021-05-15",
        source: "YouTube",
      },
      {
        title: "Published Cookbook",
        description: "Released bestselling cookbook 'Kabita's Kitchen: Home Style Recipes'",
        date: "2022-03-10",
        source: "Penguin Random House",
      },
      {
        title: "Food Influencer of the Year",
        description: "Awarded for contribution to culinary content",
        date: "2021-12-18",
        source: "Indian Food Awards",
      },
    ],
    factCheckedContent: 95, // percentage
    audienceAuthenticity: 94, // percentage
    audienceDemographics: {
      age: {
        "13-17": 10,
        "18-24": 25,
        "25-34": 40,
        "35+": 25,
      },
      gender: {
        male: 30,
        female: 68,
        other: 2,
      },
      topCountries: ["India", "USA", "UAE", "UK", "Canada"],
      interests: ["Cooking", "Food", "Home Making", "Indian Cuisine", "Baking"],
    },
    brandCollaborations: ["Prestige", "Tata Sampann", "Amul", "Nestle", "Amazon Kitchen"],
    contentConsistency: 96, // 0-100
    growthRate: 8.5, // percentage
    accountAge: 112, // in months
    lastUpdated: "2023-12-20",
  },
]

export default influencers


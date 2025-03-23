import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Award } from "lucide-react"

export default function AboutPage() {

  const teamMembers = [
    {
      id: 1,
      name: "Nitin Verma",
      position: "Founder",
      image: "/nitin.jpg",
      description: "Founder of InfluenceIQ with expertise in social media growth and AI-driven analytics.",
    },
    {
      id: 2,
      name: "Dakshit Bamaniya",
      position: "Co-Founder",
      image: "/dakshit.jpg",
      description: "Co-Founder with a strong background in blockchain technology and software development.",
    },
    {
      id: 3,
      name: "Dhruv Dwivedi",
      position: "Co-Founder",
      image: "/dhruv.jpg",
      description: "Passionate about AI and data science, bringing innovative solutions to InfluenceIQ.",
    },
    {
      id: 4,
      name: "Jitendra Saini",
      position: "Co-Founder",
      image: "/jitu.jpg",
      description: "Tech enthusiast with a focus on full-stack development and scalable systems.",
    },
  ];
  
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">About Us</Badge>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Redefining How We Measure <span className="text-blue-600">Influence</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                InfluenceIQ is on a mission to bring transparency and accuracy to influence measurement. We cut through
                the noise, fight fake fame, and highlight those who actually matter.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/about1.jpg"
                alt="About InfluenceIQ"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/about2.jpg"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">From Idea to Innovation</h2>
              <p className="text-muted-foreground">
                Founded in 2022, InfluenceIQ was born from a simple observation: influence measurement was broken.
                Social media metrics were easily manipulated, and true impact was hard to quantify.
              </p>
              <p className="text-muted-foreground">
                Our team of data scientists, social media experts, and AI specialists came together to create a more
                accurate, transparent way to measure real influence across platforms and industries.
              </p>
              <p className="text-muted-foreground">
                Today, InfluenceIQ is the gold standard for influence ranking, trusted by brands, agencies, and
                influencers themselves to provide honest, data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground">
              At InfluenceIQ, our values guide everything we do, from how we build our platform to how we interact with
              our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency in our ranking methodology. Every score can be traced back to its
                  source data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                <p className="text-muted-foreground">
                  We're committed to providing the most accurate influence measurements possible, constantly refining
                  our algorithms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fairness</h3>
                <p className="text-muted-foreground">
                  Our platform treats all influencers equally, regardless of their size or industry, focusing solely on
                  real impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Experts Behind InfluenceIQ</h2>
            <p className="text-muted-foreground">
              Our diverse team brings together expertise in data science, social media, AI, and industry analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {teamMembers.map((member) => (
    <Card key={member.id} className="overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="text-center pt-6">
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-blue-600 mb-2">{member.position}</p>
        <p className="text-sm text-muted-foreground">{member.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the revolution in influence measurement. Start using InfluenceIQ today.
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


import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import { Users, Award, Heart, Shield } from 'lucide-react'

const teamMembers = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Chief Medical Officer',
    specialty: 'Cardiology',
    experience: '15+ years',
    image: '👩‍⚕️'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Head of Neurology',
    specialty: 'Neurosurgery',
    experience: '12+ years',
    image: '👨‍⚕️'
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Emergency Medicine Director',
    specialty: 'Emergency Care',
    experience: '10+ years',
    image: '👩‍⚕️'
  },
  {
    name: 'Dr. David Kim',
    role: 'Ophthalmology Specialist',
    specialty: 'Eye Surgery',
    experience: '8+ years',
    image: '👨‍⚕️'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About HealthCare Plus</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Leading the way in healthcare innovation with compassionate care, 
              expert medical professionals, and state-of-the-art facilities.
            </p>
          </div>
        </section>

        {/* Main About Section */}
        <About />

        {/* Our Team */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our dedicated team of medical professionals brings years of experience 
                and expertise to provide you with the best possible care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.specialty}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Compassion</h3>
                <p className="text-gray-600">
                  We treat every patient with empathy, understanding, and genuine care.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in medical care and service delivery.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Teamwork</h3>
                <p className="text-gray-600">
                  We collaborate seamlessly to provide coordinated, comprehensive care.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our interactions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
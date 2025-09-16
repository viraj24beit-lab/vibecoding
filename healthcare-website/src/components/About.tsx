import { Award, Users, Clock, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Excellence in Care',
    description: 'Award-winning medical professionals providing world-class healthcare services.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Highly qualified doctors and nurses with years of experience in their specialties.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency services and patient support whenever you need us.'
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'State-of-the-art safety protocols and infection control measures for your protection.'
  }
]

const stats = [
  { number: '15+', label: 'Years of Excellence' },
  { number: '50+', label: 'Medical Experts' },
  { number: '10,000+', label: 'Happy Patients' },
  { number: '95%', label: 'Success Rate' }
]

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                About HealthCare Plus
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                For over 15 years, HealthCare Plus has been at the forefront of medical innovation, 
                providing exceptional healthcare services to our community. We combine cutting-edge 
                technology with compassionate care to ensure the best possible outcomes for our patients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to deliver personalized, high-quality healthcare that puts patients 
                first. We believe in treating not just the condition, but the whole person, with 
                dignity, respect, and understanding.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual Content */}
          <div className="space-y-8">
            {/* Main visual */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <div className="text-center text-blue-600">
                  <Users className="h-16 w-16 mx-auto mb-4" />
                  <p className="font-medium">Modern Healthcare Facility</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission statement */}
            <div className="bg-blue-600 text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="opacity-90">
                To provide accessible, compassionate, and innovative healthcare solutions 
                that improve the quality of life for every patient we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
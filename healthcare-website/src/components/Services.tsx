import { Heart, Brain, Eye, Stethoscope, Activity, Pill } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Complete heart care with advanced diagnostic tools and treatments for all cardiovascular conditions.',
    features: ['ECG & Echo', 'Heart Surgery', 'Preventive Care']
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert neurological care for brain, spine, and nervous system disorders with cutting-edge technology.',
    features: ['Brain Imaging', 'Stroke Care', 'Neurotherapy']
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Comprehensive eye care services from routine checkups to advanced surgical procedures.',
    features: ['Eye Exams', 'LASIK Surgery', 'Retinal Care']
  },
  {
    icon: Stethoscope,
    title: 'Internal Medicine',
    description: 'Primary care and treatment for adult diseases with focus on prevention and wellness.',
    features: ['Health Screenings', 'Chronic Care', 'Preventive Medicine']
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response team and state-of-the-art trauma center.',
    features: ['Trauma Care', 'Critical Care', 'Ambulance Service']
  },
  {
    icon: Pill,
    title: 'Pharmacy',
    description: 'Full-service pharmacy with prescription management and medication counseling.',
    features: ['Prescription Filling', 'Drug Consultation', 'Home Delivery']
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with state-of-the-art equipment 
            and experienced medical professionals dedicated to your well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors group-hover:underline">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Our emergency department is open 24/7 with expert medical staff ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Call Emergency: (555) 123-4567
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Find Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
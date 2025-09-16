import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Clock, User, Phone } from 'lucide-react'

export default function AppointmentPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Book an Appointment</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Schedule your visit with our expert medical team. We offer flexible 
              scheduling options to accommodate your busy lifestyle.
            </p>
          </div>
        </section>

        {/* Appointment Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Schedule Your Visit</h2>
                    
                    <form className="space-y-6">
                      {/* Personal Information */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your first name"
                            />
                          </div>
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Your last name"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {/* Appointment Details */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointment Details</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                              Department *
                            </label>
                            <select
                              id="department"
                              name="department"
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Select Department</option>
                              <option value="cardiology">Cardiology</option>
                              <option value="neurology">Neurology</option>
                              <option value="ophthalmology">Ophthalmology</option>
                              <option value="internal-medicine">Internal Medicine</option>
                              <option value="emergency">Emergency Care</option>
                              <option value="general">General Consultation</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-2">
                              Preferred Doctor
                            </label>
                            <select
                              id="doctor"
                              name="doctor"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <option value="">Any Available</option>
                              <option value="dr-johnson">Dr. Sarah Johnson</option>
                              <option value="dr-chen">Dr. Michael Chen</option>
                              <option value="dr-rodriguez">Dr. Emily Rodriguez</option>
                              <option value="dr-kim">Dr. David Kim</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="date"
                            name="date"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                            Preferred Time *
                          </label>
                          <select
                            id="time"
                            name="time"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select Time</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="16:00">4:00 PM</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                          Reason for Visit
                        </label>
                        <textarea
                          id="reason"
                          name="reason"
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Please describe your symptoms or reason for the visit..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">
                            I agree to the terms and conditions and privacy policy
                          </span>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
                      >
                        Book Appointment
                      </button>
                    </form>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                  {/* Quick Info */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">Same-day appointments available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">Average wait time: 15 minutes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">Expert medical professionals</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-700">24/7 support available</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="bg-gray-100 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                    <p className="text-gray-600 mb-4">
                      Our appointment coordinators are here to help you schedule your visit.
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700">
                        <strong>Phone:</strong> (555) 123-4568
                      </p>
                      <p className="text-gray-700">
                        <strong>Email:</strong> appointments@healthcareplus.com
                      </p>
                    </div>
                  </div>

                  {/* Emergency */}
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-2">Emergency?</h3>
                    <p className="text-red-700 mb-4">
                      For urgent medical needs, don&apos;t wait for an appointment.
                    </p>
                    <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium">
                      Call Emergency: (555) 911-0000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
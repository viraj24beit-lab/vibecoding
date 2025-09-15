import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import { useState, type FormEvent } from 'react'

function Navbar() {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-sky-700">HealthCare Hub</Link>
        <nav className="flex gap-6 text-sm">
          <NavLink to="/" end className={({isActive}) => `hover:text-sky-700 ${isActive ? 'text-sky-700 font-semibold' : 'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/services" className={({isActive}) => `hover:text-sky-700 ${isActive ? 'text-sky-700 font-semibold' : 'text-gray-700'}`}>Services</NavLink>
          <NavLink to="/doctors" className={({isActive}) => `hover:text-sky-700 ${isActive ? 'text-sky-700 font-semibold' : 'text-gray-700'}`}>Doctors</NavLink>
          <NavLink to="/appointments" className={({isActive}) => `hover:text-sky-700 ${isActive ? 'text-sky-700 font-semibold' : 'text-gray-700'}`}>Appointments</NavLink>
          <NavLink to="/contact" className={({isActive}) => `hover:text-sky-700 ${isActive ? 'text-sky-700 font-semibold' : 'text-gray-700'}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} HealthCare Hub. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-sky-700">Privacy</a>
          <a href="#" className="hover:text-sky-700">Terms</a>
          <a href="#" className="hover:text-sky-700">Support</a>
        </div>
      </div>
    </footer>
  )
}

function Container(props: { children: React.ReactNode }) {
  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{props.children}</div>
}

function Hero() {
  return (
    <div className="bg-gradient-to-r from-sky-50 to-white">
      <Container>
        <div className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">Your health, our priority.</h1>
            <p className="mt-4 text-gray-600">Book appointments, explore services, and meet our experienced doctors.</p>
            <div className="mt-8 flex gap-3">
              <Link to="/appointments" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Book Appointment</Link>
              <Link to="/services" className="inline-flex items-center justify-center rounded-md border border-sky-600 px-4 py-2 text-sky-700 hover:bg-sky-50">Our Services</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-sky-100"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Container>
        <section className="py-16">
          <h2 className="text-2xl font-semibold">Featured Services</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["General Checkup","Pediatrics","Cardiology"].map((service) => (
              <div key={service} className="rounded-xl border p-6 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-900">{service}</h3>
                <p className="mt-2 text-gray-600">Comprehensive care provided by our specialists.</p>
                <Link to="/appointments" className="mt-4 inline-block text-sky-700 hover:underline">Book now →</Link>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </main>
  )
}

function ServicesPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-gray-600">Explore our range of medical services tailored to your needs.</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({length:6}).map((_,i) => (
            <li key={i} className="rounded-xl border p-6">
              <h3 className="font-semibold">Service {i+1}</h3>
              <p className="mt-2 text-gray-600">Detailed description of service {i+1}.</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

function DoctorsPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Our Doctors</h1>
        <p className="mt-2 text-gray-600">Meet our team of experienced healthcare professionals.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Dr. Smith','Dr. Johnson','Dr. Lee','Dr. Patel','Dr. Garcia','Dr. Chen'].map((name) => (
            <div key={name} className="rounded-xl border p-6">
              <div className="h-24 w-24 rounded-full bg-sky-100" />
              <h3 className="mt-4 font-semibold">{name}</h3>
              <p className="text-gray-600">Specialist</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

function AppointmentsPage() {
  return (
    <Container>
      <div className="py-12 max-w-2xl">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        <p className="mt-2 text-gray-600">Fill out the form and we will confirm your booking.</p>
        <AppointmentForm />
      </div>
    </Container>
  )
}

function ContactPage() {
  return (
    <Container>
      <div className="py-12 max-w-2xl">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2 text-gray-600">We are here to help you with any questions.</p>
        <form className="mt-8 grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border px-3 py-2" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea className="mt-1 w-full rounded-md border px-3 py-2" rows={5} placeholder="How can we help?" />
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Send</button>
        </form>
      </div>
    </Container>
  )
}

function AppointmentForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("general")
  const [date, setDate] = useState("")
  const [notes, setNotes] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; date?: string }>({})

  function validate() {
    const nextErrors: { fullName?: string; email?: string; date?: string } = {}
    if (!fullName.trim()) {
      nextErrors.fullName = "Name is required"
    }
    if (!email.trim()) {
      nextErrors.email = "Email is required"
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        nextErrors.email = "Enter a valid email"
      }
    }
    if (!date) {
      nextErrors.date = "Date is required"
    } else {
      const today = new Date()
      today.setHours(0,0,0,0)
      const selected = new Date(date)
      if (selected < today) {
        nextErrors.date = "Date cannot be in the past"
      }
    }
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    // In a real app, send to backend here
  }

  const minDate = new Date().toISOString().split("T")[0]

  return (
    <form onSubmit={onSubmit} noValidate className="mt-8 grid grid-cols-1 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full name</label>
          <input
            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.fullName ? 'border-red-500' : ''}`}
            placeholder="Jane Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'name-error' : undefined}
          />
          {errors.fullName && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <select
            className="mt-1 w-full rounded-md border px-3 py-2"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="general">General</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="cardiology">Cardiology</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred date</label>
          <input
            type="date"
            className={`mt-1 w-full rounded-md border px-3 py-2 ${errors.date ? 'border-red-500' : ''}`}
            value={date}
            min={minDate}
            onChange={(e) => setDate(e.target.value)}
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? 'date-error' : undefined}
          />
          {errors.date && <p id="date-error" className="mt-1 text-sm text-red-600">{errors.date}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea
          className="mt-1 w-full rounded-md border px-3 py-2"
          rows={4}
          placeholder="Symptoms or requests"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button type="submit" className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-white hover:bg-sky-700">Book appointment</button>
      {submitted && (
        <div className="rounded-md border border-green-200 bg-green-50 text-green-800 px-4 py-3">
          Your appointment request has been submitted. We will contact you shortly.
        </div>
      )}
    </form>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

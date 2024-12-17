import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './components/theme-toggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8 items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white transition-colors duration-200">
                Edwin Lee
              </Link>
              <Link href="/resume" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                Resume
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 relative rounded-full overflow-hidden">
              <Image
                src="/headshot.jpeg"
                alt="Edwin Lee"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                Welcome, I&apos;m Edwin Lee
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
                {/* Add your professional bio here */}
                A passionate professional dedicated to excellence in business and communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <WorkCard
              title="Mission Statement Analysis"
              description="Analysis and creation of a mission statement for a breakfast/brunch restaurant, demonstrating strategic thinking and brand understanding."
              link="/works/mission-statement"
            />
            <WorkCard
              title="Brand Logo Analysis"
              description="In-depth analysis of October's Very Own brand logo, showcasing analytical skills and attention to detail."
              link="/works/brand-analysis"
            />
            <WorkCard
              title="Crisis Communication"
              description="Executive response to a social media incident, highlighting leadership and professional communication skills."
              link="/works/crisis-communication"
            />
            <WorkCard
              title="Policy Change Communication"
              description="Professional communication of hybrid work policy changes, demonstrating empathy and clear communication."
              link="/works/policy-change"
            />
            <WorkCard
              title="Economic Analysis"
              description="Comprehensive analysis of Trinidad and Tobago's economy, showcasing research and analytical capabilities."
              link="/works/economic-analysis"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function WorkCard({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <Link href={link}>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{description}</p>
      </div>
    </Link>
  )
}

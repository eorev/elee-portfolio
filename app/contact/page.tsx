import Link from 'next/link'

export default function Contact() {
    return (
        <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Contact Me
                </h1>

                <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    I&apos;m always open to new opportunities and connections. Feel free to reach out through any of the following channels:
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                                        <a href="mailto:edwinlee@udel.edu" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                            edwinlee@udel.edu
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                                        <a href="https://www.linkedin.com/in/edwinlee20/" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                            linkedin.com/in/edwinlee20
                                        </a>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                                        <p className="text-gray-600 dark:text-gray-300">Newark, DE</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Form</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={4}
                                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 
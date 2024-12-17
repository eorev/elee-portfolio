import Link from 'next/link'

export default function Resume() {
    return (
        <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Resume
                </h1>

                <div className="prose max-w-none dark:prose-invert">
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">View Resume</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Click below to view my full resume.
                        </p>
                        <a
                            href="/assignments/Edwin Lee 2024: Resume.pdf"
                            target="_blank"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Open Resume PDF
                        </a>
                    </div>

                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h2>
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:edwinlee@udel.edu" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                    edwinlee@udel.edu
                                </a>
                            </p>
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                <a href="https://www.linkedin.com/in/edwinlee20/" target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                                    linkedin.com/in/edwinlee20
                                </a>
                            </p>
                            <p>
                                <strong>Location:</strong> Newark, DE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 
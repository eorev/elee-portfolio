import Link from 'next/link'

export default function BrandAnalysis() {
    return (
        <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Brand Logo Analysis: October&apos;s Very Own
                </h1>

                <div className="prose max-w-none dark:prose-invert">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Within this assignment, my professor asked me to analyze and find certain factors within a brand logo. I chose October&apos;s Very Own, a brand created by my favorite artist. This analysis demonstrates my ability to understand visual branding elements and their impact on brand identity.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills Demonstrated</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Visual analysis and interpretation</li>
                            <li>Brand identity understanding</li>
                            <li>Marketing awareness</li>
                            <li>Attention to detail</li>
                            <li>Critical thinking</li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">View Full Assignment</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Click below to view the complete brand logo analysis document.
                        </p>
                        <a
                            href="/assignments/ENGL312: Weekly Writing #9.pdf"
                            target="_blank"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Open PDF Document
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
} 
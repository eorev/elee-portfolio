import Link from 'next/link'

export default function CrisisCommunication() {
    return (
        <main className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                    Crisis Communication Management
                </h1>

                <div className="prose max-w-none dark:prose-invert">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        In this writing, I was asked to play the role of a high ranking executive, tasked with sending a team-wide email addressing a social media Twitter incident. This assignment requires one to learn how to professionally address a critical scenario and also provide assurance on the solutions.
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills Demonstrated</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Leadership communication</li>
                            <li>Crisis management</li>
                            <li>Professional writing</li>
                            <li>Problem-solving</li>
                            <li>Stakeholder management</li>
                            <li>Strategic thinking</li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">View Full Assignment</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Click below to view the complete crisis communication document.
                        </p>
                        <a
                            href="/assignments/ENGL312: E-Mail Internal Messaging.pdf"
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
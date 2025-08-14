export default function QuizStartPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Quiz Start
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    This is where the actual quiz will begin. The quiz engine is currently under development.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
                    <h2 className="text-lg font-semibold text-blue-900 mb-3">
                        Coming Soon Features:
                    </h2>
                    <ul className="text-left text-blue-800 space-y-2">
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-600">•</span>
                            <span>Interactive question interface</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-600">•</span>
                            <span>Real-time scoring and feedback</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-600">•</span>
                            <span>Progress tracking</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="text-blue-600">•</span>
                            <span>Detailed performance analytics</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-8">
                    <a
                        href="/quiz"
                        className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                        Back to Quiz
                    </a>
                </div>
            </div>
        </div>
    );
} 
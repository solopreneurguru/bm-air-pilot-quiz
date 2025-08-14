export default function QuizPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    Quiz Coming Soon
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    We're preparing an amazing pilot assessment experience for you. Get ready to test your aviation knowledge!
                </p>

                <div className="space-y-6">
                    <a
                        href="/quiz/start"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-xl text-2xl transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
                    >
                        Start
                    </a>

                    <div className="mt-8">
                        <p className="text-gray-500 text-sm">
                            The quiz will include comprehensive questions covering:
                        </p>
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                <span className="text-gray-600">Flight Theory</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-gray-600">Navigation</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                <span className="text-gray-600">Safety Procedures</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-gray-600">Regulations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 
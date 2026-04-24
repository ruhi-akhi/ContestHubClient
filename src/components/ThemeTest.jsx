import { useTheme } from "../contexts/ThemeContext";

export default function ThemeTest() {
  const { theme, isDark, toggleTheme, isInitialized } = useTheme();

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Theme Test Page
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Current Theme Info */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Current Theme
              </h2>
              <div className="space-y-2 text-left">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Theme:</span> {theme}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Is Dark:</span> {isDark ? "Yes" : "No"}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Initialized:</span> {isInitialized ? "Yes" : "No"}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">HTML Class:</span> {document.documentElement.classList.contains('dark') ? "dark" : "light"}
                </p>
              </div>
            </div>

            {/* Theme Controls */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Theme Controls
              </h2>
              <button
                onClick={toggleTheme}
                className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors font-medium"
              >
                Switch to {isDark ? "Light" : "Dark"} Mode
              </button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 1</h3>
              <p className="text-gray-600 dark:text-gray-400">This card should change colors based on theme.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg transition-all">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 2</h3>
              <p className="text-gray-600 dark:text-gray-400">Notice how the text and background adapt.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card 3</h3>
              <p className="text-gray-600 dark:text-gray-400">Smooth transitions between themes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function SuggestionChips({ persona, onChipClick }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-6 py-12 gap-8">
      <div className="text-center animate-fade-in">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4
          text-white text-xl font-bold shadow-lg transform transition-all duration-300 hover:scale-105 ${persona.colors.avatar}`}>
          {persona.avatar}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight mb-2">
          {persona.name}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{persona.title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 max-w-md mx-auto leading-relaxed">
          Ask me anything about tech, careers, or my journey building Scaler. I'm here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
        {persona.chips.map((chip, index) => (
          <button
            key={chip}
            onClick={() => onChipClick(chip)}
            className={`text-sm px-4 py-3.5 rounded-xl text-left transition-all duration-200 transform hover:scale-105
              border leading-snug shadow-sm hover:shadow-md animate-fade-in ${persona.colors.chip}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  )
}

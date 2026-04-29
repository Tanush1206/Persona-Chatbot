import { personas } from '../data/personas'

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

export default function PersonaSwitcher({ activePersona, onSwitch, theme, onToggleTheme }) {
  const active = personas[activePersona]

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shrink-0 transition-all duration-300">
      {/* Tab row + theme toggle */}
      <div className="max-w-4xl mx-auto px-6 pt-4 pb-0 flex items-center justify-between">
        <div className="flex gap-2 p-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
          {Object.values(personas).map((persona) => {
            const isActive = activePersona === persona.id
            return (
              <button
                key={persona.id}
                onClick={() => onSwitch(persona.id)}
                className={`
                  px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 transform
                  ${isActive
                    ? `${persona.colors.tab} ${persona.colors.tabBorder} shadow-lg scale-105`
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
                  }
                `}
              >
                {persona.name.split(' ')[0]}
              </button>
            )
          })}
        </div>

        {/* Dark / light toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2.5 rounded-xl text-gray-400 dark:text-gray-500
            hover:text-gray-600 dark:hover:text-gray-300
            hover:bg-white/50 dark:hover:bg-gray-700/50
            transition-all duration-200 transform hover:scale-105"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* Active persona info strip */}
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${active.colors.avatar}`}>
          {active.avatar}
        </div>
        <div className="flex-1">
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{active.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{active.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-gray-400 dark:text-gray-500">Online</span>
        </div>
      </div>
    </header>
  )
}

import { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'
import TypingIndicator from './TypingIndicator'
import SuggestionChips from './SuggestionChips'

export default function ChatWindow({ messages, persona, isLoading, isStreaming, onChipClick }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const isEmpty = messages.length === 0 && !isLoading

  return (
    <main className="flex-1 overflow-y-auto bg-transparent min-h-0">
      {isEmpty ? (
        <SuggestionChips persona={persona} onChipClick={onChipClick} />
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col gap-6">
          {messages.map((message, i) => (
            <MessageBubble
              key={i}
              message={message}
              persona={persona}
              isStreaming={isStreaming && i === messages.length - 1 && message.role === 'assistant'}
            />
          ))}
          {isLoading && <TypingIndicator persona={persona} />}
          <div ref={bottomRef} />
        </div>
      )}
    </main>
  )
}

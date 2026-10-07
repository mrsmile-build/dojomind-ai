import { createContext, useState, useEffect, useContext } from 'react'

const ProgressContext = createContext()

export function ProgressProvider({ children }) {
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem('dojomind_completed_lessons')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('dojomind_completed_lessons', JSON.stringify(completedLessons))
  }, [completedLessons])

  const markComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const isComplete = (lessonId) => completedLessons.includes(lessonId)

  return (
    <ProgressContext.Provider value={{ completedLessons, markComplete, isComplete }}>
      {children}
    </ProgressContext.Provider>
  )
}

export const useProgress = () => useContext(ProgressContext)

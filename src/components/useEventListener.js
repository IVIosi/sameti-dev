import { useEffect } from "react"

export default function useEventListener(event, handler, passive = false) {
  useEffect(() => {
    window.addEventListener(event, handler, passive)

    return function cleanup() {
      window.removeEventListener(event, handler)
    }
  })
}

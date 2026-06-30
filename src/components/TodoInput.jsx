import { useState } from 'react'

function TodoInput({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit() {
    onAdd(text)
    setText('')
  }

  return (
    <div className="input-area">
      <input
        value={text}
        placeholder="Enter a task..."
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') handleSubmit()
        }}
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TodoInput

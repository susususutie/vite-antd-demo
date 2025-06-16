import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'
import { useState } from 'react'

export default function ConfigModal() {
  const navigate = useNavigate()
  const [count, setCount] = useState(8)

  return (
    <Modal
      open
      onClose={() => {
        navigate('../')
      }}
      getContainer={() => document.getElementById('portal-root')}
    >
      <p>
        <button onClick={() => setCount(Math.max(0, count - 4))}>-4</button>&nbsp;<span>count:{count}</span>&nbsp;
        <button onClick={() => setCount(Math.min(count + 4, 99))}>+4</button>
      </p>
      {Array.from({ length: count }).map((_, index) => (
        <p key={index}>{index}</p>
      ))}
    </Modal>
  )
}

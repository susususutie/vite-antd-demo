import { createPortal } from 'react-dom'

const modalStyle = {
  root: { position: 'fixed' },
  mask: { position: 'fixed', inset: 0, backgroundColor: '#0000006b', pointerEvents: 'none' },
  wrap: { position: 'fixed', inset: 0, overflow: 'auto', display: 'block' },
  modal: {
    position: 'relative',
    top: 24,
    width: 200,
    margin: '0px auto',
    padding: 0,
    paddingBottom: 16,
    pointerEvents: 'none',
  },
  content: {
    pointerEvents: 'auto',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: '20px 24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
}

export default function Modal(props) {
  const { getContainer, open, onClose, children } = props

  const handleClose = e => {
    // 非自身的点击事件，不响应
    if (e.target !== e.currentTarget) return
    e.stopPropagation()
    e.preventDefault()
    onClose?.()
  }

  const modal = (
    <div style={modalStyle.root}>
      {open ? <div style={modalStyle.mask}></div> : null}
      <div style={{ ...modalStyle.wrap, display: !open ? 'none' : undefined }} onClick={handleClose}>
        <div style={modalStyle.modal}>
          <div style={modalStyle.content}>{children}</div>
        </div>
      </div>
    </div>
  )

  return getContainer === false ? modal : createPortal(<div>{modal}</div>, getContainer?.() || document.body)
}

import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Modal from '../../components/Modal'
import NavigateLinks from '../../components/NavigateLinks'

export default function PageConfig() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      PageConfig
      <p>
        打开 <Link to='./modal'>route modal</Link> <Link to='./confirm'>confirm</Link>
      </p>
      <p>
        打开
        <a
          href='#'
          onClick={e => {
            e.preventDefault()
            setOpen(true)
          }}
        >
          普通modal
        </a>
      </p>
      <NavigateLinks />
      <Modal
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        getContainer={false}
      >
        <p style={{ height: 24, lineHeight: '24px', margin: 0 }}>ConfigModal</p>
      </Modal>
      <Outlet />
    </div>
  )
}

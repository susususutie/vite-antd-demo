import NavigateLinks from '../components/NavigateLinks'

export default function PageFullScreen() {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: 36 }}>screen</span>
      <NavigateLinks />
    </div>
  )
}

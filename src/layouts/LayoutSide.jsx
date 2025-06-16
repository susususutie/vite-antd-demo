export default function LayoutSide() {
  return (
    <div className='side'>
      <h3>Side </h3>
      {new Array(30).fill(null).map((_, index) => (
        <p key={index}> {index}</p>
      ))}
    </div>
  )
}

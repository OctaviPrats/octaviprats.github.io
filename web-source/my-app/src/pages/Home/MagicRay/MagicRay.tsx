import { useEffect, useState, useRef, memo } from "react"
import "./MagicRay.css"
const MagicRay = () => {
  const [rayQueue, setRayQueue] = useState<any[]>([])
  const handleClick = (event: any) => {
    console.info("click", event.clientX, ":", event.clientY)
    setRayQueue([...rayQueue, { x: event.clientX, y: event.clientY }])
  }
  return (
    <div className="magicRay wrapper" onClick={(event) => handleClick(event)}>
      <div className="--relative">
        {rayQueue.map((ray, index) => (
          <Ray key={`ray-${index}`} xAxis={ray.x} yAxis={ray.y} />
        ))}
      </div>
    </div>
  )
}
export default MagicRay

const Ray = memo(({ x, y }: any) => {
  const [move, setMove] = useState(false)

  //   useEffect(() => {
  //     setMove(true)
  //   }, [])
  return <div className={`ray `} style={{ left: `${x}px`, top: `${y}px` }} />
})

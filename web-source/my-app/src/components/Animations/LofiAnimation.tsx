import "./LofiAnimation.css"
import { Player } from '@lottiefiles/react-lottie-player';

const LofiAnimation = () => {
  return (
    <div className="lofi-animation-container">
      <Player
        autoplay
        loop
        src="/lofi_animation.json"
      >
      </Player>
    </div>
  )
}

export default LofiAnimation

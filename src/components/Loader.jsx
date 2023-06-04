import { Html, useProgress} from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 25,
        color: "#f1f1f1",
        fontweight: 800,
        marginTop: 20,
      }}>
        {progress.toFixed(0)}%
      </p>
    </Html>
  )
}

export default Loader
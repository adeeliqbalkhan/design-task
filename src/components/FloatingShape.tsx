interface FloatingShapeProps {
  svg: string
  position: string
  side?: 'left' | 'right'
}

const FloatingShape = ({ svg, position, side }: FloatingShapeProps) => {
  const marginClass = side === 'left' ? 'ml-2 md:ml-4 lg:ml-6' : side === 'right' ? 'mr-2 md:mr-4 lg:mr-6' : ''
  
  return (
    <div className={`absolute ${position} z-0 ${marginClass}`}>
      <img src={svg} alt="" className="w-auto h-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[173px] max-h-[120px] sm:max-h-[140px] md:max-h-[160px] lg:max-h-[173px]" />
    </div>
  )
}

export default FloatingShape


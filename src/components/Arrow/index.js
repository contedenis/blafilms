import { ReactComponent as ChevronLeft } from '../../chevron-left.svg'
import { ReactComponent as ChevronRight } from '../../chevron-right.svg'

import './styles.css'

function Arrow({ direction, disabled, onClick }) {
  const className = disabled ? 'arrow arrow-disabled' : 'arrow'
  return (
    <div className={className} onClick={onClick}>
      {direction === 'right' ? <ChevronRight /> : <ChevronLeft />}
    </div>
  )
}

export default Arrow

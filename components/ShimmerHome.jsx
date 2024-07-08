
import './ShimmerHome.css'
export default function ShimmerHome() {
  
  return (
    <div className="countries-container">
        {
            Array.from({length:10}).fill(1).map((element,index) => {
                return <div key={index} className = 'country-card shimmer-card'>
                    <div className = 'img'></div>
                    <div className = 'name'></div>
                    <div className="one"></div>
                    <div className = "two"></div>
                    <div className = "three"></div>
                </div>
            })
        }
    </div>
  )
}

import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myworkdata from '../../assets/mywork_data'
import arrow from '../../assets/arrow.svg'

const Mywrok = () => {
  return (
    <div className="mywork">
        <div className="mywork-title">
            <h1>My lattest work</h1>
            <img src={theme_pattern} />
        </div>
        <div className="mywork-container">
            {myworkdata.map((work, index)=>{
                return <img key={index} src={work.w_img}/>
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show more</p>
            <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default Mywrok
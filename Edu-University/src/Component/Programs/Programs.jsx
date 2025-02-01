import React from 'react'
import './Programs.css'
import program_one from '../../assets/program-1.png'
import program_two from '../../assets/program-2.png'
import program_three from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'





const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={program_one} alt="" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={program_two} alt="" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div><div className="program">
                <img src={program_three} alt="" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Post Graduation </p>
                </div>
            </div>

        </div>
    )
}

export default Programs

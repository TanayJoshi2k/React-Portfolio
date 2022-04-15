import React from 'react';
import classes from './Education.module.css'
const Education = () => {
    return (
        <div id="education" className={classes.educationContainer}>
            <h1 className={classes.edTitle}>
                Education
            </h1>

            <div className={classes.BE}>
                <div className={classes.BEImage}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzFNe2TCNyHa0TO96OWsIOyzO-_GGFva35njxfbqhdqtqMnhzo13i8UYM8Nb53pmFqyI&usqp=CAU' 
                    />
                </div>
                <div className={classes.clgContainer}>
                   <p className={classes.clgName}>K.J Somaiya Institute of Engineering and Information Technology</p>
                   <p className={classes.degree}>B.E Computer Engineering (2017-2021)</p>
                   <p className={classes.marks}>9.5/10 CGPA</p>
                </div>
            </div>
            <div className={classes.BE}>
                <div className={classes.BEImage}>
                    <img src='https://upload.wikimedia.org/wikipedia/en/7/79/MSBSHSE_logo.png' 
                    />
                </div>
                <div className={classes.clgContainer}>
                   <p className={classes.clgName}>Mumbai Junior College of Arts, Commerce and Science</p>
                   <p className={classes.degree}>Higher Secondary (2015-2017)</p>
                   <p className={classes.marks}>75.23%</p>
                </div>
            </div>

            

            <div className={classes.BE}>
                <div className={classes.BEImage}>
                    <img src='https://upload.wikimedia.org/wikipedia/en/9/93/School_emblem_of_Don_Bosco%2C_Matunga.gif' 
                    />
                </div>
                <div className={classes.clgContainer}>
                   <p className={classes.clgName}>Don Bosco High School</p>
                   <p className={classes.degree}>Secondary School (2014-2015)</p>
                   <p className={classes.marks}>92.00%</p>
                </div>
            </div>

        </div>
    )
}

export default Education;

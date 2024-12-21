import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Working out daily has numerous benefits for both physical and mental health. 
        </p>
        <img src="/img-1.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Daily workouts don’t have to be intense; consistency matters more than duration or intensity.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Physical Health Benefits.</h4>
            <p>
            Improved Cardiovascular Health: Regular exercise strengthens the heart, improves blood circulation, and reduces the risk of heart diseases.
           Weight Management: Helps burn calories, build muscle, and maintain a healthy weight.
           Stronger Muscles and Bones: Weight-bearing exercises improve muscle strength and bone density, reducing the risk of osteoporosis.
           Boosted Immunity: Regular activity enhances the immune system's ability to fight infections.
           Enhanced Flexibility and Balance: Reduces the risk of falls and injuries, especially as you age.
            </p>
          </div>
          <div>
            <h4>Mental Health Benefits.</h4>
            <p>
            Stress Reduction: Physical activity releases endorphins, which are natural mood lifters.
            Better Sleep Quality: Exercise can help regulate sleep patterns and combat insomnia.
            Increased Energy Levels: Regular workouts improve stamina and reduce fatigue over time.
            Improved Mental Clarity: Enhances focus, memory, and overall cognitive function.
            
            </p>
          </div>
          <div>
            <h4>Long-Term Benefits.</h4>
            <p>
            Disease Prevention: Reduces the risk of chronic conditions like diabetes, hypertension, and certain cancers.
            Longevity: Studies show that active individuals tend to live longer, healthier lives.
            Slower Aging: Regular activity improves skin health, reduces wrinkles, and keeps you feeling younger.
            </p>
          </div>
          <div>
            <h4>Building Discipline and Routine.</h4>
            <p>
            Consistency: A daily workout habit fosters discipline, which can spill over into other areas of life.
            Goal Achievement: Encourages setting and reaching fitness and life goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;

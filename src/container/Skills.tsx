import { skills } from "@constants/constants"
import { styles } from "@constants/styles"

const Skills = () => {
  return (
    <section className={`${styles.padding} h-screen`}>
      <div className="flex flex-wrap">
        {skills.map(skill => (
          <div className="flex-col" key={skill.title}>
            <span>{skill.icon}</span>
            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
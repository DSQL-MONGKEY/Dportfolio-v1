import { socialMedia } from "@constants/constants"

const Footer = () => {
  return (
    <section id="footer" className={`p-10 sm:px-10 bottom-0 h-[300px] bg-black `}>

      <div className="flex flex-col w-full flex-wrap">
        <div className="flex gap-3 text-white mb-5">
            {socialMedia.map(item => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                <span className="text-[20px] sm:text-[25px]">
                  {item.icon}
                </span>
              </a>
            ))}
        </div>
        
        <div className="flex flex-col text-white font-outfit mb-5">
          <h5>Dimas Prasetyo</h5>
          <p>
            Frontend Developer | Website | Mobile
          </p>
        </div>

        <h3 className="text-white dark:text-[#FF2E63] text-2xl font-outfit font-semibold">
          My Quetos
        </h3>

        <div className="flex flex-col w-fit">
          <p className="text-black font-poppins text-sm sm:text-lg bg-slate-200 p-2">
            Basically our brains are same, the difference is who "just" tries first and who learns "continuously"
          </p>
        </div>

        
      </div>
    </section>
  )
}

export default Footer
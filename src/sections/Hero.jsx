import { socialMedia } from "../Constants";

const Hero=()=> {
    return(
      
	<section
	id="home"
	className="flex min-h-screen"
	>
		<div className="relative flex-1 flex justify-center items-center xl:min-h-screen bg-primary bg-hero bg-cover bg-center">
		<div className="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
           <div className='flex gap-5' style={{marginTop:"45rem"}}>
            {socialMedia.map((icon) => (
              <div
                className='flex justify-center items-center w-16 h-16 bg-slate-300 rounded-full hover:bg-slate-400 transition duration-300 ease-in-out'
                key={icon.alt}
              >
                <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} href={icon.href} width={30} height={30} />
                </a>
              </div>
            ))}
          </div>
    </div>
		</div>
	</section>
    )
}

export default Hero;
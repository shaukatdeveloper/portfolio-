import ContactForm from "@/components/ContactForm"
import { Container } from "@/components/Container"
import PageLayout from "@/components/PageLayout"
import { Mail, MapPinCheck, Phone } from "lucide-react"


const infoData = [
  {
    title:"phone", description:"(+92) 346 2180065", icon: <Phone/>
  },
  {
    title:"Email", description:"shaukatdeveloper@gmail.com", icon: <Mail/>
  },
  {
    title:"Address", description:"Lea Market Karachi", icon: <MapPinCheck/>
  },
]

const Contact = () => {
  return (
    <PageLayout>
      <Container className=" py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14 ">
      
      <div className="w-full md:w-2/3">
      <ContactForm/>
      </div>
      <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 md:gap-8">
       {infoData?.map((item)=>(
        <div key={item?.title}
        className="flex items-center space-x-4"
        >
          <span className="bg-lightSky/5 p-4">
          {item?.icon}
          </span>
          <div>
            <h3 
            className="text-white/60 text-sm font-semibold"
            >{item?.title}</h3>
            <p>{item?.description}</p>
          </div>
          
        </div>
       ))}
      </div>
    </Container>
    </PageLayout>
  )
}

export default Contact

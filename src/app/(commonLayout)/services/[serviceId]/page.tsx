import style from '../services.module.scss';
type IProps={
    params: { serviceId: string }
}
const service = 
  {
    id: '1',
    title: 'Laptop Screen Replacement',
    description: 'We will replace your laptop screen with a brand new one.',
    image: 'https://i.ibb.co/Fhfm5MR/ssd.jpg',
    timeSlots: ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
  }

export default function SingleProductPage({ params }:IProps) {
    console.log(params.serviceId);
    
  return (
    <div className={style.single_service}>
        <div className={style.service_page}>
          <div className={style.service_image}>
            <img src={service.image} alt={service.title} />
          </div>
          <div className={style.service_details}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <h2>Available Time Slots</h2>
            <ul className={style.time_slots}>
              {service.timeSlots.map((slot, index) => (
                <li key={style.index}>{slot}</li>
              ))}
            </ul>
            <button className={style.btn_primary}>Add to Cart</button>
          </div>
        </div>
    </div>
  )
}
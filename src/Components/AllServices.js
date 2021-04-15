import React from 'react';
import '../style/AllServices.css'

const AllSevices = () => {
    
    const data = [
        {id: 1, name: 'Corporate solutions', message: 'Need specific software for your company? We are ready to develop it!', img: './img/allServices/phone.PNG'}, 
        {id: 2, name: 'Call center solutions', message: 'Our experts provide custom products of any complexity for call centers.', img: './img/allServices/earphones.PNG'},
        {id: 3, name:'Cloud development', message: 'We can also offer you reliable cloud development solutions.', img: './img/allServices/upload-cloud.PNG'}
    ]

    return (
        <section className="all-services-container">
                <img className="all-services-logo-img" alt="" src="https://ld-wt73.template-help.com/wt_prod-18959/images/index-1-415x592.jpg"/>

                <ul className="all-services-cards">
                    <li className="all-services-card main-card">
                        <h3 className="box-icon-modern-big-title">See all services</h3>
                        <div className="all-services-divider-line"></div>
                        <a className="link-bttn primary-bttn" href="http://localhost:3000/">All services</a>
                    </li>
                    {data.map(service => (
                         <li className="all-services-card" key={service.id}>
                            <div className="allServices-triangle" >
                                <img src={service.img} alt=""/>
                            </div>
                            <a className="secondary-bttn" href="http://localhost:3000/">{service.name}</a>
                            <div className="all-services-divider-line"></div>
                            <p>{service.message}</p>
                        </li>
                    ))}
                 
                </ul>
        </section>
    )
}

export default AllSevices
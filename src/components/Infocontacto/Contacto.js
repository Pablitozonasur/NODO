import React from 'react'
import './ContactoStyle.css';
import Nodoimage from './logonodo.jpg';



const Contacto = () => {
  return (
    <div className="contact-page">
      <div className="responsive-image">
        <img src={Nodoimage} className="img-fluid" alt="Descripción de la imagen" style={{ width: '100%', height: 'auto' }} />  
      </div>
      <h1>Nodo</h1>
      <ContactInfo title="Quienes somos" content="Nodo es una empresa que busca conectar a los clientes con los productos que reflejan su esencia y valores. Entendemos que cada producto tiene una historia detrás y una razón de ser, y queremos destacar esa singularidad en nuestra plataforma" />
      <ContactInfo title="Nuestra misión" content="Por ejemplo, imagina a un artesano que elabora billeteras de cuero legítimo, cosidas con hilos de lana de oveja y tinturas orgánicas. Este artesano se preocupa por no producir en masa y no contaminar el medio ambiente. En Nodo, queremos que este artesano tenga un espacio donde pueda compartir su historia y conectar con aquellos clientes que comparten sus valores y aprecian su arte." />
      <ContactInfo title="Nuestra visión" content="Nuestra visión evoca la imagen del artesano dedicado a su labor, creando productos únicos que transmiten la historia y la cultura de su comunidad. Las manos del artesano son un símbolo de la habilidad y la dedicación que se requieren para crear algo de valor y significado. Además, sugiere que al reconocer nuestras raíces y entender nuestra historia, podemos tener una mejor idea de hacia dónde nos dirigimos en el futuro. En este sentido, la plataforma Nodo se presenta como un medio para conectar con nuestra identidad y propósito personal." />
      <ContactInfo title="Nuestro compromiso" content="Nodo, como su nombre indica, es un punto de conexión y unión entre el artesano y el consumidor final. Queremos que sea el lugar donde los clientes puedan encontrar productos únicos y auténticos que reflejen sus valores y esencia. Además, nos comprometemos a trabajar con productores y artesanos que compartan nuestra visión y valores." />
      <p className="question">¿Te gustaria participar?</p>
    </div>
  );
};

const ContactInfo = ({ title, content }) => {
  return (
    <div className="contact-info">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};
export default Contacto
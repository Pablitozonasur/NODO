import React from 'react'
import {Link} from 'react-router-dom'



const Footer =() => {

    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                    <Link to='/inicio' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src='imagenes/logo-mejorao.png' className='mx-2 ' height={200}/>

                            </Link> 
                            <ul className='col-12 col-md-3 list-unstyled'>
  <Link to="/contacto" className="btn btn-lg btn-light mt-5">Contactanos</Link>
</ul>
                        

                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Redes</li>
                            
                            <li className ='d-flex flex-column'>
                                
                                <a class= 'text-reset no-underline' href="https://www.instagram.com/alexj_rivera/">
                                    <i class="bi bi-instagram mb-2"> Nodo </i> 
                                </a>
                                   
                                <a class= 'text-reset no-underline' href="https://www.facebook.com/photo?fbid=872572607772121&set=a.357108282651892">
                                    <i class="bi bi-facebook mb-2 "> Nodo sierras </i>
                                </a>

                            </li>
                            
                            
                            </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2 bi-3x'> </li>

                            <li className ='d-flex flex-column'>
                                
                                
                                <i class="bi bi-telephone-forward-fill mb-2 mt-4 ">  0800-555 </i>
                                
                                <i class="bi bi-google mb-2"> Nodo123@gmail.com </i>
                         
                                </li>
                            
                            
                            </ul>
                    </nav>


                </div>



            </footer>

        </div>

    )




}
export default Footer;
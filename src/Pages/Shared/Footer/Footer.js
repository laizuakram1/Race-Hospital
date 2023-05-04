import React from 'react';
import '../Footer/Footer.css';
import { GiHospitalCross } from "react-icons/gi";
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div>
             <footer className="footer p-10 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link className="link link-hover">Health</Link>
                        <Link className="link link-hover">Insurance</Link>
                        <Link className="link link-hover">Financial</Link>
                        <Link className="link link-hover">Social Development</Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link className="link link-hover">Race Ltd.</Link>
                        <Link className="link link-hover">Race Hospital</Link>
                        <Link className="link link-hover">Race College</Link>
                        <Link className="link link-hover">Race Autism School</Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </footer>
                <footer className="footer px-10 py-4 text-base-content cursor-pointer bg-teal-300">
                    <div className="items-center grid-flow-col">
                        <GiHospitalCross  className='text-6xl '/>
                        <p>Race Hospital<br />Provide safe Health service since 2018 <br />&copy;{new Date().getFullYear()}</p>
                        
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <Link href='#' target='_blank'><FaFacebook className='hover:text-white text-3xl'/></Link>
                            <Link href='#' target='_blank'><FaLinkedin className='hover:text-white text-3xl'/></Link>
                            <Link to='https://github.com/laizuakram1?tab=repositories' target='_blank'><BsGithub className='hover:text-white text-3xl'/></Link>
                        </div>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;
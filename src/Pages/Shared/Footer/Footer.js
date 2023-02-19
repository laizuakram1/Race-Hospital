import React from 'react';
import '../Footer/Footer.css';
import { GiHospitalCross } from "react-icons/gi";
import {FaFacebook, FaLinkedin} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
             <footer className="footer p-10 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <footer className="footer px-10 py-4 text-base-content cursor-pointer bg-emerald-300">
                    <div className="items-center grid-flow-col">
                        <GiHospitalCross  className='text-3xl '/>
                        <p>Race Hospital<br />Provide safe Health service since 2018</p>
                    </div>
                    <div className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a href='#' target='_blank'><FaFacebook className='hover:text-white text-3xl'/></a>
                            <a href='#' target='_blank'><FaLinkedin className='hover:text-white text-3xl'/></a>
                            <a href='#' target='_blank'><BsGithub className='hover:text-white text-3xl'/></a>
                        </div>
                    </div>
                </footer>
        </div>
    );
};

export default Footer;
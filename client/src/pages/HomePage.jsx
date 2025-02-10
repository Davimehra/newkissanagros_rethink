import classNames from "classnames";
import HomepageCss from './HomePage.module.css';
import mainWallpaper from '../assets/mainWallpaper.webp'
import hoodFiberIcon from '../assets/hoodFiberIcon.png'
import hookIcon from '../assets/hookIcon.png'
import toolIcon from '../assets/toolIcon.jpg'
import workerIcon from '../assets/workerIcon.jpg'
import ironIcon from '../assets/ironIcon.jpg'
import fabricIcon from '../assets/fabricIcon.jpg'
import ownerWallpaper from '../assets/ownerWallpaper.jpg'
import NewKissanAgrosLogo from '../assets/NewKissanAgrosLogo.png'
import arrowgif from '../assets/animation/arrow.gif'
import arrow from '../assets/arrow.png'
import drawbarIcon from '../assets/drawbarIcon.png'
import hoodTextileIcon from '../assets/hoodTextileIcon.png'
import gmailLogo from '../assets/gmailLogo.webp'
import whatsappLogo from '../assets/whatsappLogo.webp'
import instagramLogo from '../assets/instagramLogo.webp'

import { useEffect, useRef, useState } from "react";
import { trustedCustomerCompanies } from "../data/customerCompany";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();
    const [currentAgency, setCurrentAgency] = useState(trustedCustomerCompanies[0]);
    const customerCompanyRef = useRef(null);

    const secondPageRef = useRef(null);
    const [secondPageProductTriggered, setSecondPageProductTriggered] = useState(false);
    const [secondPageServiceTriggered, setSecondPageServiceTriggered] = useState(false);

    const [thirdPage_trustedCompanyTriggered, setThirdPage_trustedCompanyTriggered] = useState(false);
    const [screenCoveredPer, setScreenCoveredPer] = useState(0);
    const [scrolling, setScrolling] = useState(null);


    useEffect(() => {
        window?.addEventListener("scroll", (event) => {
            setScrolling(event);

        })

        return () => {
            window?.removeEventListener('scroll', () => { })
        }
    }, [])

    useEffect(() => {


        const percentageScrolled = Math.floor(((window.scrollY / (document?.body?.scrollHeight - window.innerHeight)) * 100))
        console?.log(percentageScrolled)
        if (percentageScrolled > screenCoveredPer) {
            setScreenCoveredPer(percentageScrolled);
        }
        const secondPage_Product_Percent_Min = 7;
        const secondPage_Product_Percent_ = 16.6;
        const secondPage_Product_Percent_Max = 21;

        const secondPage_Quality_Percent_Min = 19;
        const secondPage_Quality_Percent_ = 24.5;
        const secondPage_Quality_Percent_Max = 28;

        const thirdPage_TrustedAgency_Percent_Min = 51;
        const thirdPage_TrustedAgency_Percent_ = 62;
        const thirdPage_TrustedAgency_Percent_Max = 65;



        if ((percentageScrolled >= secondPage_Product_Percent_Min && percentageScrolled <= secondPage_Product_Percent_Max) && !secondPageProductTriggered) {
            setSecondPageProductTriggered(true);
            // window?.scrollTo({ top: Math.floor(((secondPage_Product_Percent_ * (document?.body?.scrollHeight - window.innerHeight)) / 100)), left: 0, behavior: 'smooth' })

            setTimeout(() => {
                secondPageRef?.current?.querySelector('img[name=product-img')?.style?.setProperty('display', 'block')
            }, 100)
            setTimeout(() => {
                secondPageRef?.current?.querySelector('img[name=hood-fiber-main-wallpaper')?.style?.setProperty('display', 'block')
            }, 200)
            setTimeout(() => {
                secondPageRef?.current?.querySelector('label[name=service-heading-label')?.style?.setProperty('display', 'block')
            }, 300)
            setTimeout(() => {
                secondPageRef?.current?.querySelector('label[name=service-defination')?.style?.setProperty('display', 'block')
            }, 400)
        }

        if ((percentageScrolled >= secondPage_Quality_Percent_Min && percentageScrolled <= secondPage_Quality_Percent_Max) && !secondPageServiceTriggered) {
            setSecondPageServiceTriggered(true);
            // window?.scrollTo({ top: Math.floor(((secondPage_Quality_Percent_ * (document?.body?.scrollHeight - window.innerHeight)) / 100)), left: 0, behavior: 'smooth' })

            setTimeout(() => {
                secondPageRef?.current?.querySelector('div[name=sliding-tabs')?.style?.setProperty('display', 'flex')
            }, 100)

        }

        if ((percentageScrolled >= thirdPage_TrustedAgency_Percent_Min && percentageScrolled <= thirdPage_TrustedAgency_Percent_Max) && !thirdPage_trustedCompanyTriggered) {
            setThirdPage_trustedCompanyTriggered(true);
            // window?.scrollTo({ top: Math.floor(((secondPage_Quality_Percent_ * (document?.body?.scrollHeight - window.innerHeight)) / 100)), left: 0, behavior: 'smooth' })

            setTimeout(() => {
                customerCompanyRef?.current?.style?.setProperty('display', 'flex')
            }, 100)

        }


    }, [screenCoveredPer, scrolling])


    const refreshDiv = (element) => {
        setTimeout(() => {
            element.style?.setProperty("display", 'none');
        }, 10)
        setTimeout(() => {
            element.style?.setProperty("display", '');
        }, 50)
    }
    const onClickNext_Cust_Company = ({ next = true, selectedId }) => {
        return () => {
            let currentIndex = 0;

            trustedCustomerCompanies?.forEach((company, index) => {
                if (company?.id == currentAgency?.id) {
                    currentIndex = index;
                }
            });

            if (selectedId) {
                setCurrentAgency(trustedCustomerCompanies?.filter((currentcompany) => currentcompany?.id == selectedId)[0])
            } else {
                if (next) {
                    const nextIndex = (currentIndex + 1) % trustedCustomerCompanies?.length;
                    setCurrentAgency(trustedCustomerCompanies[nextIndex]);
                } else {
                    if (currentIndex == 0) {
                        const prevIndex = (trustedCustomerCompanies?.length - 1) % trustedCustomerCompanies?.length;
                        setCurrentAgency(trustedCustomerCompanies[prevIndex]);
                    } else {
                        const prevIndex = (currentIndex - 1) % trustedCustomerCompanies?.length;
                        setCurrentAgency(trustedCustomerCompanies[prevIndex]);
                    }

                }
            }


            refreshDiv(customerCompanyRef?.current?.querySelector("img[name=company-wallpaper]"));
            refreshDiv(customerCompanyRef?.current?.querySelector("label[name=company-service-label]"));
            refreshDiv(customerCompanyRef?.current?.querySelector("label[name=company-name-label]"));

        }


    }
    return (
        <div className={classNames(HomepageCss?.MainContainer)}>
            <div className={classNames(HomepageCss?.Header)}>
                <img src={NewKissanAgrosLogo} alt="new kissan agros logo" name='newkissanagros-logo-img'></img>
                <h1 name='company-name-label'>{`NEW KISSAN AGROS`}</h1>
                <div name='options-container'>
                    <label name='home-link-label'>{`HOME`}</label>
                    <label name='contact-link-label' onClick={() => {
                        document?.body?.querySelector('#in-touch')?.scrollIntoView();
                    }}>{`Get In Touch`}</label>
                </div>

            </div>

            <div className={classNames(HomepageCss?.FirstPage)}>
                <img name='main-wallpaper-img' alt="new kissan agro wallpaper" src={mainWallpaper}></img>

                <label name='heading-1-label'>{`Discover Your\nNew  Accessory`}</label>

                <label name='heading-2-label'>{`A New Part of\nLife Style Waiting For YOU`}</label>


            </div>

            <div ref={secondPageRef} className={classNames(HomepageCss?.SecondPage)}>
                <div name='relative'>
                    <img name='hood-fiber-main-wallpaper' alt="tractor hood" src={hoodFiberIcon}></img>
                    <label name='fiber-hood-label'>{`Fiber-Hood`}</label>

                    <img name='product-img' alt="tractor hook" src={hookIcon}></img>
                    <label name='service-heading-label'>{`Customize Your\nProduct`}</label>
                    <label name='service-defination'>{`At New Kissan Agros, we understand that every farming operation is unique, which is why we offer customizable tractor accessories tailored to your specific requirements. Whether you need attachments for increased efficiency, durability, or performance, I’m here to help you find the perfect solutions to elevate your agricultural productivity.`}</label>

                    <div name='sliding-tabs'>
                        <div >
                            <img name='feature-img' alt="new kissan agros mechanics" src={toolIcon}></img>
                            <label>{`Reliable Mechanics`}</label>
                        </div>
                        <div >
                            <img name='feature-img' alt="new kissan agros cloths" src={fabricIcon}></img>
                            <label>{`Non-Ignoreable Varieties`}</label>
                        </div>
                        <div >
                            <img name='feature-img' alt="new kissan agros build quality" src={ironIcon}></img>
                            <label>{`Build-To-Last Quality`}</label>
                        </div>
                        <div>
                            <img name='feature-img' alt="new kissan agros workers" src={workerIcon}></img>
                            <label>{`Highly Trained Workers`}</label>
                        </div>
                    </div>


                </div>
            </div>

            <div className={classNames(HomepageCss?.ThirdPage)}>
                <div name='relative'>
                    <div name='owner-showcase-div'>
                        <img name='owner-wallpaper-img' src={ownerWallpaper}></img>
                        <label name='company-owner-label'>{`Visionary Product\nby Rajesh, Ramesh, Puran Chand`}</label>
                        <label name='company-owner-moto-label'>{`Discover the future of agriculture with New Kissan Agros! We're dedicated to creating innovative tractor accessories that meet the evolving demands of modern farming. Upgrade your tractor today and experience the difference our thoughtful designs can make.`}</label>
                        <img name='company-logo-img' src={NewKissanAgrosLogo}></img>
                    </div>

                    <div ref={customerCompanyRef} name='trusted-partners-div'>
                        <div name='image-session'>
                            <img name='left-arrow' src={arrow} onClick={onClickNext_Cust_Company({ next: false })}></img>
                            <img name='company-wallpaper' src={currentAgency?.image}></img>
                            <img name='right-arrow' src={arrow} onClick={onClickNext_Cust_Company({ next: true })}></img>
                        </div>
                        <div name='information-session'>
                            <label name='heading-label'>{`Trusted Agencies`}</label>
                            <label name='company-name-label'>{currentAgency?.name}</label>
                            <label name='company-service-label'>{currentAgency?.service}</label>
                            <div name='iteration-specifier'>{trustedCustomerCompanies?.map((company) => <div key={company?.id} name={currentAgency?.id == company?.id ? 'active' : ''} onClick={onClickNext_Cust_Company({ selectedId: company?.id })}>{''}</div>)}</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={classNames(HomepageCss?.FourthPage_Product)}>
                <div name='relative'>
                    <div name='product-showcase-div'>
                        <label name='heading-label'>{`Products`}</label>
                        <div>
                            <img src={drawbarIcon}></img>
                            <label>{`Drawbar`}</label>
                        </div>
                        <div>
                            <img src={hookIcon}></img>
                            <label>{`HOOK`}</label>
                        </div>
                        <div>
                            <img src={hoodFiberIcon}></img>
                            <label>{`HOOD FIBER`}</label>
                        </div>
                        <div>
                            <img src={hoodTextileIcon}></img>
                            <label>{`HOOD-TEXTILE`}</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classNames(HomepageCss?.FifthPage_QueryForm)}>
                <div name='relative'>
                    <label name="Heading-label">{`Get in Touch`}</label>
                    <label name='Sub-Heading-label'>{`Schedule a Visit or Request More Information`}</label>
                    <div name='form-div'>
                        <label name='heading-label'>{`APPOINTMENT`}</label>
                        <div>
                            <label name='name-label'>Name</label>
                            <input name='name-input' type={'text'} ></input>
                        </div>
                        <div>
                            <label name='email-label'>Email</label>
                            <input name='email-input' type={'email'} ></input>
                        </div>
                        <div>
                            <label>{`Want To Place Order`}</label>
                            <div name='radio-div'>
                                <div>
                                    <input type={'radio'} name='wantplaceorder' value={'yes'}></input>
                                    <label>{'Yes'}</label>
                                </div>

                                <div>
                                    <input type={'radio'} name='wantplaceorder' value={'no'}></input>
                                    <label>{'No'}</label>
                                </div>

                            </div>
                        </div>
                        <div>
                            <label>{`Want To Visit`}</label>
                            <div name='radio-div'>
                                <div>
                                    <input type={'radio'} name='wantvisit' value={'yes'}></input>
                                    <label>{'Yes'}</label>
                                </div>

                                <div>
                                    <input type={'radio'} name='wantvisit' value={'no'}></input>
                                    <label>{'No'}</label>
                                </div>

                            </div>
                        </div>
                        <label name='submit-button'>{`Submit`}</label>
                    </div>
                </div>
            </div>

            <div id='in-touch' className={classNames(HomepageCss?.Footer_Contact)}>
                <div name='relative'>
                    <img src={NewKissanAgrosLogo} name='newkissanagros-logo-img'></img>

                    <label name='company-name-label'>{`New Kissan Agros`}</label>
                    <label name='company-address-label'>{`NEAR TODARMAL GATE\nSIRHIND, PUNJAB\nINDIA 140406`}</label>
                    <label name='privacy-link-label' onClick={() => {
                        navigate('/privacy-policy', { preventScrollReset: false });
                    }}>{`Privacy Policy`}</label>
                    <label name='contact-us-label'>{`Contact Us`}</label>
                    <img src={gmailLogo} name='gmail-logo'></img>
                    <img src={whatsappLogo} name='whatsapp-logo'></img>
                    <img src={instagramLogo} name='instagram-logo'></img>

                    <label name='creator'>{`@created 2025 by www.khojak.com`}</label>
                </div>
            </div>

        </div>
    )
}

export default HomePage;
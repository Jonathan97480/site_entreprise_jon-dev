/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { Main, SlidersHome, SectionSliderProject, SlidersWork } from '@/components'
import Carousel, { CarouselItem } from '@/components/Carousel'
import { Button, Modal } from '@/components/ux'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import bg_remarque from '../images/cover/remarque.webp'
import bg_services from '../images/cover/services.webp'
import bg_projet from '../images/cover/projet.webp'
import bg_wireframe from '../images/cover/wireframe.webp'
import bg_maquette from '../images/cover/maquette.webp'
import bg_development from '../images/cover/development.webp'
import bg_lancement from '../images/cover/start.webp'
import bg_woman from '../images/cover/woman_projet.webp'
import Link from 'next/link'
import { getProjects, Project } from './api/projects'
import { setProject } from '@/redux/slice/projectSlice'


export default function Home() {

    const dispatch = useDispatch()

    const [projects, setProjects] = useState<Project[]>([])
    const projectsRedux = useSelector((state: any) => state.Project.project)

    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Jon_dev",
        "url": "https://site.jon-dev.fr",
        "logo": "https://site.jon-dev.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.405bf297.png&w=48&q=75",
        "sameAs": [
            'https://www.linkedin.com/in/gauvin-jonathan/',
            'https://www.facebook.com/jon.dev974/',
            'https://www.instagram.com/jon97480/',
            'https://twitter.com/jonathanfrt9741',
        ],

        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+262 0692417574",
            "contactType": "customer service",
            "email": "jon.dev974@gmail.com",
            "url": "https://site.jon-dev.fr/contact",
            "areaServed": "FR",
            "availableLanguage": "French"
        },

        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Saint-Joseph",
            "addressRegion": "La R??union",
            "postalCode": "97480",
            "streetAddress": "6 rue Ren?? Hoarau ",
            "addressCountry": "FR"

        },

        "image": [
            "https://site.jon-dev.fr/_next/image?url=https%3A%2F%2Fapi.jon-dev.fr%2Fuploads%2FCapture_d_ecran_2023_01_23_181310_ad0acd00a3.jpg&w=640&q=75",
            "https://site.jon-dev.fr/_next/image?url=https%3A%2F%2Fapi.jon-dev.fr%2Fuploads%2FCapture_d_ecran_2023_01_16_150907_c0b1b99fe1.jpg&w=640&q=75",
            "https://site.jon-dev.fr/_next/image?url=https%3A%2F%2Fapi.jon-dev.fr%2Fuploads%2FCapture_d_ecran_2023_01_23_181117_ed827985b0.jpg&w=640&q=75",
        ],




    }


    useEffect(() => {

        if (projectsRedux.length <= 0) {

            getProjects().then((res) => {

                dispatch(setProject(res))
                setProjects(res)
            })
        } else {
            setProjects(projectsRedux)
        }

    }, [projectsRedux])


    return (
        <Main
            pageTitle={"Page d'accueille"}
            className='home hp-m'
            pageDescription={`Bienvenue sur Jon_dev, votre destination pour tout ce qui concerne le d??veloppement web et mobile.
            Nous offrons des services professionnels pour cr??er et am??liorer vos sites web et applications. 
            Notre ??quipe exp??riment??e peut vous aider ?? atteindre vos objectifs. 
            Visitez notre site pour en savoir plus sur nos services et pour obtenir des conseils sur le d??veloppement.`}
            schema={schema}
        >
            <section className='home__heroHome' id='home'>
                <Carousel
                    typeController='Circle'
                    btnEnabled={false}
                    delay={10000}
                >

                    <CarouselItem>
                        <SlidersHome
                            img={{
                                src: bg_woman.src,
                                alt: 'logo du site',
                            }}
                            title={'Vous avez un projet'}
                            text={`Notre ??quipe est l?? pour vous accompagner dans la concr??tisation de vos projets de site web et d'application mobile. Nous mettons notre expertise et notre engagement ?? votre disposition pour vous aider ?? r??aliser vos objectifs avec succ??s. Contactez-nous d??s maintenant pour en savoir plus sur nos services.`}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersHome
                            img={{
                                src: bg_services.src,
                                alt: 'logo du site',
                            }}
                            title={'Notre exp??rience ?? votre service'}
                            text={
                                `Notre ??quipe est fi??re de partager son expertise et son savoir-faire avec nos clients. Nous avons accumul?? de nombreuses ann??es d'exp??rience dans le d??veloppement de sites web et d'applications mobiles pour des entreprises de toutes tailles. Cette exp??rience nous permet de comprendre les besoins de nos clients et de leur offrir des solutions personnalis??es pour r??pondre ?? leurs attentes.`
                            }
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersHome
                            img={{
                                src: bg_remarque.src,
                                alt: 'logo du site',
                            }}
                            title={'Faite vous remarqu??'}
                            text={
                                `Faites-vous remarquer" en optant pour une pr??sence en ligne professionnelle et moderne. Nous comprenons l'importance de la premi??re impression en ligne pour les entreprises et les marques. C'est pourquoi nous mettons tout en ??uvre pour d??velopper des sites web et des applications mobiles qui refl??tent votre image de marque de mani??re coh??rente et attrayante. Avec une exp??rience utilisateur fluide et une interface intuitive, nous vous aidons ?? vous d??marquer sur un march?? en constante ??volution. `
                            }
                        />
                    </CarouselItem>
                </Carousel>
            </section>
            <section className='home__about ph-26' id='about'>
                <h1 className='title'>Qui sommes nous</h1>
                <div className='home__about--content'>
                    <Image
                        src={require('../images/cover/about.webp')}
                        alt='logo du site'
                        width={576}
                        height={309}
                    />
                    <div className='home__about--content_insertion'>
                        <p className='paragraphe'>
                            Jon_dev est une auto entreprise de profession lib??rale sp??cialis??e dans
                            le d??veloppement web et mobile pour les petites et moyennes entreprises.
                            elle ?? pour objectif de permettre ?? nos clients d'??tre visibles sur
                            Internet en utilisant les derni??res technologies telles que React, React
                            Native, Nextjs, WordPress, PrestaShop, Strapi, Firebase et Redux...
                        </p>
                        <span>
                            <Link className='btn btn-primary' href="about" >En savoir plus</Link>
                        </span>
                    </div>
                </div>
            </section>
            <SectionSliderProject projects={projects} />

            <section className='home__work ph-26' id='methode'>
                <h2 className='home__work-title title'>Nos m??thode de travail</h2>

                <Carousel
                    btnEnabled={false}
                    indicatorPosition='top'
                    delay={10000}
                >
                    <CarouselItem

                    >
                        <SlidersWork
                            img={{
                                src: bg_projet.src,
                                alt: 'illustration de la m??thode de travail 1 projet',
                            }}
                            title={'Discussion du projet avec le client'}
                            text={
                                "Le client nous a fourni des informations d??taill??es sur ses attentes pour ce projet, ainsi que sur ses objectifs commerciaux. Nous allons maintenant commencer ?? d??finir l'apparence de son site web ou de son application mobile, en collaboration avec lui."
                            }
                            slideNumber={1}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersWork
                            img={{
                                src: bg_wireframe.src,
                                alt: 'illustration de la m??thode de travail 2 Wireframe',
                            }}
                            title={'Conception Wireframe'}
                            text={
                                "Nous entamons la phase de conception du wireframe pour le site web ou l'application mobile. Nous soumettons cette esquisse de conception au client pour validation avant de passer ?? la cr??ation de la maquette."
                            }
                            slideNumber={2}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersWork
                            img={{
                                src: bg_maquette.src,
                                alt: 'illustration de la m??thode de travail 3 maquette',
                            }}
                            title={'Conception Maquette'}
                            text={
                                'La maquette sera ??galement soumise au client pour validation. De plus, nous nous occupons de cr??er un Moodboard pour assister le client dans la d??finition de la charte graphique.'
                            }
                            slideNumber={3}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersWork
                            img={{
                                src: bg_development.src,
                                alt: 'illustration de la m??thode de travail 4 d??veloppement',
                            }}
                            title={'D??veloppement'}
                            text={
                                "Le client peut suivre l'avanc??e de son projet en acc??dant ?? son compte client sur notre site, o?? il peut acc??der ?? des informations d??taill??es sur l'??volution de son projet et communiquer directement avec l'??quipe de d??veloppement."
                            }
                            slideNumber={4}
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <SlidersWork
                            img={{
                                src: bg_lancement.src,
                                alt: 'illustration de la m??thode de travail 4 d??veloppement',
                            }}
                            title={'D??ploiement'}
                            text={
                                "Avant de proc??der ?? son d??ploiement public, le site web ou l'application mobile est soumis ?? des tests utilisateurs pendant une semaine. Cela nous permet de v??rifier la qualit?? et la fonctionnalit?? du produit final. Une fois ces tests effectu??s avec succ??s, nous mettons le produit ?? disposition de tous les utilisateurs."
                            }
                            slideNumber={5}
                        />
                    </CarouselItem>
                </Carousel>
            </section>


        </Main>
    )
}

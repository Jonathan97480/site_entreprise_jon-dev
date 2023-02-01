/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import ImageLoader from "../ImageLoader"
import GetLinkProject from "./GetLinks"
import { ModalProjectProps } from "./interFaceSliderProject"
import { TechnologiesLogo } from "./TechnologiesLogo"
import { AiFillCloseCircle } from 'react-icons/ai';


export const ModalProject = ({ title, img, tech, text, links, isVisible, handleCloseModal }: ModalProjectProps) => {

    const [isView, setIsView] = useState(isVisible)


    useEffect(() => {
        setIsView(isView)
        document.body.style.overflow = isView ? "hidden" : "unset";

        if (isView === false) {
            handleCloseModal(isView)
        }
    }, [isView])



    return (
        <article className='modalProject' style={{ display: isView ? 'flex' : 'none' }} >
            <div className='modalProject__content'>
                <div className='modalProject__content__header'>
                    <h1 className="title--medium">{title}</h1>
                    <AiFillCloseCircle className='modalProject__content__header__btnClose' onClick={() => {
                        setIsView(false)

                    }

                    } />
                </div>
                <div className='modalProject__content__body'>
                    <div className='modalProject__content__body__cover'>
                        <ImageLoader
                            className='modalProject__content__body'
                            src={img.src}
                            alt={img.alt}
                            width={397}
                            height={252}
                            loading='lazy'
                        />
                    </div>
                    <div className='modalProject__content__body__info'>
                        <TechnologiesLogo tech={tech} />
                        {AddBr({ text })}

                        <div className='modalProject__content__body__info__links'>

                            <span className='modalProject__content__body__info__links__content'>
                                <GetLinkProject
                                    links={links}
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>



    )

}

export const AddBr = ({ text }: { text: string }) => {
    const textSplit = text.split('.')
    let newTexte = "";
    const newString = textSplit.map((_texte, index) => {
        if (_texte !== '') {

            newTexte += `<p class="paragraphe" >${_texte}.<p/>`
        }

    })

    return (
        <div className="modalProject__content__body__info__paragraphe" dangerouslySetInnerHTML={{ __html: newTexte }} />
    )
}
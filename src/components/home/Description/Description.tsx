"use client"
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
    });

  console.log(buttonStyles);

    return (

        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image 
                         src="/images/description.jpeg"
                         alt="products marketplace"
                         fill
                         placeholder='blur'
                         blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            
            <div className="{styles.Description__text}">

                <h2>Descripcion</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae, temporibus ex ratione amet quasi consequuntur, ad odio dolor qui cupiditate sed? Magnam nobis autem odit dolores voluptate ad nostrum!</p>

            </div>

        </section>

    )

}
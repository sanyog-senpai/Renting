import React from 'react'
import Card from '../Card'
import Container from '../Container'
import { styles } from '@/app/styles'

interface CardCollectionProps {
    heading?: string,
    subheading?: string,
    className?: string,
}

const CardCollection: React.FC<CardCollectionProps> = ({ heading, subheading }) => {

    return (
        <>
            <Container class="sm:py-20 py-5">
                <p className={styles.sectionSubText}>{subheading}</p>
                <h2 className={styles.sectionHeadText}>{heading}</h2>
                <div className="card-wrapper mt-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-4 md:py-2 xl:py-5">
                    <Card />
                </div>
            </Container>
        </>
    )
}

export default CardCollection
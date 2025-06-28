"use client"

import { useParams } from 'next/navigation'

export default function TechnicalBooklet() {
    const params = useParams();

    return (
        <iframe src={`/downloads/technical_booklet_${params.locale}.pdf#toolbar=0`} frameBorder="0" width="100%" height={1500}></iframe>

    )

}
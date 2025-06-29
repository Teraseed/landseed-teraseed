"use client"

import { useParams } from 'next/navigation'

export default function TechnicalBooklet() {
    const params = useParams();

    return (
        <div className="pointer-events-none">
            <iframe className="pointer-events-none" src={`/downloads/technical_booklet_${params.locale}.pdf#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&scrollbar=0`} width="100%" height={9000}></iframe>
        </div>

    )

}
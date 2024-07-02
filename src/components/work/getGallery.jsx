import React from 'react'
import { findGallery, Gallerys } from '../hooks/data'

const getGallery = (service) => {
    return Gallerys[findGallery.indexOf(service)]
}

export default getGallery
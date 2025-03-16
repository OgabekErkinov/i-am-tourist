import React from 'react'
import AlertModal from './all-modals/AlertModal'
import ContactModal from './all-modals/ContactModal'
import InfoPlaceModal from './all-modals/InfoPlaceModal'
import MobileMenu from './all-modals/MobileMenu'

const ModalContainer = () => {
  return (
    <>
    <AlertModal/>
    <ContactModal/>
    <InfoPlaceModal/>
    <MobileMenu/>
    </>
  )
}

export default ModalContainer

import React from 'react'
import { useTranslation } from 'react-i18next';

import Navbar from '../navbar/navbar'
import Header from '../header/header'

export default function Blogs() {
  const { t } = useTranslation();
  return (
      <>
          <Navbar />
          <Header highlight='opportunities' />
          <h1>{t('welcome')}</h1>
      </>
  )
}

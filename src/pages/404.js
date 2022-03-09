import React from 'react'

import MainLayout from "../layouts/MainLayout";

const Page404 = () => {

  return (
    <MainLayout>
      <>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 150,
          flexDirection: 'column'
        }}>
          <div style={{fontSize: 100, fontWeight: '600', marginBottom: 20}}>404</div>
          <div style={{fontSize: 26, fontWeight: '300'}}>Страница не найдена</div>
        </div>
      </>
    </MainLayout>
  )
}

export default Page404

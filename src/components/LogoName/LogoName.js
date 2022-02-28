import React from 'react'
import styles from './LogoName.module.css'
import LogoNameIcon from '../../assets/img/Logoname.svg'
import { Link } from 'react-router-dom'

import cn from 'classnames'

const LogoName = ({ color, children, href, className, ...props }) => {
  return (
    <div
      className={cn(styles.logo, className, {
        [styles.logo_header]: color == 'logo_header',
        [styles.logo_footer]: color == 'logo_footer',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
      <Link to='/'>
        <LogoNameIcon />
      </Link>
    </div>
  )
}

export default LogoName

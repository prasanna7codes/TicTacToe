import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from '@react-native-vector-icons/fontawesome6'
type IconsProps=PropsWithChildren<{
    name:string;
}>

const Icons = ({name}:IconsProps)=> {
  switch (name) {
    case 'circle':
        return < Icon name="circle" size={38}/>
        
    

    case 'cross':
            return < Icon name="xmark" size={38} iconStyle="solid"/>
            

    default:
        return < Icon name="pencil" size={38} iconStyle="solid"/>
  }
}

export default Icons

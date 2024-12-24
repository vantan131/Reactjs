import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets'

const DisplayAlbum = () => {
    //useParams là một hook được React Router cung cấp. Nó dùng để truy cập các tham số động trong URL.
 const {id} = useParams()
 const albumData = albumsData[id];
 console
 
    return (
    <>
    <Navbar/>
    </>
  )
}

export default DisplayAlbum
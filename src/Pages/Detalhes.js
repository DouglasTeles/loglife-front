import React, { useEffect, useState } from 'react'

import api from '../services/api'
import {useParams} from 'react-router-dom'

import LoadDetalhes from '../Components/LoadDetalhes'
import HeaderNav from '../Components/HeaderNav'
function Detalhes() {
    
    return (
        <>
            <HeaderNav/>
            <LoadDetalhes/>
        </>
    )
}

export default Detalhes

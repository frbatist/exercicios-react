import React from 'react'
import ReactDOM from  'react-dom'
import Componente, {segundo} from './componente'

ReactDOM.render(
    <div>           
        <Componente />
        <segundo />
    </div>
    ,document.getElementById('app')
)
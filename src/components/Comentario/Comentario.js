import React from 'react'
import  {ComentarioSection}  from './styled'

export default function Comentario(props) {
    return (
        <ComentarioSection>
            <input placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentario}</p>
        </ComentarioSection>
    )
}

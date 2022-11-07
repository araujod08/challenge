import React, { Component } from 'react'
import { CommentContainer, InputComentario } from './styeled'

export class SecaoComentario extends Component {
	state = {

	}

	onChangeComentario = () => {

	}

	render() {
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</CommentContainer>
	}
}

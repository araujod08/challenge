import React from 'react';
import Post from './components/Post/Post';
import { Inputs, MainContainer } from './style';
import { Header } from './components/Header/Header'
class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: "Robervaldo",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
        legenda: <p>
          Lorem ipsum dui maecenas quisque sagittis, nisi velit pretium mi habitant, magna vulputate quisque magna.
        </p>
      },
      {
        nomeUsuario: "Jorginho",
        fotoUsuario: "https://picsum.photos/50/60",
        fotoPost: "https://picsum.photos/200/160",
        legenda: <p>
          Lorem ipsum dui maecenas quisque sagittis, nisi velit pretium mi habitant, magna vulputate quisque magna.
        </p>
      },
      {
        nomeUsuario: "Gustavo",
        fotoUsuario: "https://picsum.photos/50/70",
        fotoPost: "https://picsum.photos/200/170",
        legenda: <p>
          Lorem ipsum dui maecenas quisque sagittis, nisi velit pretium mi habitant, magna vulputate quisque magna.
        </p>
      }
    ],
    inputUsuario: "",
    inputFotoPost: "",
    inputFotoUsuario: "",
    inputLegenda: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.inputUsuario,
      fotoUsuario: this.state.inputFotoUsuario,
      fotoPost: this.state.inputFotoPost,
      legenda: this.state.inputLegenda
    }
    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }
  onChangeInputUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
  };
  onChangeinputFotoUsuario = (event) => {
    this.setState({ inputFotoUsuario: event.target.value })
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ inputFotoPost: event.target.value })
  };
  onChangeLegenda = (event) => {
    this.setState({ inputLegenda: event.target.value })
  }


  render() {
    const arrayDeComponentes = this.state.post.map((item) => {

      return (
        <Post
          {...item}
        />
      )
    })

    return (
      <MainContainer>
        <Header />
        <Inputs class="input-group">
          <input
            value={this.state.inputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome Usuário"}
            class="input" />
          <input
            value={this.state.inputFotoUsuario}
            onChange={this.onChangeinputFotoUsuario}
            placeholder={"foto usuário"}
            class="input"
          />
          <input
            value={this.state.inputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto post"}
            class="input"
          />
          <input
            value={this.state.inputLegenda}
            onChange={this.onChangeLegenda}
            placeholder={"mensagem"}
            class="input"
          />
        </Inputs>
        <button onClick={this.adicionaPost}>Publicar</button>
        {arrayDeComponentes}
      </MainContainer>
    );
  }




}
export default App;


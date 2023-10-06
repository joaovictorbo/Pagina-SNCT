import {
  MDBContainer,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import {useState} from 'react';

function Login() {

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Entrar com</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '20%'}}>
              <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="lg"/>
              </MDBBtn>

            </div>

            <p className="text-center mt-3">ou</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Senha' id='form2' type='password'/>

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Manter conectado' />
            <a href="teste">Esqueceu a senha?</a>
          </div>

          <MDBBtn className="mb-4 w-100">Conectar</MDBBtn>
          <p className="text-center">Não é um membro? <button type="button" class="btn btn-tertiary" data-mdb-ripple-color="light" onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>Registrar-se</button></p>

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Resgistrar-se com</p>

            <div className='d-flex justify-content-between mx-auto' style={{width: '20%'}}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="lg"/>
              </MDBBtn>
            </div>

            <p className="text-center mt-3">ou</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Nome' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Sobrenome' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Senha' id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='Eu li e concordo com os termos' />
          </div>

          <MDBBtn className="mb-4 w-100">Registrar-se</MDBBtn>

        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Login;
import logo from './logo.jpg';
function Ponto(){
    return (
        <>
        <div class="d-flex align-items-center justify-content-center" style={{height: "200px"}}>
            <button type="button" class="btn btn-primary ">Clique aqui para bater seu ponto</button>
        </div>
        
        <div class=" d-flex align-items-center justify-content-center">
            <img src={logo} alt="a" width="50%"loading="lazy"/> 
        </div>
        </>

    );
}

export default Ponto;
import StyledAddButton from './StyledAddButton';
const Home = () =>{
    return(
        <div>
            <h1 className="styled-button" style={{color: "white", paddingLeft: "500px", paddingTop: "40px"}}>Button Styled using Styled Components</h1>
            <StyledAddButton>Styled Button</StyledAddButton>
        </div>
    )
}

export default Home;
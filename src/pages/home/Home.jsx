import {Container}  from "react-bootstrap"
import NavBarSection from "../../components/common/navbar/NavBarSection"
import classes from "./Home.module.css"



function Home() {
    return(
       <Container className={classes.bgcustomgray}>
         <NavBarSection />
       </Container>
    )
}

export default Home;
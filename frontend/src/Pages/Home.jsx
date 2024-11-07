
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from "../Components/About/About"
import Skills from '../Components/Skills/Skills';
import Projects from '../Components/Projects/Projects';
// import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
// import { useParams } from 'react-router-dom';

const Home=()=> {
  // const {id}=useParams();

  // const [users , setUsers]=useState([])


  // const fetchUserInfo = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8081/users/${id}`,{
  //       method:'GET',
  //       headers:{
  //         "Content-Type":"application/json"
  //       }
  //     });

  //     if (response.ok){
  //       const data = await response.json();
  //       console.log('fetch data',data);
  //       setUsers(data);
  //     }else{
  //       console.log("failed to fetch user info")
  //     }

  //   } catch (error) {
  //     console.error(" error fetching selected user data")
  //   }
  // }



  // useEffect(() => {
  //   fetchUserInfo();
  // }, []);


  
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Skills/>
    <Projects/>
    {/* <Contact/> */}
    <br />
    <h2>If you want to connect with me ! Just SignUp</h2>
    <Footer/>
    </>
  )
}

export default Home;

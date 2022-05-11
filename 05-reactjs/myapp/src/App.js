import HelloWorld from "./components/01-hello-world";
import Comp from './components/02-comp';
import Jsx, {test1, test2} from "./components/03-jsx";
import Jsx2 from "./components/04-jsx2";
import JsxLoop from "./components/05-jsx-loop";
import JsxPractise from "./components/06-jsx-practise";
import StyleInline from "./components/07-style-inline";
import StyleInternal from "./components/08-style-internal";
import StyleExternal from "./components/09-style-external";
import Clock1 from "./components/10-clock1";
import Props from "./components/11-props";
import Clock2 from "./components/12-clock2";
import Image from "./components/13-image";
import ImagePractise from "./components/14-image-practise";
import ProfileCard from "./components/15-profile-card";
import BootstrapStatic from "./components/16-bootstrap-static";
import BootstrapDinamik from "./components/17-bootstrap-dinamik";
import State from "./components/19-stateless";
import Stateless from "./components/20-state";
import Counter from "./components/21-counter";
import Birthday from "./components/22-birthday/birthday";
import UseEffect from "./components/22-useEffect";
import Clock3 from "./components/23-clock-3";
import UseEffect2 from "./components/24-useeffect-2";
import RandomImage from "./components/25-random-image";
import RandomImage2 from "./components/26-random-image-2";
import UserCards from "./components/27-usercards/user-cards";
import Countries from "./components/28-countries/countries";
import Form1 from "./components/29-forms/form1";
import Form3 from "./components/29-forms/form3";
import Form4 from "./components/29-forms/form4";
import Form5 from "./components/29-forms/form5";
import Shop from "./components/18-bootstrap-practice/shop";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/00-header";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/00-menu";
import {StoreContext} from "./store";
import {useEffect,useState} from "react";
import axios from "axios";
import SetContext from "./components/30-set-context";
import GetContext from "./components/31-get-context";
import Exchange from "./components/32-exchange/exchange";
import Dashboard from "./components/33-children-props/dashboard";
import Users from "./components/33-children-props/users";
const App = () => {
  const [color, setColor] = useState("blue");
  const [rates, setRates] = useState({});

  const getRates = () => { 
    axios("https://api.frankfurter.app/latest?from=try")
    .then(resp=>{
      setRates(resp.data.rates);
    })
  }

  useEffect(() => {
    getRates();
  }, [])

  return (

    <StoreContext.Provider  value={{color,setColor,rates}}>
    <BrowserRouter>
      <Header/>
      <Container fluid>
        <Row>
          <Col md={3} className="bg-light"><Menu/></Col>
          <Col md={9}>

              <Routes>
                <Route path="/hello-world" element={<HelloWorld/>}/>
                <Route path="/comp" element={<Comp/>}/>
                <Route path="/jsx1" element={<Jsx/>}/>
                <Route path="/jsx2" element={<Jsx2/>}/>
                <Route path="/jsx3" element={<JsxLoop/>}/>
                <Route path="/jsx4" element={<JsxPractise/>}/>
                <Route path="/useeffect-2" element={<UseEffect2/>}/>
                <Route path="/clock1" element={<Clock1/>}/>
                <Route path="countries" element={<Countries/>}/>
                <Route path="/random-image" element={<RandomImage/>}/>
                <Route path="/state" element={<State/>}/>
                <Route path="/profile-card" element={<ProfileCard 
                                                      name="Ali veliy" 
                                                      location="İstanbul, Türkiye" 
                                                      avatar="profile.jpg" 
                                                      shot="4" 
                                                      followers="4523" 
                                                      followings="50"/>}/>
                <Route path="user-cards" element={<UserCards/>}/>
                <Route path="form5" element={<Form5/>}/>
                <Route path="form4" element={<Form4/>}/>
                <Route path="form3" element={<Form3/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="birthday" element={<Birthday/>}/>
                <Route path="style-external" element={<StyleExternal/>}/>
                <Route path="bootstrap-dinamik" element={<BootstrapDinamik/>}/>
                <Route path="set-context" element={<SetContext/>}/>
                <Route path="get-context" element={<GetContext/>}/>
                <Route path="/exchange" element={<Exchange/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
              </Routes>



          </Col>
        </Row>
      </Container>


{/*       
      

      <StyleInline/>
      <StyleInternal/>
      <StyleExternal/>
      <Clock1/>
      <Props ad="Metin" yas="33"/>
      <Clock2 color="red" bgColor="gray"/>
      <Clock2 color="yellow" bgColor="navy"/>
      <Clock2/>
      <Image/>
      <ImagePractise/>
       <ProfileCard 
      name="Ali Gel" 
      location="İstanbul, Türkiye" 
      avatar="profile.jpg" 
      shot="4" 
      followers="4523" 
      followings="50"/>
      <BootstrapStatic/>
      <BootstrapDinamik/>
      <Shop/>
      <Stateless/>
      <State/>
      <Counter/>
      <Birthday/>
      <UseEffect/>
      <Clock3/>
      <UseEffect2/>
      <RandomImage/>
      <RandomImage2/>
      <UserCards/>
      <Countries/>
      <Form1/>
      <Form2/>
      <Form3/>
      <Form4/>
      <Form5/>
 */}    
    
      
    
     </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;

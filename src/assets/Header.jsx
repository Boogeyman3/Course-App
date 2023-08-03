
import { useState } from 'react';
import styled from 'styled-components';
import './Header.css';
import { Label, Login } from '@mui/icons-material';


const Headers = styled.header``;

const Navbar = styled.nav`
  background: #f9f9f9;
  height: 100px;
  padding-top: 13px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  color: #001C30;
  font-size: 20px;
  font-weight: bold;
  padding: 0 20px;

`;

const Cap = styled.i`
  color: #49CA8A;
`;

const Links = styled.ul`
  display: flex;
  gap: 2rem;
  margin: 0 auto;
  font-size: 17px;

  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 11%;
    right: ${(props) => (props.open ? '3%' : '100%')};
    width: 250px;
    height: 58vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
    border-radius: 10px;
    padding: 10px;
    transition: all 0.10s ease;
    background-color: #f9f9f9;
    color: #080707;
  }
`;

const Li = styled.li`
padding: 6px;
&:hover {
  color: #49ca8a;
}`;

const Register = styled.div`
  display: flex;
  gap: 2rem;
  padding: 12px;
  margin-top: 15px;
`;

const Cart = styled.p`
     
    padding: 20px;
`;

const Loging = styled.button`
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: #001c30;
  background: none;
`;

const Signup = styled.button`
  background-color: #49ca8a;
  color: #fff;
  padding: 10px;
  border: none;
  font-size: 15px;
  border-radius: 25px;
`;

const Bars = styled.li`
  padding: 10px;
  display: none;
 
  @media only screen and (max-width: 768px) {
    display: block;
    width: 70px;
    height: 50px;
    background: none;
    color: #001c30;
   font-size: 30px;
    font-weight: bold;
    cursor: pointer;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Headers>
        <Navbar>
          <Logo>
            <Cap>
              <i className="fa-solid fa-graduation-cap"></i>
            </Cap>
            I-ESchool
          </Logo>
          <Links open={open}>
          
            <Li>Home</Li>
            <Li>Courses</Li>
            <Li>About</Li>
            <Li>Blog</Li>
            <Li>Contact</Li>
            <Loging>Login</Loging>
            <Signup>SignUp</Signup>
          </Links>
          <Register>
            <Cart>
              <i className="fa-solid fa-cart-shopping"></i>
            </Cart>
           
            <Bars onClick={() => setOpen((curr) => !curr)}>
              {open ? <>&#10005;</> : <>&#8801;</>}
            </Bars>
          </Register>
        </Navbar>
      </Headers>
    </>
  );
}

export default Header;

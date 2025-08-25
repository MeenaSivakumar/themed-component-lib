import styled from "styled-components";

export const NavBar = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:15px;
background:var(--background);
color:var(--text-color);
font-size:var(--font-size-md);
text-align:center;


ul{
display:flex;
justify-content:center;
align-items:center;
gap:10px;
list-style:none;
border:1px solid blue;
border-radius:10px;
padding:10px;
box-shadow:0px 4px 8px rgba(0,0,0,0.5)
}

a{
text-decoration:none;
color:var(--color-secondary);
font-weight:bold;
}

& a:hover{
color:var(--color-primary);
}

`;
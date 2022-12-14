import { createGlobalStyle } from "styled-components";

let vh = window.innerHeight;

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;

}

*,
*::after,
*::before {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body{
  width:100%;
  height: ${vh}px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: ${({ theme }) => theme.colorTwo};

}

h1{
  margin: 1rem 2rem;
  font-family: 'Fredoka One', cursive;
  font-size: 3rem;
  letter-spacing: 2px;
  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-clip: border-box;
  background-size: 600%;
  color: #fff;
  background-clip: text;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
	animation: gradient 15s ease infinite;

}

h3{
  font-size: 1.5rem;
  font-weight: bolder;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.colorFive};
}

@keyframes gradient {
	0% {
		color: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}



`;

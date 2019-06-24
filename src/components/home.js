import React from 'react';
import Styles from '../styles/home.module.css';
import Button from './shared/button';

const Home = () => (
	<div className={Styles.container}>
		<div className={Styles.home}>
			<h1 className={Styles.title}>SOMOS OPERADORES LOGISTICOS</h1>
			<Button text="VER MÁS"/>
		</div>
		
	</div>
);

export default Home;

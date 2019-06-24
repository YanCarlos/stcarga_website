import React from 'react';
import { Button } from 'reactstrap';
import Styles from '../../styles/shared.module.scss';

const PrimaryButton = ({text}) => (
	<div>
    <Button color="primary" className={Styles.button}>{text}</Button>
  </div>
);


export default PrimaryButton;

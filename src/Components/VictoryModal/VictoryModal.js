import React from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import './VictoryModal.css';
export default class VictoryModal extends ModalComponent {
  buttonText = () => 'New Game';
  message = () => `You've won! Congratulations!`;
  crown = true;
}
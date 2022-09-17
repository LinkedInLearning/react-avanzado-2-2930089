import { Avatar, Button, Chip, Divider } from '@mui/material';
import { ChangeEvent } from 'react';
import styles from './store-merchandise.module.scss';

/* eslint-disable-next-line */
export interface StoreMerchandiseProps {
  title: string;
  avatar: string;
  name: string;
  active: boolean;
}

function notify() {
  console.log('Hola');
}

function handleChangeName(name: ChangeEvent<HTMLInputElement>) {
  console.log(name.target);
}

export function StoreMerchandise(props: StoreMerchandiseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to StoreMerchandise!</h1>
      <Chip
        avatar={<Avatar alt={props.name} src={props.avatar} />}
        label={props.name}
      />
      <div id="user-form">
        <label htmlFor="user-name">Nombre de Usuario</label>
        <input
          id="user-name"
          type="text"
          value={props.name}
          onChange={handleChangeName}
        />
      </div>
      <Divider textAlign="left">ACTIONS</Divider>
      <Button variant="contained" disabled={!props.active} onClick={notify}>
        Save
      </Button>
    </div>
  );
}

export default StoreMerchandise;

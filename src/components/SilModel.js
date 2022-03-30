import { Button, Modal } from 'semantic-ui-react';
import React, { useState } from 'react';
import { api } from '../api/api';

const SilModel = ({ yazi, push }) => {

  const [open, setOpen] = useState(false);
  const [hata, setHata] = useState("");
  const show = () => { setOpen(true) };
  const close = () => { setOpen(false) }
  console.log(yazi);

  const handleDelete = (id) => {
    api()
      .delete(`/posts/${id}`)
      .then((response) => {
        //Modal Close
        close();
        //Push to Home
        push('/');
      })
      .catch(() => {
        setHata("Yazıyı silerken hata oluştu.")
      })
  }

  return (
    <React.Fragment>
      <Button color="red" onClick={show}>Sil</Button>
      <Modal size="mini" open={open} onClose={close}>
        <Modal.Header>Yazıyı Siliniz</Modal.Header>
        <Modal.Content>
          <p><b>{yazi.title}</b> başlıklı Yazıyı Silmek İstediğinizden emin misiniz?</p>
          {hata && <p>{hata}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button nagative onClick={close}>İptal Et</Button>
          <Button positive icon="delete" labelposition="right" content="Evet, Sil" onClick={handleDelete(yazi.id)} />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  )
}
export default SilModel;
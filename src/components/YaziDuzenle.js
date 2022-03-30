import React, { useEffect, useState } from 'react';
import YaziFormu from './YaziFormu';
import { api } from '../api/api';

const YaziDuzenle = (props) => {

  const [yazi, setYazi] = useState({});
  const { id } = props.match.params;
  //console.log({ id });

  useEffect(() => {
    api().get(`/posts/${id}`)
      .then((response) => {
        //setYazi(response.yazi)
        setYazi({ title: response.data.title, content: response.data.content });
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <div>
      <h1>YaziDuzenle </h1>
      <YaziFormu yazi={yazi} />
    </div>
  )
}

export default YaziDuzenle;
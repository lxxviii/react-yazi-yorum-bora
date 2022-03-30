import React, { useState, useEffect } from 'react';
// import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import { api } from '../api/api';

const YaziFormu = (props) => {

    // console.log("Props Yazi Formu", props)
    const [yazi, setYazi] = useState({ title: props.yazi.title || '', content: props.yazi.content || '', })
    const [hata, setHata] = useState("");

    //console.log("Yazı Formu Props : " + props);
    //console.log("Yazı Formu Props : " + yazi);

    const onInputChange = (event) => setYazi({ ...yazi, [event.target.name]: event.target.value })

    const onFormSubmit = (event) => {
        event.preventDefault();
        /*  //Forma Dönüşmesi Halinde preventDefault() Kullanıbilir 
            //yoksa gerekli değil SUBMIT varsa riske girme
        */
        setHata('');

        if (props.yazi.title) {
            api().put(`/posts/${props.match.params.id}`)
            .then((response) => {
                console.log(response);
                props.history.push(`/posts/${props.match.params.id}`);
            })
                .catch((error) => {
                    setHata("Başlık ve Yazı İçeriği alanları Zorunludur");
                })

        } else {
            api().post('/posts', yazi)
                .then((response) => {
                    props.history.push('/');
                })
                .catch((error) => {
                    setHata("Başlık ve Yazı İçeriği alanları Zorunludur");
                })
        }
    }

    useEffect(() => {
        if (props.yazi.title && props.yazi.content) setYazi()
    }, [props.yazi])

    return (
        <React.Fragment>
            {
                hata && (
                    <div className="ui error message">
                        <div className="header">Hata</div>
                        <p>{hata}</p>
                    </div>
                )}
            <div className="ui form">
                <div className="field">
                    <label>Yazı Başlığı</label>
                    {/* <div className="ui submit button">Submit</div> */}
                    <input value={yazi.title} type="text" name="title" onChange={onInputChange} />
                    <label>Yazı İçeriği </label>
                    <textarea name="content" value={yazi.content} rows="3" onChange={onInputChange}></textarea>
                </div>
                <button className="ui primary button" onClick={onFormSubmit} >
                    Kaydet
                </button>
                <button className="ui button">
                    Vazgeç
                </button>
                <Link to='/'>Ana Sayfaya Dön</Link>
            </div>
        </React.Fragment>
    );
}
export default YaziFormu;
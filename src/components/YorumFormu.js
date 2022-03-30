import React, { useState } from 'react';


const YORUM_BASLANGIC = {
    display_name: "",
    body: "",
}

const YorumFormu = (props) => {

    const [commentBody, setCommentBody] = useState(YORUM_BASLANGIC);

    const handleOnChange = (event) => {
        setCommentBody({ ...commentBody, [event.target.name]: event.target.value })
    }

    return (
        <React.Fragment>
            <div> <h3>Yorum Yaz</h3>
                <form className='ui form' onSubmit={(event) => {
                    props.handleSubmit(event, commentBody);
                    setCommentBody(YORUM_BASLANGIC);
                }}>
        {/* handleCommentSubmit normalde değeri değiştiğinde burada yakalama işlemi yapıyoruz ancak yorum değişkeni yerine kendisine bağlarsak bu durumda her değer değişiminde tetiklenir
        ancak bu durumda arrow function'a eklenen (commentBody) nesnesi (event nesnesine dönüştürülür)
         (e) => {
             e.preventDefault();
             handleCommentSubmit(commentBody)
         }
    }> */}
                    <div className="ui small icon input">
                        <input type="text" placeholder="Adınız" onChange={handleOnChange} name="display_name" value={commentBody.display_name} />        {/*((e) => { setDisplay_Name(e.target.value) }) */}
                    </div>
                    <textarea name='body' placeholder='Yorumunuz' rows="3" onChange={handleOnChange} value={commentBody.body}></textarea>
                    <button className="ui blue button" type='submit'>Yorum Gönder</button>
                </form></div>
        </React.Fragment>
    )
}
export default YorumFormu;
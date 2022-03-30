import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../api/api';
import YaziYorumlari from './YaziYorumlari';
import { Link } from 'react-router-dom';

const YaziDetayi = (props) => {

    //console.log(props);

    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    // const [query, setQuery]=useState(id);

    // useEffect(() => {
    //       const getFetchURL = () => {
    //     return 'https://react-yazi-yorum.herokuapp.com/posts/'+query;
    // }

    // async function fetchData() {
    //     const result = await axios(getFetchURL());
    //     setQuery(result.data)
    // }

    //   return () => {
    //     fetchData();
    //   }
    // }, [query])

    //console.log(props)

    // useEffect(() => {
    //     axios
    //         .get( id )
    //         .then((response) => {
    //             setYaziDetayi(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [id])

    const handleCommentSubmit = (event, commentBody) => {
        event.preventDefault();
        axios
            .post(`https://react-yazi-yorum.herokuapp.com/${id}/comments`, commentBody)
            .then(response => {
                setYorumlar([...yorumlar, response.data]);

            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        axios
            .all([api().get(`posts/${id}`),
            api().get(`/posts/${id}/comments`)])
            .then(responses => {
                setYaziDetayi(responses[0].data);
                setYorumlar(responses[1].data);
            })
            .catch(error => {
                console.log(error);
            })
        // axios
        //     .then((response) => {
        //     setYaziDetayi(response.data)

        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        // axios.get()
        //     .then((response) => {
        //         setYorumlar(response.data);
        //     });
    }, [id]);

    return (
        <React.Fragment>
            <h2 className='ui heaader'> {yaziDetayi.title}</h2>
            <p>{YaziDetayi.created_at}</p>
            <div className="ui buttons">
                <Link className="ui blue button" to={`/posts/${YaziDetayi.id}/edit`}>Düzenle</Link>
                {/* <button className="ui red button">Sil</button> */}
            </div>
            <p>{YaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit} />
        </React.Fragment>
    );
};
export default YaziDetayi;
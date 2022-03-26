import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YaziDetayi = ((props) => {
   

    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
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

     console.log(props)

    useEffect(() => {
        axios
            .get( id )
            .then((response) => {
                setYaziDetayi(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id])

    return (
        <React.Fragment>
            <h2 className='ui heaader'> {yaziDetayi.title}</h2>
            <p>{YaziDetayi.created_at}</p>
            <p>{YaziDetayi.content}</p>
        </React.Fragment>
    );
});
export default YaziDetayi;
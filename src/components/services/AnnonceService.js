import axios from 'axios';

const kriliya_database = "http://localhost:8080/kriliya/annonce";

class AnnonceService {

    getAnnonce(){
        return axios.get(`http://localhost:8080/kriliya/annonce`);
    }

}

export default AnnonceService;
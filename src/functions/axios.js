import axios from 'axios';
export const getMesAnnonce = async () => await axios.get("http://localhost:8080/kriliya/mesAnnonces/1")
export const getAnnonce = async (id) => await axios.get("http://localhost:8080/kriliya/annonce/"+id)
export const addAnnonce = async (annonce) => await axios.post("http://localhost:8080/kriliya/annonce/save", annonce)
export const updateAnnonce = async (id, annonce) => await axios.put("http://localhost:8080/kriliya/annonce/"+id, annonce)
export const deleteAnnonce = async (id) => await axios.delete("http://localhost:8080/kriliya/annonce/"+id)
export const addImage = async (image) => await axios.post("http://localhost:8080/kriliya/images", image)
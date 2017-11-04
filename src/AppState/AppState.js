import mobx,{observable} from 'mobx'
import axios from 'axios'



const API_URL = 'https://api.spotify.com/v1/search';
const accessToken= "BQA9dLoCqYIETBVuzDikxK22M54RlalvzP65rNf52TI82GFAu3F-EYBK1uqppY2OpKF7zFZkYvzZwxCVcZ79zgFbNDOcb_BsYn93hAdcOekTSWp5QXs65bcRbV_JH81ObB3vWS4yUgXET5vdZBunk9wN2lJC1qC_1r5INKI1uhDA9GLcY1HeuUw&refresh_token=AQAV26d4hYwJo8HBZJgc9rq0Xudw9CEalpL8JUkZoM8uxsokS-ig3KBR6po5jyIVN8uDWOqYeJ5HfcIHrw55TpPg9OgXiRWU_156ZsCGmFaFW5NOxtzqNmSgoGlFUWo3Z_s"


class AppState {
    @observable query;
    @observable musics=[];

    async getMusics(query){
        if(!query){
            this.musics=[]
            return;
        }

        const requestURL = `${API_URL}?q=${query}&type=track&limit=10`;

        try {
            const response = await axios.get(requestURL,{
              headers: {
                'Authorization': 'Bearer ' + accessToken
          }});
            this.musics = response.data.tracks.items;
            debugger
          } 
          catch (e) {
            alert('Connection error', 'Couldn\'t fetch the data.');
          }

    }
}

var appState = new AppState
export default appState
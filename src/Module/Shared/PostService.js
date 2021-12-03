import { Http } from "../../Helper/Http";

const API_ENPOINT = {
    POST_CONTENT: '/post/create',
    DELETE: '/post/delete?id=',
    EDIT:'/post/update?id=',
    LIST: '/post/list'
}
class PostService {
    constructor() {
        if(PostService._instance) {
            return PostService._instance;
        }
        PostService._instance = this;
    }

    post_content(data) {
        return Http.post(API_ENPOINT.POST_CONTENT, data);
    }
    Delete(id) {
        return Http.post(API_ENPOINT.DELETE + id)
    }
    List() {
        return Http.get(API_ENPOINT.LIST)
    }
    Edit(data, id){
        return Http.post(API_ENPOINT.EDIT + id, data);
    }

}
const instance = new PostService();
export default instance;

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Header from '../Header';
import keys from '../../constant/keys';
import axios from 'axios';
import ENDPOINT from '../../constant/endpoint';

const PostCard = (props) => {
    const { post } = props;
    const saveBookmark = async (event, postId, userId) => {
        event.preventDefault()
        const bookmarkData = {
            postId: postId,
            userId: userId
        };
        const data = await axios.post(ENDPOINT.bookmark.create, bookmarkData, {
            headers: {
                'Authorization': `Bearer ${keys.jwtKey}`
            }
        })
        console.log(data)
    }
    return (
        <>
            <Header />
            {
                post.map(p => {
                    return (
                        <div className="mt-6 w-11/12 mx-auto" key={p.id}>
                            <Link to={"/post/" + p.id}>
                                <div className="shadow-lg rounded-3xl p-4 text-black bg-white relative border transition ease-in-out delay-150 hover:scale-105 active:border-blue" >
                                    {/* <form method="post"> */}
                                    <button type="button" onClick={event => saveBookmark(event, p.id, "asdasd")}>
                                        <div className="shadow-xl w-fit p-3 rounded-2xl hover:bg-blue-100 bg-white 
                                        text-blue-800 absolute top-0 right-8 bordered">
                                            <FontAwesomeIcon icon={faBookmark} size="xl"></FontAwesomeIcon>
                                        </div>
                                    </button>
                                    {/* </form> */}
                                    <h1 className="text-xl">{p.title}</h1>
                                    <p className="text-sm">{p.created_at}</p>
                                    <div className="mt-4">
                                        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs 
                                        font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{p.tag}</span>
                                    </div>
                                    {/* <div className="flex content-between"> */}
                                    {/* </div> */}
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
};

export default PostCard;

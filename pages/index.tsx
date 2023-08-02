import { useEffect, useState } from "react";
import Layout from "../layouts/Layout";

export default function Home() {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
const omnia ='hello world';
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res=localStorage.getItem("token");
        
        const response = await fetch("http://127.0.0.1:8000/api/listcomments", {
          headers:{
            "Authorization":`Bearer ${localStorage.getItem("token")}`
          },

        });

        const content = await response.json();
        console.log(content.comments);
      const serializedObject = JSON.stringify(content);
      
      localStorage.setItem('content', serializedObject);
     
        setMessage(`Hi ${content.user.name}`);
        setComments(content.comments);
        setAuth(true);
      } catch (e) {
        setMessage("You are not logged in");
        setAuth(false);
      }
    })();
  }, []); 
  return <Layout auth={auth}>{message}
  <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    
  </Layout>

}
  



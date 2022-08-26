import {useState} from "react"
function ReviewForm({setReviews}){
    const [values, setValues] = useState({
        title:"",
        content:"",
        user_id: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        event.target.reset()
        setReviews(reviews=>[...reviews,values])
        fetch('/reviews',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
        })
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            
            }).catch(e => {
            console.log(e);
            })}
    
    
    
    
    
    const handleTitle = (event) => {
        setValues({...values, title: event.target.value})
    }
    
    
    const handleContent = (event) => {
        setValues({...values, content:event.target.value})
    }
    const handleUserId = (event) => {
        setValues({...values, user_id:event.target.value})
    }
    

    return(
        <div className="form-container">
            <header className="reviewsHeader">Leave Review</header>
            
            <form className="reviews-form" onSubmit={handleSubmit}>
               <div className="titleBox"> <input
                    onChange={handleTitle}
                    value={values.title}
                    className="form-field"
                    placeholder="Title"
                    name="reviewTitle" />
                </div>
                
                <div className="contentBox">
                <input 
                    onChange={handleContent}
                    value={values.content}
                    className="form-field"
                    placeholder="Content"
                    name="reviewContent"/>
                </div>
                <div>
                <input 
                    onChange={handleUserId}
                    value={values.user_id}
                    className="user_id"
                    placeholder="user_id"
                    name="reviewUser_id"/>
                </div>
                
                <input className="submit" type="submit"/>
            </form>
            
        </div>
    )
    

}
    
export default ReviewForm;
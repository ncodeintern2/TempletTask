import React from "react";

const CustomerResponse =() =>{
    return(
        <div className="comment-bottom w3pvt_mail_grid_right p-0 my-lg-5 my-4">
        <h4 className="leave-w3ls mb-5">Leave a Reply</h4>
        <form action="#" className="w3ls-contact-fm" method="post">


            <div className="form-group">
                <label>Write Message</label>
                <textarea className="form-control" name="Message" placeholder="" required=""></textarea>
            </div>
            <div className="row leave-comment">
                <div className="col-lg-6 form-group">
                    <label>First Name</label>
                    <input className="form-control" type="text" name="Name" placeholder="" required="" />
                </div>
                <div className="col-lg-6 form-group">
                    <label>Email</label>
   
                    <input className="form-control" type="email" name="Email" placeholder="" required="" />
                </div>
            </div>

            <button type="submit" className="btn read mt-3">Submit</button>
        </form>
    </div>

    )

}
export default CustomerResponse;
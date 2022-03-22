import React,{useRef} from "react";

const ClientData =() =>{
    const inputEmailRef = useRef('')

    const submitHandler =(e) =>{
        e.preventDefault()

        const EnteredEmail =inputEmailRef.current.value 
    }

    return(
        <div className="col-md-7 subscribe-right p-lg-5 py-sm-5 py-4">
                            <form action="#" onSubmit={submitHandler}>
                                <input type="email" name="email" placeholder="Enter your email here" required="" ref={inputEmailRef} />
                                <button className="btn1"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
                            </form>
                            <p>we never share your email with anyone else</p>
                        </div>
    )

}
export default ClientData;
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/features/userSlice";

const UserForm = ( ) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    const submitData = (data) => {
        dispatch(addUser(data))
        reset()
    }

    return(
        <form  onSubmit={handleSubmit(submitData)} className="mb-4">
            <div className="mb-3">
                <label  className="form-label">Name</label>
                <input 
                    type="text" 
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your Name" 
                    { ...register('name', { required: 'Name is required'})}
                />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="name@example.com" 
                    { ...register('email', { required: 'Email is required'})}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <button className="btn btn-primary" type="submit">Add User</button>
        </form>
    )
}

export default UserForm;
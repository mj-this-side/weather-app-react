import React from 'react'

export default function Index() {
    const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email", { required: true })} />
        {errors.email && <span className="error-message">Email is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password", { required: true })} />
        {errors.password && <span className="error-message">Password is required</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  )
}


    
 
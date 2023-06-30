import {useState} from 'react'
import { Link } from 'react-router-dom'

const initialState = {
    gender:'',
}

const Gender = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
]


const Register = () => {

    const[formData] = useState(initialState);
    const {gender} =formData;

    
  return (
    <div className='flex justify-center'>
    <form className='pt-[8rem] '>
        <h1 className='font-bold text-black text-[2rem]'>REGISTER</h1>
        <p className='font-bold text-gray-400'>Please fill in this form to create an account.</p>

        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Surname:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="text"
             name='surname'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>First Name:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="text"
             name='firstname'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Other Name:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="text"
             name='othername'
             />
        </div>

        <div className="">
            <select className='block mb-2 text-black font-bold text-[1.2rem] w-[15vw] border-solid border border-[gray] bg-slate-300 box-border  p-[7px] rounded-[4px] mt-8 '  name="gender">
                <option className=' ' value={gender}>-- Gender</option>
                {Gender.map((e) =>{
                    return(
                        <option key={e.id} value={e.name} >
                            {e.name}
                        </option>
                    )
                })}
            </select>
        
        </div>
        

        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Date of Birth:</label>
            <input className='w-[15vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300 box-border h-9'
             type="date"
             name='date'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Sign Up Date:</label>
            <input className='w-[15vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300 box-border h-7'
             type="time"
             name='time'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Next of Kin:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="nextkin"
             name='nextkin'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Phone Number:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="number"
             name='phoneNumber'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Email:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="email"
             name='email'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Username:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="text"
             name='username'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>Password:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="password"
             name='password'
             />
        </div>
        <div className=''>
            <label className='block mb-2 text-black font-bold text-[1.2rem]'>ConfirmPassword:</label>
            <input className='w-[40vw] p-[7px] rounded-[4px] border-solid border border-[gray] bg-slate-300'
             type="password"
             name='confirmPassword'
             />
        </div>
        <p className='pt-10'>By creating an account you agree to our <span className='text-blue-700'> Terms & Privacy.</span></p>

        <button className=' bg-black text-white rounded-[4px] border-solid border-gray-300 box-border h-10 w-[40vw] mt-5 font-bold text-[1rem] hover:bg-blue-700'>Register</button>

        <p>Already have an account? <Link to='/login'><span className='text-blue-700'> Login </span></Link></p>


    </form>
    </div>
  )
}

export default Register

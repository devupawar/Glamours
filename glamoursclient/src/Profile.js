import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { logout } from './ReduxWork/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const navi = useNavigate()
    const { UserData } = useSelector((state) => state.user)
    const dispatcher = useDispatch()
    console.log("DATA", UserData)


    return (
        <div>
            <div className='Ppanel'>
                <h1 className='phead'>Your Profile</h1>
                <h4 className='pdata'>Customer Name :  {UserData?.CustomerName}</h4>
                <h4 className='pdata'>Customer Email : {UserData?.CustomerEmail}</h4>
                <h4 className='pdata'>Customer MobileNo : {UserData?.CustomerMobile}</h4>
                <h4 className='pdata'>Customer Address : {UserData?.CustomerAddress}</h4>
                <Button onClick={() => {
                    dispatcher(logout())
                    navi('/login')
                }} className='pbt'>Logout</Button>
            </div>
            <h1>{UserData.CustomerName}</h1>
        </div>
    )

}


export default Profile
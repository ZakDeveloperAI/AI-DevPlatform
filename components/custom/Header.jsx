
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import Colors from '@/data/Colors'
import { UserDetailContext } from '@/context/UserDetailContext';
import SignInDialog from './SignInDialog';
import { useSidebar } from '../ui/sidebar';

function Header() {
  const {userDetail, setUserDetail} = useContext(UserDetailContext);
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div className='p-4 flex justify-between items-center'>
        <Image src={"/logo.png"} alt="Logo" width={60} height={60} />
        {!userDetail?.name ? <div className='flex gap-5'>
            <Button  variant="ghost"
            onClick={() => setOpenDialog(true)}
            >Sign In</Button>
            <Button  className='text-white' 
            onClick={() => setOpenDialog(true)}
            style={{
                backgroundColor: Colors.BLUE
            }}>Get Started</Button>
        </div>
        :
        <Image src={userDetail?.picture} alt="Logo" 
        width={40} height={40} className='rounded-full'
        />
        }
        <SignInDialog openDialog={openDialog} closeDialog={(v)=>setOpenDialog(v)}/>
    </div>
    
  )
}

export default Header
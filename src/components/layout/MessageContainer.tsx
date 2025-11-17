import React from 'react'

const MessageContainer:React.FC = () => {
  return (
	<div className=' bg-gray-50 w-full'>
		<NoChatSelected/>
	</div>
    
  )
}

export default MessageContainer;




const NoChatSelected = () => {
	// const { authUser } = useAuthContext();
    
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-lg text-gray-500  flex flex-col items-center gap-2'>
				{/* <p>{`Welcome 👋 ${authUser.fullName} ❄`}</p> */}
				<p>Select a conversation to start messaging</p>
				{/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
			</div>
		</div>
	);
};